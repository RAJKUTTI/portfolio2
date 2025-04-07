import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail', // Replace with your email service
      auth: {user: 'rajkutti2003@gmail.com', 
         pass: 'oqliyymysyaqrwqp'
      },
    });

    const mailOptions = {
      from: email, // Sender's email
      to: 'rajkutti2003@gmail.com', // Recipient's email
      subject: `Message from porfolio website`,
      text: `Name:\n ${name}\n\n ${message}\n\n Sent from: \n${email}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
