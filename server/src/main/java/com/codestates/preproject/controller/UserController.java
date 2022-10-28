package com.codestates.preproject.controller;

import com.codestates.preproject.dto.UserDTO;
import com.codestates.preproject.service.UserService;
import com.codestates.preproject.util.CommonResponse;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/users")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value="/sign")
    @ResponseStatus(code = HttpStatus.ACCEPTED, reason = "user submitted")
    public void userSignUp(@RequestBody UserDTO.User user){
        userService.saveUserData(user);
    }

    @PostMapping(value="/login")
    public CommonResponse<Boolean> login(@RequestBody UserDTO.User user){
        return new CommonResponse<Boolean>(userService.login(user),HttpStatus.OK);
    }
}
