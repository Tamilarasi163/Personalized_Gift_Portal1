package com.newapp.demo.repo;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.newapp.demo.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    
    Optional<User> findByUserName(String userName);

}

