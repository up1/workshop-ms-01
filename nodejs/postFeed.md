# Group 1
## POST /feed

Add a new post in the feed

* Content-Type: "application/json"

```json
{
  "username": "Wichanart",
  "content": "Good morning Sunday"
}
```

---

### Example response

* Status: 200
* Content-Type: "application/json; charset=utf-8"

```
{"feedId":4,"username":"Wichanart","content":"Good morning Sunday","like":0}
```