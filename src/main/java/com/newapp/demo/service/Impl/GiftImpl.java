package com.newapp.demo.service.Impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.newapp.demo.DTO.GiftDTO;
import com.newapp.demo.mapper.GiftMapper;
import com.newapp.demo.model.Gift;
import com.newapp.demo.repo.GiftRepo;
import com.newapp.demo.service.GiftService;
import com.newapp.demo.exception.ResourceNotFoundException;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class GiftImpl implements GiftService {
    private GiftRepo giftRepo;

    @Override
    public GiftDTO createGift(GiftDTO u) {
        Gift r = GiftMapper.maptoGift(u);
        Gift saved = giftRepo.save(r);
        return GiftMapper.maptoGiftDto(saved);
    }

    @Override
    public GiftDTO getGiftById(Long giftid) {
        Gift u = giftRepo.findById(giftid)
                .orElseThrow(() -> new ResourceNotFoundException("User is not exist with given id:" + giftid));
        return GiftMapper.maptoGiftDto(u);
    }

    @Override
    public List<GiftDTO> getAllGift() {
        List<Gift> k = giftRepo.findAll();
        List<GiftDTO> ans = new ArrayList<>();
        for (Gift l : k) {
            ans.add(GiftMapper.maptoGiftDto(l));
        }
        return ans;
    }

    // GiftImpl.java

    @Override
    public GiftDTO updateGift(Long giftId, GiftDTO giftDTO) {
        Gift existingGift = giftRepo.findById(giftId)
                .orElseThrow(() -> new ResourceNotFoundException("Gift not found with id: " + giftId));

        existingGift.setGiftname(giftDTO.getGiftName());
        existingGift.setGiftDetails(giftDTO.getGiftDetails());
        existingGift.setGiftPrice(giftDTO.getGiftPrice());
        Gift updatedGift = giftRepo.save(existingGift);
        return GiftMapper.maptoGiftDto(updatedGift);
    }

    @Override
    public void deleteGift(Long giftId) {
        Gift existingGift = giftRepo.findById(giftId)
                .orElseThrow(() -> new ResourceNotFoundException("Gift not found with id: " + giftId));

        giftRepo.delete(existingGift);
    }

}
