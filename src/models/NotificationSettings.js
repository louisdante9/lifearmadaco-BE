// models/NotificationSettings.js

import mongoose from 'mongoose';

const { Schema } = mongoose;

const notificationSettingsSchema = new Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
    unique: true
  },
  email: {
    type: Boolean,
    default: true
  },
  push: {
    type: Boolean,
    default: true
  }
});

const NotificationSettings = mongoose.model('NotificationSettings', notificationSettingsSchema);

export default NotificationSettings;
