import express from 'express';
import CharacterInfo from '../models/character.model.js';
import User from "../models/user.model.js";
// import cloudinary from '../cloud/cloudinary.js';

const router = express.Router();

let userIdSession;
let usernameSession;


// show character info
router.get('/character', (req, res) => {
    // console.log('user.id 10 in auth.js' ,req.params.id);
    userIdSession = req.session.userId;
    usernameSession = req.session.username;
    console.log('username 15 in auth.js' ,req.session.username);
    if(!userIdSession && !usernameSession){
        console.log("Couldn't found userIdSession and usernameSession in character.ejs");
        res.redirect('/login');
    }
    console.log('user.id 16 in auth.js' ,userIdSession);
    CharacterInfo.findAll({
        where: {
            userId: userIdSession
        }
    }).then((characters) => {
        console.log(characters);
        res.render('pages/character', {username: usernameSession, characters: characters, message: req.query.message, title: "Characters Infomation"});
    }).catch((err) => {
        console.log(err);
    })
});

// show adding screen
router.get('/new', (req, res) => {
    userIdSession = req.session.userId;

    if(!userIdSession){
        console.log("Couldn't found userIdSession in new.ejs");
        res.redirect('/login');
    }
    // if(!usernameSession){
    //     console.log("Couldn't found usernameSession in new.ejs");
    //     res.redirect('/login');
    // }
    res.render('pages/new', {userId: req.session.userId, title: "Add Information"});
});

// add character info
router.post('/new', (req, res) => {
    userIdSession = req.session.userId;

    if(!userIdSession){
        console.log("Couldn't found userIdSession in new.ejs");
        res.redirect('/login');
    }

    CharacterInfo.findOne({
        where: {
            characterName: req.body.characterName,
        }
    }).then((character) => {
        if(character) res.redirect("/character?message=The character has been registered")
        // res.render('pages/index', {characters: Array.from(character), message: 'The character has been registered', title: "Characters Infomation"});
        else{
            CharacterInfo.create({
                characterName: req.body.characterName,
                characterImage: req.body.characterImage,
                userId: userIdSession
            }).then((character) => {
                console.log('username 72 in auth.js' ,character);
                if(character) res.render('pages/new', {message: 'Add character successfull', title: 'Add Information'});
            }).catch((err) => {
                console.log(err);
            })
        }
    }).catch((err) => {
        console.log(err);
    })
});

// delete character info
router.post('/index/:id', (req, res) => {

});

// modify character info
router.post('/edit/:id', (req, res) => {

});

export default router;