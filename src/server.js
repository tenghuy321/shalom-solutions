// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.post("/send-email", async (req, res) => {
//   const { name, sex, company, phone, address } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "tenghuyly2330@gmail.com",  
//       pass: "hwknkjdtnlqjctix"       
//     }
//   });

//   const mailOptions = {
//     from: "tenghuyly2330@gmail.com",
//     to: "tenghuyly2330@gmail.com",
//     subject: "New Form Submission",
//     html: `
//       <h3>New Submission</h3>
//       <p><strong>Name:</strong> ${name}</p>
//       <p><strong>Sex:</strong> ${sex}</p>
//       <p><strong>Company:</strong> ${company}</p>
//       <p><strong>Phone:</strong> ${phone}</p>
//       <p><strong>Address:</strong> ${address}</p>
//     `
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to send email" });
//   }
// });

// const PORT = 5000; // change port to avoid conflict with React dev server
// app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
