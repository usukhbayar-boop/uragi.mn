const accountSid = 'AC7305a7c0d124a637b50ba930e730cb99'; 
const authToken = '259e7a73156fb45294beb5178013b731'; 
const client = require('twilio')(accountSid, authToken); 

export default function handler(req, res) {
    const query = req.query;
    const { phoneNumber } = query;
    const client = require('twilio')(accountSid, authToken); 

    const finalNumber = '+976'+phoneNumber;

    const code = Math.floor(Math.random()*9999)+1000;
    
    let smsStatus = "";
    client.messages 
      .create({ 
         body: `Таны баталгаажуулах код: ${code}, Uragi.mn`,  
         messagingServiceSid: 'MG44e5f17d19793b2eba29049349c68616',      
         to: finalNumber
       }) 
      .then(message => {
        smsStatus = message.status;
        console.log(smsStatus);
      });
    res.status(200).json({ status: smsStatus, smsCode: code })
    
}