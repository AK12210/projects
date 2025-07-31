package com.example.demo.service;

import com.example.demo.model.LogEntry;
import com.example.demo.repository.LogEntryRepository;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

@Service
public class LogService {
	 private final LogEntryRepository logEntryRepository;

	    public LogService(LogEntryRepository logEntryRepository) {
	        this.logEntryRepository = logEntryRepository;
	    }

	    public void log(String action, String username, String details) {
	        LogEntry log = new LogEntry();
	        log.setAction(action);
	        log.setUsername(username);
	        log.setDetails(details);
	        log.setTimestamp(LocalDateTime.now());

	        logEntryRepository.save(log);
	    }
}
