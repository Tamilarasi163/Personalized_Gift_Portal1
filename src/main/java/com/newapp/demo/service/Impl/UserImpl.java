package com.newapp.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.newapp.demo.DTO.UserDTO;
import com.newapp.demo.exception.ResourceNotFoundException;
import com.newapp.demo.mapper.UserMapper;
import com.newapp.demo.model.User;
import com.newapp.demo.repo.UserRepo;
import com.newapp.demo.service.UserService;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class UserImpl implements UserService {
  private UserRepo userRepo;
  private PasswordEncoder passwordEncoder;

  @Override
  public UserDTO createUser(UserDTO u) {
    u.setPassword(passwordEncoder.encode(u.getPassword()));
    User ans = UserMapper.maptoUser(u);
    ans = userRepo.save(ans);
    return UserMapper.maptoUserDto(ans);
  }

  @Override
  public UserDTO getUserById(Long userid) {
    User u = userRepo.findById(userid)
        .orElseThrow(() -> new ResourceNotFoundException("User is not exist with given id:" + userid));
    return UserMapper.maptoUserDto(u);
  }

  @Override
  public List<UserDTO> getAllUser() {
    List<User> li = userRepo.findAll();
    List<UserDTO> lis = new ArrayList<>();
    for (User u : li) {
      lis.add(UserMapper.maptoUserDto(u));
    }
    return lis;
  }
}
