package com.newapp.demo.controller;

import com.newapp.demo.DTO.FormDTO;
import com.newapp.demo.service.FormService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forms")
public class FormController {

    private  FormService formService;


    @PostMapping
    public ResponseEntity<FormDTO> createForm(@RequestBody FormDTO formDTO) {
        FormDTO createdForm = formService.createForm(formDTO);
        return new ResponseEntity<>(createdForm, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<FormDTO>> getAllForm() {
    List<FormDTO> user = formService.getAllForm();
    return ResponseEntity.ok(user);
   }

    
    
}
