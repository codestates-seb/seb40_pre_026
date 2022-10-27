package com.codestates.preproject.service;

import com.codestates.preproject.dto.UserDTO;
import com.codestates.preproject.entity.UserEntity;
import com.codestates.preproject.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class UserService {
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public void saveUserData(@RequestBody UserDTO.User user){
        String encodedPassword = passwordEncoder.encode(user.getPassword()); //패스워드 암호화 작업
        user.setPassword(encodedPassword); //데이터베이스에 등록하기 위해 다시 암호화된 패스워드 user에 setting
        UserEntity userEntity= UserEntity.builder().email(user.getEmail())
                .nickName(user.getNickName()).password(user.getPassword()).build();
        userRepository.save(userEntity);
    }

    public boolean login(@RequestBody UserDTO.User user){
        UserEntity findUser = userRepository.findByEmail(user.getEmail());
        if(findUser==null){
            return false;
        }
        if(!passwordEncoder.matches(user.getPassword(), findUser.getPassword()))
            return false;
        return true;
    }
}
