package com.boot.flashcards.services;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

//import javax.crypto.SecretKey;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {
	
	private static final String SECRET; 
	private static final long EXPIRATION = 3600000; //1 min in ms
	
	private Claims extractAllClaims(String token) {
		return Jwts.parserBuilder().setSigningKey(SECRET).build().parseClaimsJws(token).getBody();
	}
	
	private <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
		Claims claims = extractAllClaims(token);
		return claimsResolver.apply(claims);
	}
	
	public String extractUserName(String token) {
		return extractClaim(token, Claims::getSubject); //
	}
	
	public Date extractExpiration(String token) {
		return extractClaim(token, Claims::getExpiration);
	}
	
	public String generateToken(UserDetails userDetails) {
		Map<String, Object> claims = new HashMap<>();
		return createToken(claims, userDetails.getUsername());
	}
	
	public boolean isTokenExpired(String token) {
		return extractExpiration(token).before(new Date());
	}
	
	public boolean isTokenValid(String token, UserDetails userDetails) {
		String userName = extractUserName(token);
		return userName.equals(userDetails.getUsername()) && !isTokenExpired(token);
	}
	
	public String createToken(Map<String, Object> claims, String username) {
		Date now = new Date(System.currentTimeMillis());
		Date expiry = new Date(now.getTime() + EXPIRATION);
		//SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
		return Jwts.builder()
				.setClaims(claims)
				.setSubject(username)
				.setIssuedAt(now)
				.setExpiration(expiry)
				.signWith(SignatureAlgorithm.HS256, SECRET)
				//.signWith(key)
				.compact();
				
				
	}
}
