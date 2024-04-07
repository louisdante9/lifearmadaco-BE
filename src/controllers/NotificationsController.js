import nodemailer from 'nodemailer';
import admin from 'firebase-admin';
import NotificationSettings from '../models/NotificationSettings.js';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your_email@gmail.com',
    pass: 'your_password'
  }
});

// Function to send email notification
export const sendEmailNotification = async (req, res) => {
  const { clientId, message } = req.body;
  try {
    const settings = await NotificationSettings.findOne({ clientId });
    if (!settings || !settings.email) {
      return res.status(404).json({ message: 'Email notification settings not found or disabled' });
    }
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: 'recipient@example.com',
      subject: 'Notification Subject',
      text: message
    };
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email notification sent successfully' });
  } catch (error) {
    console.error('Error sending email notification:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


// Function to send push notification
export const sendPushNotification = async (req, res) => {
  const { clientId, message } = req.body;
  try {
    const settings = await NotificationSettings.findOne({ clientId });
    if (!settings || !settings.push) {
      return res.status(404).json({ message: 'Push notification settings not found or disabled' });
    }
    // Send push notification using FCM
    const registrationToken = 'YOUR_DEVICE_TOKEN';
    const payload = {
      notification: {
        title: 'Notification Title',
        body: message
      }
    };
    await admin.messaging().sendToDevice(registrationToken, payload);
    res.status(200).json({ message: 'Push notification sent successfully' });
  } catch (error) {
    console.error('Error sending push notification:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
