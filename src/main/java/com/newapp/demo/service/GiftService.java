package com.newapp.demo.service;

import java.util.List;

import com.newapp.demo.DTO.GiftDTO;

public interface GiftService {
    GiftDTO createGift(GiftDTO giftDTO);

    GiftDTO getGiftById(Long giftId);

    List<GiftDTO> getAllGift();

    GiftDTO updateGift(Long giftId, GiftDTO giftDTO);

    void deleteGift(Long giftId);
}
