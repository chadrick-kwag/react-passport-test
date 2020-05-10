const express = require('express')
const app = express()
const session = require('express-session')
const path = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy





const users = [{
    username: 'a',
    password: 'b',
    id: 0
}]

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: "password"
},
    function (username, password, done) {
        let index = null

        for (let i = 0; i < users.length; i++) {
            if (users[i].username == username) {
                index = i
                break
            }
        }

        if (index == null) {
            return done(null, false)
        }

        let userobj = users[index]

        if (password != userobj.password) {
            return done(null, false)
        }

        return done(null, userobj)


    }
))


passport.serializeUser(function (user, done) {
    done(null, user.id)
})

passport.deserializeUser(function (id, done) {

    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            done(null, users[i])
        }
    }

    done(null, false)
})

const port = 3000


app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve("dist")))
app.use(session({ secret: 'testing', resave: false, saveUninitialized: false }))

app.use(passport.initialize())
app.use(passport.session())

app.get('/', (req, res) => {
    res.sendFile(path.resolve("dist/index.html"))
})


app.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err)
        }

        if (!user) {
            return res.json({
                msg: "invalid access"
            })
        }

        req.logIn(user, function(err){
            if(err){
                return next(err)
            }

            return res.json({
                msg: "success"
            })
        })


    })(req,res,next)
}

)

app.listen(port)

