package com.boot.flashcards.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Document(collection = "sets")
@Builder
@Data
@AllArgsConstructor
@Getter
public class Set {
	@Id 
	private ObjectId _id;	
	
	private String setOwner;
	private String title;
	private String description;
	
	private long id;
}
