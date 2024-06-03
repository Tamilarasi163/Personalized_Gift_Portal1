package com.newapp.demo.service;

import java.util.List;


import com.newapp.demo.DTO.UserDTO;

public interface UserService 
{
    UserDTO createUser(UserDTO us);
    UserDTO getUserById(Long userid);
    List<UserDTO> getAllUser(); 
    
}