package com.boot.flashcards.repositories;

import java.util.List;
import java.util.Optional;
import java.util.stream.Stream;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.mongodb.repository.Update;
import org.springframework.stereotype.Repository;

import com.boot.flashcards.models.Set;
import com.boot.flashcards.models.User;

@Repository
public interface FlashcardSetRepository extends MongoRepository<Set, ObjectId> {
	List<Set> findSetBySetOwner(String setOwner);
	
	Set findSetById(long id);
	
	@Query(sort = "{_id: -1}", value = "{}")
	List<Set> findAll();
	
    @Query("{'id': ?0}")
    @Update("{'$set': {'title': ?1, 'description': ?2}}")
	Integer updateSet(long id, String title, String description);
    
	//createSet --> save
}
