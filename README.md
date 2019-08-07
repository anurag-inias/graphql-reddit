# About
A pet project to explore GraphQL capabilities with [Reddit APIs](https://www.reddit.com/dev/api/). 

This project is
- **not official** in any way
- not meant to be exhaustive


## Example

```graphql
{
  user(name: "rm-test") {
    id,
    comments {
      body,
      score
    }
  }
}
```

will give

```JSON
{
  "data": {
    "user": {
      "id": "4bjw7189",
      "comments": [
        {
          "body": "test ~~comment~~",
          "score": 1
        }
      ]
    }
  }
}
```

