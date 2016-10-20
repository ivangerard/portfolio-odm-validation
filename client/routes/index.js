//create new express router
var express = require('express')
var router = express.Router()

//export router

router.get('/', function(req, res, next) {
    res.render('pages/index')
})

router.get('/blogs', function(req, res, next) {
    res.render('pages/blogs')
})

router.get('/login', function(req, res, next) {
    res.render('pages/login')
})


router.get('/signup', function(req, res, next) {
    res.render('pages/signup')
})

router.get('/questions', function(req, res, next) {
    res.render('pages/question')
})



router.get('/questions/:id', function(req, res, next) {
    res.render('pages/question-single')
})

router.get('/addquestions/', function(req, res, next) {
    res.render('pages/addquestion')
})




module.exports = router
