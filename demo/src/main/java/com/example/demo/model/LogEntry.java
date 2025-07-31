package com.example.demo.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "logs")
public class LogEntry {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String action;
    private String username;
    private LocalDateTime timestamp;

    @Column(length = 1000)
    private String details;
	
    public Long getId() {
        return id;
    }

    public String getAction() {
        return action;
    }

    public String getUsername() {
        return username;
    }

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public String getDetails() {
        return details;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }

    public void setDetails(String details) {
        this.details = details;
    }
}
