/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

    

    home: async function (req, res) {
        
        return res.view('user/home');
    },

    p1: async function (req, res) {
        
        return res.view('user/p1');
    },
    p2: async function (req, res) {
        
        return res.view('user/p2');
    },
    p3: async function (req, res) {
        
        return res.view('user/p3');
    },
    p4: async function (req, res) {
        
        return res.view('user/p4');
    },
    p5: async function (req, res) {
        
        return res.view('user/p5');
    },
    p6: async function (req, res) {
        
        return res.view('user/p6');
    },
    p7: async function (req, res) {
        
        return res.view('user/p7');
    },

    p8: async function (req, res) {
        
        return res.view('user/p8');
    },

    p9: async function (req, res) {
        
        return res.view('user/p9');
    },

    p10: async function (req, res) {
        
        return res.view('user/p10');
    },

    p11: async function (req, res) {
        
        return res.view('user/p11');
    },

    dev: async function (req, res) {
        
        return res.view('user/dev');
    },
    pt1: async function (req, res) {
        
        return res.view('user/pt1');
    },
    pt11: async function (req, res) {
        
        return res.view('user/pt11');
    },
    pt12: async function (req, res) {
        
        return res.view('user/pt12');
    },
    pt13: async function (req, res) {
        
        return res.view('user/pt13');
    },
    pt14: async function (req, res) {
        
        return res.view('user/pt14');
    },
    pt15: async function (req, res) {
        
        return res.view('user/pt15');
    },
    pt16: async function (req, res) {
        
        return res.view('user/pt16');
    },
    pt17: async function (req, res) {
        
        return res.view('user/pt17');
    },
    pt18: async function (req, res) {
        
        return res.view('user/pt18');
    },
    pt19: async function (req, res) {
        
        return res.view('user/pt19');
    },
    pt110: async function (req, res) {
        
        return res.view('user/pt110');
    },
    
    pt2: async function (req, res) {
        
        return res.view('user/pt2');
    },
    pt21: async function (req, res) {
        
        return res.view('user/pt21');
    },
    pt22: async function (req, res) {
        
        return res.view('user/pt22');
    },
    pt23: async function (req, res) {
        
        return res.view('user/pt23');
    },
    pt24: async function (req, res) {
        
        return res.view('user/pt24');
    },
    pt25: async function (req, res) {
        
        return res.view('user/pt25');
    },
    pt26: async function (req, res) {
        
        return res.view('user/pt26');
    },
    pt27: async function (req, res) {
        
        return res.view('user/pt27');
    },
    old: async function (req, res) {
        
        return res.view('user/old');
    },


    login: async function (req, res) {

        if (req.wantsJSON) {
            var thatUser = await User.findOne({
                username: req.query.findUser
            });


            return res.json({ notExist: !thatUser, user: thatUser });

        } else {

            if (req.method == "GET") return res.view('user/login');
            if (!req.body.username || !req.body.password) return res.badRequest();

            var user = await User.findOne({ username: req.body.username });

            if (!user) return res.status(401).json("User not found");

            if (user.password != req.body.password)
                return res.status(401).json("Wrong Password");
                // return res.redirect("/user/login");
            // Reuse existing session 
            if (!req.session.user) {
                req.session.user = user;
                req.session.username=user.username;
                // res.locals.user = req.session.user;
                return res.redirect("/");
            }

            // Start a new session for the new login user
            req.session.regenerate(function (err) {

                if (err) return res.serverError(err);

                req.session.user = user;
                req.session.username=user.username;
                return res.redirect("/")

            });
        }
    },

    logout: async function (req, res) {

        req.session.destroy(function (err) {
            if (err) return res.serverError(err);

            return res.redirect("/");
        });
    },

  

};

