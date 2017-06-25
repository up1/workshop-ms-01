package workshop01.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchUserController {
	@GetMapping("/")
	public String hello() {
		return "This is the SearchUser service.";
	}
	
	@GetMapping("/search/Somkiat")
	public SearchUserResult search() {
		return new SearchUserResult("somkiat.p", "Somkiat Pui");
	}
}