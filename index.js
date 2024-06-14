const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    console.log('home api hit by user');
    res.send('home api hit successfully');

    const auth = nodemailer.createTransport({
        service: "gmail",
        secure: true,
        port: 465,
        auth: {
            user: "sulochnajat321@gmail.com",
            pass: "rnhlinkfklosxvex"
        }
    });

    const receiver = {
        from: "sulochnajat321@gmail.com",
        to: "silujat40@gmail.com",
        subject: "Node Js Mail Testing!",
        text: "Hello this is a text mail!"
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if (error) {
            console.error("Error sending email:", error);
            res.status(500).send("Error sending email");
        } else {
            console.log("Email sent successfully!");
            res.send("Email sent successfully!");
        }
    });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
