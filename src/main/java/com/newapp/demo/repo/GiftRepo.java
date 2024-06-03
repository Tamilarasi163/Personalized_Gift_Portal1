package com.newapp.demo.repo;
import org.springframework.data.jpa.repository.JpaRepository;

import com.newapp.demo.model.Gift;

public interface GiftRepo extends JpaRepository<Gift, Long> {

}
