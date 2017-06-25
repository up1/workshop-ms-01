package workshop01.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchUserController {
	@GetMapping("/")
	public String hello() {
		return "This is the SearchUser service.";
	}
	
	@GetMapping("/search/Somkiat")
	public ArrayList<SearchUserResult> search() {
		ArrayList<SearchUserResult> results = new ArrayList<SearchUserResult>();
		results.add(new SearchUserResult("somkiat.p","Somkiat Pui"));
		results.add(new SearchUserResult("somkiatx","Somkiat Xxx"));
		results.add(new SearchUserResult("somkiaty","Somkiat Yyy"));
		return results;
	}
}