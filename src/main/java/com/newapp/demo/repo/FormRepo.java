package com.newapp.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.newapp.demo.model.Form;

public interface FormRepo extends JpaRepository<Form, Long> {

}

