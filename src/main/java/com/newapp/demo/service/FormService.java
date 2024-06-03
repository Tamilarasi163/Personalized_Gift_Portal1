package com.newapp.demo.service;

import com.newapp.demo.DTO.FormDTO;

import java.util.List;

public interface FormService {

    FormDTO createForm(FormDTO u);
    List<FormDTO> getAllForm();

    // Add additional methods as needed
}



