const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const recipientEmail = "ayetolusamuel@gmail.com"


const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "codingwithset@gmail.com",
    pass: "Setonji04$",
  },
});

// Sends an email confirmation when a user create account on the app.
exports.sendEmailConfirmation = functions.database.ref('/users/').onWrite(async (change) => {

    const snapshot = change.after;
    const val = snapshot.val();
    console.log("Name::::: "+val.name)
    console.log("Email::: "+val.email)
    console.log("Message:: "+val.message)
   
   const mailOptions = {
     from: '"Portfolio" <ayetolusamuel@gmail.com>',
     to: recipientEmail,
   };

    // Building Email message.
   mailOptions.subject =   "Portfolio Notification";
   mailOptions.html =  `
   <img src="https://bit.ly/2UAujkP" alt="Girl in a jacket" style="width:300px;height:300px;">
   <h1><br>Thanks for reaching out to us.  </h1>
   
   <b><br><i>Name: ${val.name} </b></i>
   <b><br><i>Email: ${val.email} </b></i>
   <b><br><i>Message: ${val.message} </b></i>
   <p>our goal is to serve you better.</p> `;

   try {
     await mailTransport.sendMail(mailOptions);
     console.log(`New ${recipientEmail} confirmation email sent to:`, recipientEmail);
   } catch(error) {
     console.error('There was an error while sending the email:', error);
   }
   return null;
 });
