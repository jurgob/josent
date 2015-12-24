# josent
josent (json simple client) is a client based on json and Promises
It's just a thiny layer around isomorphic fetch.

## examples:

### get:

```
josent
      .get('https://api.github.com/users/defunkt')
      .then(function(json){
        console.log('json: ',json);
      });
```

### post:

```
josent
      .post(YOUR_URL)
      .then(function(json){
        console.log('json: ',json);
      });
```

### delete:

```
josent
      .delete(YOUR_URL)
      .then(function(json){
        console.log('json: ',json);
      });
```

### put:

```
josent
      .put(YOUR_URL)
      .then(function(json){
        console.log('json: ',json);
      });
```
