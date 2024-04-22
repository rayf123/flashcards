package com.boot.flashcards.services;

import org.springframework.boot.CommandLineRunner;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Service;

import com.boot.flashcards.dto.JwtAuthenticationResponse;
import com.boot.flashcards.dto.LoginRequest;
import com.boot.flashcards.dto.LogoutRequest;
import com.boot.flashcards.dto.RegisterRequest;
import com.boot.flashcards.models.Role;
import com.boot.flashcards.models.User;
import com.boot.flashcards.repositories.UserRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	private final UserRepository userRepo;
	private final UserService userService;
	private final PasswordEncoder passEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authManager;
	
	//generate a Cookie and send it to user with Cookie c = new Cookie(...) and c.setHttpOnly(true) / setSecure(false) just for http:localhost requests
	public JwtAuthenticationResponse register(RegisterRequest req) {
		
		var user = User.builder()
						.username(req.getUsername())
						.password(passEncoder.encode(req.getPassword()))
						.role(Role.USER)
						.build();
		
		user = userService.saveUser(user);
		var jwt = jwtService.generateToken(user);
		return JwtAuthenticationResponse.builder().token(jwt).build();
	}
	
	//generate a Cookie and send it to user with Cookie c = new Cookie(...) and c.setHttpOnly(true) / setSecure(false) just for http:localhost requests
	public JwtAuthenticationResponse login(LoginRequest req) {
		authManager.authenticate(
			new UsernamePasswordAuthenticationToken(req.getUsername(), req.getPassword())
		);
		var user = userRepo.findByUsername(req.getUsername()).orElseThrow(() -> 
			new IllegalArgumentException("Invalid Email or Password")
		);
		var jwt = jwtService.generateToken(user);
		return JwtAuthenticationResponse.builder().token(jwt).build();
	}
	
	public void logout(HttpServletRequest req, HttpServletResponse res) {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) new SecurityContextLogoutHandler().logout(req, res, auth); //not sure if this works or  not
        //delete the cookies. will be sent by frontend
        //when deleting set everything to the same as when it was made except expiration = 0ms
	}
	
	public String getAuthenticatedUser(HttpServletRequest req) {
		String authHeader = req.getHeader(HttpHeaders.AUTHORIZATION);
		String jwt = authHeader.substring(7);
		String username = jwtService.extractUserName(jwt);
		UserDetails ud = userService.userDetailsService().loadUserByUsername(username);
		if (!jwtService.isTokenValid(username, ud)) {
			return null;
		}
		
		return username;
	}
	
}
