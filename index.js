const express = require ('express');
const app = express();
const port= 3000;
const sendEmail = require ('./utils/sendEmail');

app.post('/api/test-email', async(req, res)=>{
    try {
        await sendEmail({
            //the client email 
            to: 'evansansongg+test@gmail.com',
            //sendGrid sender id 
            from: 'evansansongg@gmail.com',
            subject: 'Does this work?',
            text: 'Glad you are here .. yes you!',
            html:'<strong>It is working!!</strong>'
        });
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});


app.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
});
