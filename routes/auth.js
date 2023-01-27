import express from 'express';
import CharacterInfo from '../models/character.model.js';
import User from "../models/user.model.js";
// import cloudinary from '../cloud/cloudinary.js';

const router = express.Router();

// show character info
router.get('/index', (req, res) => {
    CharacterInfo.findAll().then((characters) => {
        console.log(characters);
        res.render('pages/index', {characters: characters, message: req.query.message, title: "Characters Infomation"});
    }).catch((err) => {
        console.log(err);
    })
});

// show adding screen
router.get('/new', (req, res) => {
    res.render('pages/new', {title: "Add Information"});
});

// add character info
router.post('/new', (req, res) => {

    CharacterInfo.findOne({
        where: {
            characterName: req.body.characterName,
        }
    }).then((character) => {
        if(character) res.redirect("/index?message=The character has been registered")
        // res.render('pages/index', {characters: Array.from(character), message: 'The character has been registered', title: "Characters Infomation"});
        else{
            CharacterInfo.create({
                characterName: req.body.characterName,
                characterImage: req.body.characterImage
            }).then((character) => {
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