// package com.newapp.demo.mapper;

// import com.newapp.demo.DTO.GiftDTO;
// import com.newapp.demo.model.Gift;

// public class GiftMapper {
//   public static GiftDTO maptoGiftDto(Gift gift) 
//   {

//     GiftDTO giftDTO=new GiftDTO();
//     giftDTO.setGiftid(gift.getGiftid());
//     giftDTO.setGiftname(gift.getGiftname()); 
//     giftDTO.setGiftDetails(gift.getGiftDetails());
//     giftDTO.setGiftPrice(gift.getGiftPrice());
//     // System.out.println("Gift Name: " + giftDTO.getGiftName());
//     // System.out.println("Gift Image URL: " + giftDTO.getGiftImageUrl());
//     // System.out.println("Gift Details: " + giftDTO.getGiftDetails());
//     // System.out.println("Gift Price: " + giftDTO.getGiftPrice());

//     return giftDTO;

//     }

//   public static Gift maptoGift(GiftDTO giftto) 
//   {
//     Gift gift=new Gift();
//     gift.setGiftid(giftto.getGiftid());
//     gift.setGiftname(giftto.getGiftname()); 
//     gift.setGiftDetails(giftto.getGiftDetails());
//     gift.setGiftPrice(giftto.getGiftPrice());

//     return gift;

//   }

// }

package com.newapp.demo.mapper;

import com.newapp.demo.DTO.GiftDTO;
import com.newapp.demo.model.Gift;

public class GiftMapper {
  public static GiftDTO maptoGiftDto(Gift gift) {
    return new GiftDTO(gift.getGiftid(), gift.getGiftname(), gift.getGiftDetails(), gift.getGiftPrice(),gift.getImage());
  }

  public static Gift maptoGift(GiftDTO giftto) {
    return new Gift(giftto.getGiftid(), giftto.getGiftName(), giftto.getGiftDetails(), giftto.getGiftPrice(),giftto.getImage());

  }

}