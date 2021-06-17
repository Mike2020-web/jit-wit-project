/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    create: async function (req, res) {

        if (!req.body)
            return res.badRequest("Form-data not received.");

        await Customer.create(req.body);

        var name = req.body.name;
        var email = req.body.email;
        var phone = req.body.phone;
        var message = req.body.message;

        // send email
        sails.hooks['email-without-ejs'].send({
            to: "Samuel.po@ji-wit.com, daniel.lau@ji-wit.com",
            subject: "New Customer",
            html: name +"<br>"+
                email+"<br>"+
                phone+"<br>"+
                message+"<br>",
        }, function (err) { console.log(err || "It worked!") })



        // var mailOptions = {
        //     from: 'mikemikeko2017@gmail.com',
        //     to: 'mike.ko@ji-wit.com',
        //     subject: 'new customer',
        //     text: name +"\n"+
        //     email+"\n"+
        //     phone+"\n"+
        //     message+"\n"
        //     ,
        // };

        // transporter.sendMail(mailOptions, function (error, info) {
        //     if (error) {
        //         console.log(error);
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //     }
        // });

        return res.redirect("/");
    },


    list: async function (req, res) {
        var customer = await Customer.find();

        return res.view('Customer/list', { customers: customer });
    },

    delete: async function (req, res) {

        var deletedCustomer = await Customer.destroyOne(req.params.id);

        if (!deletedCustomer) return res.notFound();

        return res.redirect("/customer/list");
    },


};

