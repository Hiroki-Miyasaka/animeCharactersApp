// import express from 'express';
// import CharacterInfo from '../models/character.model.js';
// import cloudinary from '../cloud/cloudinary.js';

// const router = express.Router();

// // show character info
// router.get('/index', (req, res) => {
//     CharacterInfo.findAll().then((characters) => {
//         res.render('pages/index', {characters: characters, title: "Characters Infomation"});
//     }).catch((err) => {
//         console.log(err);
//     })
// });

// // show adding screen
// router.get('/new', (req, res) => {
//     res.render('pages/new', {title: "Add Information"});
// });

// // add character info
// router.post('/new', (req, res) => {

//     const {characterName, characterImage} = req.body;

//     // try{
//     //     const result = await cloudinary.uploader.upload(characterImage, {
//     //         folder: products
//     //     })
//     // }


//     CharacterInfo.findOne({
//         where: {
//             characterName: characterName,
//         }
//     }).then((character) => {
//         if(character) res.render('../pages/index', {message: 'The character has been registered', title: "Characters Infomation"});
//         else{
//             try{
//                 const result = cloudinary.uploader.upload(characterImage, {
//                     folder: 'products'
//                 }).then()
//                 console.log(result);
//                 CharacterInfo.create({
//                     characterName: characterName,
//                     image: result.secure_url
//                     // image: {
//                     //     public_id: result.public_id,
//                     //     url: result.secure_url
//                     // }
                    
//                 }).then((character) => {
//                     if(character) res.render('../pages/new', {message: 'Add character successfull', title: 'Add Information'});
//                 }).catch((err) => {
//                     console.log(err);
//                 })
//             } catch(err){
//                 console.log(err);
//             }
//         }
//     }).catch((err) => {
//         console.log(err);
//     })
// });

// // delete character info
// router.post('/index/:id', (req, res) => {

// });

// // modify character info
// router.post('/edit/:id', (req, res) => {

// });

// export default router;