const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(session({
    secret: "secret",
    resvae: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60 * 1000,
        secure: false,
        httpOnly: true,
        sameSite: true,
    }
}));

//  📌 API 1 : SET session + SET cookie token

app.get('/set',(req,res) => {
    req.session.user = {
        id: "123",
        name: "midhun",
    }

    const token = "ABCD";

    res.cookie("token", token, {
        maxAge: 60 * 1000,
        secure: false,
        sameSiite: true,
        httpOnly: true,
    });

    res.send({
        message: "Session and Cookie set"
    })
})

app.get('/get',(req,res) => {
    const user = req.session.user;
    const token = req.cookies.token;
    
    res.send({
        message: "Read session and cookie",
        sessionUser: user,
        token
    })
})


app.listen(3000,() => {
    console.log(`http://localhost:3000`);
})