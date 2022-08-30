const router = require("express").Router();
const passport = require('passport');

const authController = require('../controllers/auth.controller')
const miscController = require('../controllers/misc.controller')
const usersController = require("../controllers/user.controller")
const festController = require("../controllers/fest.controller")

const fileUploader = require('./cloudinary.config')
const authMiddlewares = require("../middlewares/authMiddleware");


const SCOPES = [
    "profile",
    "email"
  ]

//MISC
router.get("/", miscController.home);

// AUTH
router.get("/register", authController.register);
router.post("/register",fileUploader.single('image'), authController.doRegister);

router.get("/login", authMiddlewares.isNotAuthenticated, authController.login);
router.post("/login", authController.doLogin);

router.get('/login/google', authMiddlewares.isNotAuthenticated, passport.authenticate('google-auth', { scope: SCOPES  }))
router.get('/auth/google/callback', authMiddlewares.isNotAuthenticated, authController.doLoginGoogle)

router.get("/logout",authMiddlewares.isAuthenticated, authController.logout);
 
router.get('/activate/:token', authController.activateAccount)

// USERS
router.get("/profile", usersController.profile);

// FESTIVALS

router.get("/festivals", festController.list)
router.get("/festivals/:id", festController.detail)

/*router.get("/festivals/create", festController.createFestival);
router.post("/festivals/create", festController.doCreate);

router.get("/festivals/:id/edit", festController.editFestival);
router.post("/festivals/:id/edit", festController.doEdit);
*/


module.exports = router;