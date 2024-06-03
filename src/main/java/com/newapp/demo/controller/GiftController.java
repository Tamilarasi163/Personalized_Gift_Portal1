package com.newapp.demo.controller;

import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newapp.demo.DTO.GiftDTO;
import com.newapp.demo.service.GiftService;
import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:4000")
@RequestMapping("/api/gifts")
public class GiftController {

    private  GiftService giftService;

    @PostMapping
    public ResponseEntity<GiftDTO> createGift(@RequestBody GiftDTO giftDTO) {
        GiftDTO createdGift = giftService.createGift(giftDTO);
        return new ResponseEntity<>(createdGift, HttpStatus.CREATED);
    }

    @GetMapping("/{giftId}")
    public ResponseEntity<GiftDTO> getGiftById(@PathVariable Long giftId) {
        GiftDTO giftDTO = giftService.getGiftById(giftId);
        return ResponseEntity.ok(giftDTO);
    }

    @PutMapping("/{giftId}")
    public ResponseEntity<GiftDTO> updateGift(@PathVariable Long giftId, @RequestBody GiftDTO giftDTO) {
        GiftDTO updatedGift = giftService.updateGift(giftId, giftDTO);
        return ResponseEntity.ok(updatedGift);
    }

    // @GetMapping("/all")
    // public List<GiftDTO> allGift(){
    //     return giftService.getAllGift();
    // }
    @GetMapping
    public ResponseEntity<List<GiftDTO>> getAllGift() {
    List<GiftDTO> user = giftService.getAllGift();
    return ResponseEntity.ok(user);
   }

    @DeleteMapping("/{giftId}")
    public ResponseEntity<Void> deleteGift(@PathVariable Long giftId) {
        giftService.deleteGift(giftId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

// package com.newapp.demo.controller;
// import java.util.List;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.prepost.PreAuthorize;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.newapp.demo.DTO.GiftDTO;
// import com.newapp.demo.service.GiftService;

// import lombok.AllArgsConstructor;

// @AllArgsConstructor
// @RestController
// @RequestMapping("/api/gift")

// public class GiftController {

// private GiftService giftser;

// // Build Add Employee REST API
// @PostMapping
// @PreAuthorize("hasAuthority('ADMIN')")
// public ResponseEntity<GiftDTO> createGift(@RequestBody GiftDTO giftDTO) {
// GiftDTO savedUser = giftser.createGift(giftDTO);
// return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
// }

// // Build Get Employee REST API
// @GetMapping("{id}")

// public ResponseEntity<GiftDTO> getGiftById(@PathVariable("id") Long UserId) {
// GiftDTO userDto = giftser.getGiftById(UserId);
// return ResponseEntity.ok(userDto);
// }

// // Build Get All Employee REST API
// @GetMapping
// public ResponseEntity<List<GiftDTO>> getAllGift() {
// List<GiftDTO> user = giftser.getAllGift();
// return ResponseEntity.ok(user);
// }

// }
