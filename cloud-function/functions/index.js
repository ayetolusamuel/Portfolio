const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const recipientEmail = "ayetolusamuel@gmail.com"

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "",
        pass: "",
    },
});

exports.sendMultipleEmail = functions.database.ref('/users/').onWrite(async(change) => {

    const snapshot = change.after;
        const result = snapshot.val();
        console.log("Result "+result);
    
        const mailOptions = {
            from: '"Portfolio" <ayetolusamuel@gmail.com>',
            to: recipientEmail,
            subject: "Portfolio Notification",
            html: `<img src="https://bit.ly/2UAujkP" alt="Girl in a jacket" style="width:300px;height:300px;">
                <h1><br>Thanks for reaching out to us.  </h1>
            
               <b><br><i>Name: ${result.name} </b></i>
               <b><br><i>Email: ${result.email} </b></i>
               <b><br><i>Message: ${result.message} </b></i>
               <p>Our goal is to serve you better.</p> `,
          };
          
          const mailOptions2 = {
            from: '"Portfolio" <ayetolusamuel@gmail.com>',
            to: result.email,
            subject: "Portfolio Notification",
            html: `
  
               <h1><br>Thanks for reaching out to us.  </h1>
               
               <b><br>Your mail is received, and acknowledged.</b></i>
              
               <p>Our goal is to serve you better.</p> `,
          };
          
          Promise.all([
            transporter.sendMail(mailOptions),
            transporter.sendMail(mailOptions2),
          ])
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        
try {
        const mails = await findAll();
        const mailerPromises = mails.map((mail) => transporter.sendMail(mail.dataValues));
        const responses = await Promise.all(mailerPromises);
        console.log(responses, "All Mails Have Been Sent Successfully");
      } catch (e) {
        console.log(e);
      }
});
