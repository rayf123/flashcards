package com.boot.flashcards.filters;


import java.io.IOException;

import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.boot.flashcards.services.JwtService;
import com.boot.flashcards.services.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {
	private final JwtService js;
	private final UserService us;

	@Override
	protected void doFilterInternal(@NonNull HttpServletRequest req, @NonNull HttpServletResponse res, @NonNull FilterChain filterChain)
			throws ServletException, IOException {
		String authHeader = req.getHeader("Authorization");
		String jwt = null;
		String username = null;
		
		if (!StringUtils.hasLength(authHeader) || !StringUtils.startsWithIgnoreCase(authHeader, "Bearer ")) {
			filterChain.doFilter(req, res);
			return;
		}		
		
		jwt = authHeader.substring(7);
		username = js.extractUserName(jwt);
		if (StringUtils.hasLength(username) && SecurityContextHolder.getContext().getAuthentication() == null) {
			UserDetails userDetails = us.userDetailsService().loadUserByUsername(username);
			if (js.isTokenValid(jwt, userDetails)) {
//				SecurityContext context = SecurityContextHolder.createEmptyContext();
				UsernamePasswordAuthenticationToken authToken = 
						new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
				authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(req));
//				context.setAuthentication(authToken);
//				SecurityContextHolder.setContext(context);
				SecurityContextHolder.getContext().setAuthentication(authToken);
			}
		}
		filterChain.doFilter(req, res);
	}

}
