package com.example.demo.model;

import java.util.HashSet;
import java.util.Set;

import jakarta.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;

	    private String name;
	    private String description;


	    // Getters and Setters
	    public Long getId() {
	        return id;
	    }

	    public String getName() {
	        return name;
	    }

	    public void setName(String name) {
	        this.name = name;
	    }

	    public String getDescription() {
	        return description;
	    }

	    public void setDescription(String description) {
	        this.description = description;
	    }


}
