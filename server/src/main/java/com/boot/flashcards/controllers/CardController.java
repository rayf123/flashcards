package com.boot.flashcards.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.flashcards.dto.CardRequest;
import com.boot.flashcards.models.Card;
import com.boot.flashcards.services.CardService;

@RestController
@RequestMapping("/study")
public class CardController { 
	
	@Autowired
	private CardService cs;
	
	@PostMapping("/")
	public ResponseEntity<List<Card>> findCardsBySetId(@RequestBody CardRequest req) { //change EditSetRequest dto to something general to use for CreateSet
		System.out.println("POST /study/");
		List<Card> cards = cs.findCardsBySetId(req.getId());
		if (cards.size() > 0 && !cards.get(0).getUsername().equals(req.getUsername())) return new ResponseEntity<>(HttpStatus.FORBIDDEN);
		
		return new ResponseEntity<List<Card>>(cards, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete")
	public ResponseEntity<List<Card>> deleteCardById(@RequestBody CardRequest req) {
		
	}
}
