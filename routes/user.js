import express from 'express';
import User from '../models/user.model.js';
import CharacterInfo from '../models/character.model.js';


const router = express.Router();


router.get('/home', (req, res) => {
    if(req.session) {
        res.redirect('/character');
    }
    res.render('pages/login', {title: 'Home Page', message: ''});
})

router.get("/login", (req, res) => {
    res.render("pages/login", { title: "Login", message: ""})
})

router.get("/register", (req, res) => {
    res.render("pages/register", { title: "Register"})
})

// router.get("/character", (req, res) => {
//     // console.log('user.id 24 in auth.js' ,req.params.id);
//     res.render("pages/character", { title: "character"})
// })


router.post('/login', (req, res) => {
    // SELECT * from users WHERE email = req.body.email AND password = req.body.password
    User.findOne({
        where:{
            email: req.body.email,
            password: req.body.password
        }
    }).then((user) => {
        // user is data from mysql database
        // when user is not found
        if(!user) res.render("pages/login", { message: "Invalid email or password", title: "Login" });
        //found user id in character database
        console.log('user.id 39 in user.js' ,user.id);
       let userId = user.id;
       req.session.userId = userId;
       console.log('user.id 42 in user.js' ,req.session.userId);
       console.log('user.id 43 in user.js' ,user.username);
       let username = user.username;
       req.session.username = username;
       console.log('user.id 45 in user.js' ,req.session.username);
       res.redirect("/character");
    }).catch((err) => {
        console.log(err);
    })
});




router.post('/register', (req, res) =>  {
    // SELECT * from users WHERE email = req.body.email
    User.findOne({
        where: {
            email: req.body.email,
        }
    }).then((user) => {
        // if user already exists in db, then we will render login page with error message
        if(user) res.render("pages/login", { message: "email address already taken!", title: "Login" });
        else{
            // if user does not exists in db, then we will create new user
            User.create({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }).then((user) => {
                if(user) res.render("pages/login", { message: "Registration Successfull", title: "Login" });
            }).catch((err) => {
                console.log(err);
            })
        }
    }).catch((err) => {
        console.log(err);
    }) 
});

export default router;