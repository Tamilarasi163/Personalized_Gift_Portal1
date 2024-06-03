package com.newapp.demo.service.Impl;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.newapp.demo.DTO.FormDTO;
import com.newapp.demo.model.Form;
import com.newapp.demo.repo.FormRepo;
import com.newapp.demo.service.FormService;
import com.newapp.demo.mapper.FormMapper;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class FormImpl implements FormService {
    private FormRepo formRepo;

    @Override
    public FormDTO createForm(FormDTO u) {
        Form r = FormMapper.mapToForm(u);
        Form saved = formRepo.save(r);
        return FormMapper.mapToFormDTO(saved);
    }

   
    @Override
    public List<FormDTO> getAllForm() {
        List<Form> k = formRepo.findAll();
        List<FormDTO> ans = new ArrayList<>();
        for (Form l : k) {
            ans.add(FormMapper.mapToFormDTO(l));
        }
        return ans;
    }

    // FormImpl.java

    

}

