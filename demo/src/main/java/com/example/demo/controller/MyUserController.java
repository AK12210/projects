package com.example.demo.controller;

import com.example.demo.model.MyUser;
import com.example.demo.repository.MyUserRepository;
import com.example.demo.service.LogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.stereotype.Service;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;

import java.util.List;
import org.springframework.web.bind.annotation.RequestBody; 
import org.springframework.ui.Model;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController()
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class MyUserController {

    @Autowired
    private final MyUserRepository userRepository;
    private final LogService logService;
    private static final Logger logger = LoggerFactory.getLogger(MyUserController.class);
    
    public MyUserController(MyUserRepository userRepository, LogService logService) {
        this.userRepository = userRepository;
        this.logService = logService;
    }

    @PostMapping("/{cid}")
    public MyUser createUser(@PathVariable String cid, @RequestBody MyUser user) {
        MyUser savedUser = userRepository.save(user);
        String currentUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        logService.log("CREATE_USER", cid, "User created with ID: " + savedUser.getId());
        return savedUser;
    }
    
    @PutMapping("/{cid}/{id}")
    public MyUser updateUser(@PathVariable String cid, @PathVariable Long id, @RequestBody MyUser updatedUser) {
    	String currentUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        return userRepository.findById(id)
            .map(user -> {
                user.setUsername(updatedUser.getUsername());
                user.setPassword(updatedUser.getPassword());
                user.setRoles(updatedUser.getRoles());
                user.setActive(updatedUser.isActive());
                MyUser saved = userRepository.save(user);
                logService.log("UPDATE_USER", cid, "Updated user with ID: " + saved.getId());
                return saved;
            })
            .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    @DeleteMapping("/{cid}/{id}")
    public void deleteUser(@PathVariable String cid, @PathVariable Long id) {
    	String currentUsername = SecurityContextHolder.getContext().getAuthentication().getName();
        if (!userRepository.existsById(id)) {
            throw new RuntimeException("User not found with id " + id);
        }
        userRepository.deleteById(id);
        logService.log("DELETE_USER", cid, "Deleted user with ID: " + id);
    }
    @GetMapping()
    public List<MyUser> getUsers(@RequestParam(required = false) String search) {
        if (search != null && !search.isEmpty()) {
            return userRepository.findByUsernameContainingIgnoreCaseOrRolesContainingIgnoreCase(search, search);
        } else {
            return userRepository.findAll();
        }
    }
    
}
