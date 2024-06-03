package com.newapp.demo.mapper;

import com.newapp.demo.DTO.FormDTO;
import com.newapp.demo.model.Form;

public class FormMapper {

    public static Form mapToForm(FormDTO formDTO) {
        Form form = new Form();
        form.setFormId(formDTO.getFormId());
        form.setName(formDTO.getName());
        form.setEmail(formDTO.getEmail());
        form.setDescription(formDTO.getDescription());
        form.setImageUrl(formDTO.getImageUrl());
        // Map other properties as needed
        return form;
    }

    public static FormDTO mapToFormDTO(Form form) {
        FormDTO formDTO = new FormDTO();
        formDTO.setFormId(form.getFormId());
        formDTO.setName(form.getName());
        formDTO.setEmail(form.getEmail());
        formDTO.setDescription(form.getDescription());
        formDTO.setImageUrl(form.getImageUrl());
        // Map other properties as needed
        return formDTO;
    }
}
