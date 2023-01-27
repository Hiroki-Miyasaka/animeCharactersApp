import express from 'express';
// import User from '../models/user.model';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('pages/login', {title: 'Home Page', message: ''});
})

