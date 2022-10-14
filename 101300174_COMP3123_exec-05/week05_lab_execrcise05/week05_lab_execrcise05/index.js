const express = require('express');
const app = express();
const router = express.Router();
const fs = require("fs");
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.send('This is home router');
});

/*
- Return all details from user.json file to client as JSON format
*/

router.get('/profile', (req,res) => {
  const data = fs.readFileSync("user.json");
  const user = JSON.parse(data);
  res.send(user);
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get("/login", (req, res) => {
  const qusername = req.query.username;
  const qpassword = req.query.password;

  const data = fs.readFileSync("user.json");
  const parsedData = JSON.parse(data);

  const usernameFromJson = parsedData.username;
  const passwordFromJson = parsedData.password;

  let response;

  if (usernameFromJson == qusername && passwordFromJson == qpassword){
    response = {
      status: true,
      message: "User is valid",
    };
  } else if (usernameFromJson !== qusername) {
    response = {
      status: false,
      message: "User Name is invalid",
    };
  } else {
    response = {
      status: false,
      message: "Password is invalid",
    };
  }
  res.send(response);
});


/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get("/logout/:username", (req, res) => {
  const username = req.params.username;
  res.send(`<b>${username} successfully logout.</b>`);
});

app.use('/', router);

app.listen(process.env.port || 8082);

console.log('Web Server is listening at port '+ (process.env.port || 8082));