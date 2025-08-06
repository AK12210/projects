package com.example.demo.dto;

public class RoleDTO {
    private String name;
    private String description;

    public RoleDTO(String name, String description) {
        this.name = name;
        this.description = description;
    }

    // Getters
    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}
