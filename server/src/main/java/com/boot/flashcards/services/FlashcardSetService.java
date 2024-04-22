package com.boot.flashcards.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.boot.flashcards.models.Role;
import com.boot.flashcards.models.Set;
import com.boot.flashcards.models.User;
import com.boot.flashcards.repositories.FlashcardSetRepository;

@Service
public class FlashcardSetService { //Service talks to the Repository
	@Autowired
	private FlashcardSetRepository cardSetRepository;
	
	public List<Set> findSetByUser(String username) {
		return cardSetRepository.findSetBySetOwner(username);
	}	
	
	public List<Set> createSet(String title, String description, String username) {
		long id = findMostRecentSet().getId() + 1;

		Set s = Set.builder()
				.setOwner(username)
				.title(title)
				.description(description)
				.id(id)
				.build();

		cardSetRepository.save(s);
		return findSetByUser(username);
	}
	
	public List<Set> updateSet(String username, String title, String description, long id) {
		if (cardSetRepository.findSetById(id).getSetOwner().equals(username)) {
			cardSetRepository.updateSet(id, title, description);
		}

		return cardSetRepository.findSetBySetOwner(username);
	}
	
	public Set findMostRecentSet() {
		return cardSetRepository.findAll().get(0);
	}
}
