package com.boot.flashcards.controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boot.flashcards.dto.JwtAuthenticationResponse;
import com.boot.flashcards.dto.LoginRequest;
//import com.boot.flashcards.dto.LogoutRequest;
import com.boot.flashcards.dto.RegisterRequest;
import com.boot.flashcards.services.AuthenticationService;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {
	
	private final AuthenticationService authService;
	
	@PostMapping("/login")
	public JwtAuthenticationResponse login(@RequestBody LoginRequest req) {
		System.out.println("POST /auth/login");
		System.out.println(req.getUsername());
		System.out.println(req.getPassword());
		
		return authService.login(req);
	}
	
	@PostMapping("/register")
	public JwtAuthenticationResponse register(@RequestBody RegisterRequest req) {
		System.out.println("/register");
		return authService.register(req);
	}
	
//	@PostMapping("/logout")
//	public String logout(HttpServletRequest req, HttpServletResponse res) {
//		authService.logout(req, res);
//		
//		return "redirect:/";
//	}
	
	@PostMapping("/user")
	public String user(HttpServletRequest req) {
		String user = authService.getAuthenticatedUser(req);
		return user;
	}
	
//	@PostMapping("/test")
//	public void t() {
//		System.out.println("hi");
//	}
	
}
