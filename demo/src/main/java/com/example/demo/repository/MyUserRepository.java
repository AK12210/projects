package com.example.demo.repository;

import com.example.demo.model.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.List;

@Repository
public interface MyUserRepository extends JpaRepository<MyUser, Long> {

    Optional<MyUser> findByUsername(String username);
    List<MyUser> findByUsernameContainingIgnoreCaseOrRolesContainingIgnoreCase(String username, String roles);
}