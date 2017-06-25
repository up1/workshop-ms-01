# Chairat's Silk Test

## GET /search/somkiat

Search for user with word "somkiat".

* Content-Type: "application/json"
* Accept: "application/json"

```json
{
  "dummy": "dummy"
}
```

===

### Example Response

* Status: 200
* Content-Type: "application/json"

```json
[
  {
    "username": "somkiat.p",
    "displayname": "Somkiat Pui"
  },
  {
    "username": "somkiatx",
    "displayname": "Somkiat Xxx"
  },
  {
    "username": "somkiaty",
    "displayname": "Somkiat Yyy"
  }
]
```
