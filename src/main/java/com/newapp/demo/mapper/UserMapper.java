package com.newapp.demo.mapper;

import com.newapp.demo.DTO.UserDTO;
import com.newapp.demo.model.User;

public class UserMapper {

    public static UserDTO maptoUserDto(User user) {

        UserDTO userDTO=new UserDTO();

        userDTO.setUserId(user.getUserId());
        userDTO.setUserName(user.getUserName());
        userDTO.setEmail(user.getEmail());
        userDTO.setPassword(user.getPassword());
        userDTO.setMobile(user.getMobile());
        userDTO.setUserRole(user.getUserRole());
        
        return userDTO;
    }

    public static User maptoUser(UserDTO userto) {

        User user=new User();
        user.setUserId(userto.getUserId());
        user.setUserName(userto.getUserName());
        user.setEmail(userto.getEmail());
        user.setPassword(userto.getPassword());
        user.setMobile(userto.getMobile());
        user.setUserRole(userto.getUserRole());
          
        return user;        
    }

}
