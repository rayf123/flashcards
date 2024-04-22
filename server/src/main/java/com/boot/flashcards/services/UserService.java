package com.boot.flashcards.services;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.boot.flashcards.models.User;
import com.boot.flashcards.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {
	
	@Autowired
	private final UserRepository ur;
	
	public UserDetailsService userDetailsService() {
		return new UserDetailsService() {
			@Override
			public UserDetails loadUserByUsername(String username) {
				return ur.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
			}
		};
	}
	
	public User saveUser(User newUser) {
		return ur.save(newUser);
	}
}
