package com.example.demo.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Table;

@Data
@Entity
@AllArgsConstructor
@Builder
public class MyUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String roles;
    @ManyToMany
    @JoinTable(
        name = "user_roles", // join table name
        joinColumns = @JoinColumn(name = "user_id"), // FK to MyUser
        inverseJoinColumns = @JoinColumn(name = "role_id") // FK to Role
    )
    private Set<Role> role = new HashSet<>();
    private boolean active;

    public MyUser() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRoles() {
        return roles;
    }

    public void setRoles(String roles) {
        this.roles = roles;
    }
    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}