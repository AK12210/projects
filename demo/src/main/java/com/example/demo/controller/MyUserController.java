package com.example.demo.controller;

import com.example.demo.model.MyUser;
import com.example.demo.repository.MyUserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.RequestBody; 
@CrossOrigin(origins = "*")
public class MyUserController {

    @Autowired
    private MyUserRepository userRepository;

    @GetMapping
    public List<MyUser> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping
    public MyUser createUser(@RequestBody MyUser user) {
        return userRepository.save(user);
    }
}
