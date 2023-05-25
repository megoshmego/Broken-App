### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

callbacks, promises, async and await  

- What is a Promise?

representational object of eventual async operation and resulting value. a promise implies the request will be made but it does NOT imply that the request will work. 

- What are the differences between an async function and a regular function?


the await keyword in an async function pauses the execution until the promise is resolved   


- What is the difference between Node.js and Express.js?


node is a javascript runtime environment that allows you to run javascript on the server side. has NPM and APIs for building server side apps

express is a web framework for node that helps w middleware, routing HTTP requests and responses. so kind of like flask.  

- What is the error-first callback pattern?

convention where callbacks take an error object as first argument so dev can handle async errors 


- What is middleware?

in express, functions that have access to the request and responses objects in the response - request cycle. the functions can perform various tasks such as modifying the request or response, invoking the next middleware function in the chain, or terminating the cycle. 



- What does the `next` function do?


callback function that passes control to the next middleware function to indicate that is has completed its processing and the next middleware should be invoked. 


- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```


should use axios or http module bc its a node.js envionment. $.getJSON is a jquery thing ~ makes API reqs using await one after another which can make it slow. should use Promise.all ~ hardcoding getUsers flexibility, should pass an array of usernames and dynamically construct the API URLs based on usernames ~ getUsers is a bad name bc it gets data ~ doesnt handle errors 



REFACTOR 

const axios = require('axios');

async function getUsers(usernames) {
  try {
    const requests = usernames.map(username =>
      axios.get(`https://api.github.com/users/${username}`)
    );
    const responses = await Promise.all(requests);
    const users = responses.map(response => response.data);

    return users;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
}
