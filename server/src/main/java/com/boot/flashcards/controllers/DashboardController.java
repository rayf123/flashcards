package com.boot.flashcards.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.flashcards.dto.CreateSetRequest;
import com.boot.flashcards.dto.DataRequest;
import com.boot.flashcards.dto.EditSetRequest;
import com.boot.flashcards.models.Set;
import com.boot.flashcards.services.FlashcardSetService;

@RestController
@RequestMapping("/dashboard")
public class DashboardController { //Controller gets API calls then talks to the Service 
	
	@Autowired
	private FlashcardSetService cardSetService;
	
	@PostMapping("/")
	public ResponseEntity<List<Set>> getSetByUsername(@RequestBody DataRequest req) {
		return new ResponseEntity<List<Set>>(cardSetService.findSetByUser(req.getUsername()), HttpStatus.OK);
	}	
	
	@PostMapping("/create/")
	public ResponseEntity<List<Set>> createSet(@RequestBody CreateSetRequest req) {
		System.out.println("POST /dashboard/create/");
		String username = req.getUsername();
		String description = req.getDescription();
		String title = req.getTitle();
		
		return new ResponseEntity<List<Set>>(cardSetService.createSet(title, description, username), HttpStatus.OK);
	}
	
	@PatchMapping("/edit/")
	public ResponseEntity<List<Set>> editSet(@RequestBody EditSetRequest req) {
		System.out.println("PATCH /dashboard/edit/");
		String username = req.getUsername();
		String title = req.getTitle();
		String description = req.getDescription();
		long id = req.getId();
		
		return new ResponseEntity<List<Set>>(cardSetService.updateSet(username, title, description, id) , HttpStatus.OK);
	}
	
	@PostMapping("/test")
	public ResponseEntity<Set> test() {		
		return new ResponseEntity<Set>(cardSetService.findMostRecentSet(), HttpStatus.OK);
	}
	
	
	//check req.getUsername() == setOwner when accessing a set
}
