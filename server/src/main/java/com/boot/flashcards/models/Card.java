package com.boot.flashcards.models;

import org.bson.types.ObjectId;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
import lombok.Getter;

@Document(collection = "flashcards")
@Data
@AllArgsConstructor
@Getter
public class Card { //DB entity
	@Id 
	private ObjectId _id;	
	
	private long cardOwner;
	private String front;
	private String back;
	private String username;
	private int id;
//	private int __v;
}
