package workshop01.controller;

public class SearchUserResult {
	private String username;
	private String displayname;
	public SearchUserResult(String username, String displayname) {
		this.username = username;
		this.displayname = displayname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDisplayname() {
		return displayname;
	}
	public void setDisplayname(String displayname) {
		this.displayname = displayname;
	}
}
