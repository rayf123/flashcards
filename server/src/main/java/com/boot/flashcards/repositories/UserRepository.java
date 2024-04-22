package com.boot.flashcards.repositories;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.boot.flashcards.models.User;

@Repository
public interface UserRepository extends MongoRepository<User, ObjectId>{
	Optional<User> findByUsername(String username);
}
