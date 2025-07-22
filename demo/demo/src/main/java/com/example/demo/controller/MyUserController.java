package com.example.demo.controller;

import com.example.demo.model.MyUser;
import com.example.demo.repository.MyUserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.RequestBody; 
import org.springframework.ui.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class MyUserController {

    @Autowired
    private MyUserRepository userRepository;
    private static final Logger logger = LoggerFactory.getLogger(MyUserController.class);

    @GetMapping("/home")
    public String home(Model model) {
        List<MyUser> users = userRepository.findAll();
        logger.info("This is an info log message.");
        return "home";
    }

    @PostMapping
    public MyUser createUser(@RequestBody MyUser user) {
        return userRepository.save(user);
    }
}
