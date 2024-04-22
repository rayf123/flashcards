package com.boot.flashcards.repositories;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.DeleteQuery;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.stereotype.Repository;

import com.boot.flashcards.models.Card;

@Repository
public interface CardRepository extends MongoRepository<Card, ObjectId>{
//	@Query("{'cardOwner': ?0}")
	List<Card> findCardsByCardOwner(long cardOwner);
	
	@Query(sort = "{_id: -1}", value = "{}")
	List<Card> findAll();
	
    @DeleteQuery("{'id': ?0}")
	Integer deleteCard(long id);

}