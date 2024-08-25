import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors';
const server = express();
const port = 3000;
server.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'opgsolnishko@gmail.com',
        pass: 'nwhu widx pzzf jzdv'
    }
});
server.post('/send-email', async (req, res) => {
    console.log('Request body:', req.body);
    const { email, name, tel, textToUs } = req.body;
    const mailOptions = {
        from: 'opgsolnishko@gmail.com',
        to: 'uladsopat@gmail.com',
        subject: 'Новое сообщение от клиента',
        text: `Сообщение от ${name} (${email}, ${tel}):\n\n${textToUs}`
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.status(200).send('Email sent successfully');
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
});
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map