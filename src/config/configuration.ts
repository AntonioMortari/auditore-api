import { config } from 'dotenv';

config();

const configuration = {
  email: {
    sendgrid: {
      smtp: process.env.SENDGRID_SMTP,
      apiKey: process.env.SENDGRID_API_KEY,
      port: process.env.SENDGRID_PORT || '587',
    },
    recipient: process.env.RECIPIENT_EMAIL,
  },
  port: process.env.PORT,
};

export { configuration };
