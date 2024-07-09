const accountSid = '';
const authToken = '';

const client = require('twilio')(accountSid, authToken);
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3006;
const receiver_phone = 'number here';


// Enable CORS
app.use(cors(), express.json());

app.post('/', (req, res) => {
  let message_body = '';
  const command = req.body;
  const names = command.names;
  const contact = command.contact;
  const category = command.category;
  const description = command.description;
  console.log(command);
  message_body+='New command \n';
  message_body+='names:' + names + '\n';
  message_body+='contact:' + contact + '\n';
  message_body+='category:' + category + '\n';
  message_body+='description:' + description + '\n';

  client.messages
    .create({
        body: message_body,
        from: 'whatsapp:....',
        to: 'whatsapp:' ,
    })
    .then(message => console.log(message.sid)).catch(err => console.log(err));


  // Send a response (optional)
  res.status(200).json({ message: 'bbx_success' });
});





app.post('/confirm_service', (req, res) => {
    let message_body = '';
    const command = req.body;
    const client_phone = command.person;
    const message = command.message;
    console.log(command);
    message_body+='Fabricare \n';
    message_body+= message + '\n';
  
    // client.messages
    const accountSid = 'AC62091aa5b38c03b0b1771aded6615536';
    const authToken = 'a5d238020637dd4371d0012c420c226f';
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
        .create({
            body: message_body,
            // from: '+17206064750',
            from: '',
            // to: client_phone
            to: ''
        })
        .then(message => console.log(message.sid))
  
  
    // Send a response (optional)
    res.status(200).json({ message: 'bbx_success' });
  });

  


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


