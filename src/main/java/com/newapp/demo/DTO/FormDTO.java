package com.newapp.demo.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FormDTO {
    private Long formId;
    private String name;
    private String email;
    private String description;
    private String imageUrl;
}
