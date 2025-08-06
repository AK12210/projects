package com.example.demo.repository;

import com.example.demo.dto.RoleDTO;
import com.example.demo.model.MyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.Optional;
import java.util.List;

@Repository
public interface MyUserRepository extends JpaRepository<MyUser, Long> {

    Optional<MyUser> findByUsername(String username);
    List<MyUser> findByUsernameContainingIgnoreCaseOrRolesContainingIgnoreCase(String username, String roles);
    
    @Query("SELECT new com.example.demo.dto.RoleDTO(r.name, r.description) " +
            "FROM MyUser u JOIN u.role r WHERE u.username = :username")
     List<RoleDTO> findRoleDetailsByUsername(@Param("username") String username);
}