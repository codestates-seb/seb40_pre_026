package com.codestates.preproject.dto;

import lombok.*;

@NoArgsConstructor
public class UserDTO {
    @Setter
    @Getter
    @AllArgsConstructor
    @Builder
    public static class User{
        private String nickName;
        private String email;
        private String password;
        //private String authority;

        public User(){}
    }
}
