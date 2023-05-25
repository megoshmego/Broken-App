directions: 

Yay! You got a job as an Express developer!

Boo! The last developer left in a hurry, and left a mess.

You’ve been given a non-working small app, broken-app. It should have one route:

POST /
Given a list of GitHub users names, this should return information about those developers.

Should get JSON body like {developers: [username, ...]}

Should return [ {name, bio}, ... ]

For example, if we POST:

{ "developers": ["joelburton", "elie"] }
to /, it should return:

[
  {
    "bio": "Open source developer. Former dev at Apple...",
    "name": "Joel Burton"
  },
  {
    "bio": "Co-founder + Lead Instructor @rithmschool ",
    "name": "Elie Schoppik"
  }
]
The order of the output array does not matter.

Fix It!
Most of the script is written and working. There’s a least one bug in it, though, so it doesn’t work now.

Find and fix any bugs!

GitHub Rate Limit

GitHub has some pretty strict rate limit rules:

“For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address and not the user making requests.”

If you exceed 60 requests per hour, your code may appear like it has a bug, but it could just be the case that you have to wait a bit before proceeding.

Refactor It!
In addition, the code is terrible. Use some of the common best practices you’ve learned for Express apps, and make this better. Feel free to change variable names, add comments, write helper functions/middleware, etc.

Document Issues!
Lastly, you want to get credit with your boss for all the hard work you put in fixing this code.

In the starter code, document bad things into the issues.md file.




APP.JS  : 

const express = require('express');
let axios = require('axios');
var app = express();

app.post('/', function(req, res, next) {
  try {
    let results = req.body.developers.map(async d => {
      return await axios.get(`https://api.github.com/users/${d}`);
    });
    let out = results.map(r => ({ name: r.data.name, bio: r.data.bio }));

    return res.send(JSON.stringify(out));
  } catch {
    next(err);
  }
});

app.listen(3000);


ISSUES.MD: 

(BLANK SO FAR)

