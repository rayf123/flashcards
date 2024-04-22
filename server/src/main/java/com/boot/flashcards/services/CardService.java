package com.boot.flashcards.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.flashcards.models.Card;
import com.boot.flashcards.repositories.CardRepository;

@Service
public class CardService {
	@Autowired
	private CardRepository cr;
	
	public List<Card> allCards() {
		return cr.findAll();
	}
	
	public List<Card> findCardsBySetId(long id) {
		return cr.findCardsByCardOwner(id);
	}
	
	public List<Card> findCardsOrderByIdDesc() {
		return cr.findAll();
	}
	
	public 
}
