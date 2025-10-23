import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // folder where your HTML, CSS, JS are

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "YOUR_EMAIL@gmail.com",      // replace with your Gmail
        pass: "YOUR_APP_PASSWORD",         // use Google App Password (not your normal password)
      },
    });

    await transporter.sendMail({
      from: email,
      to: "YOUR_EMAIL@gmail.com",
      subject: `New message from ${name}`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));