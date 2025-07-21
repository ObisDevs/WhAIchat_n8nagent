// Import necessary libraries
const venom = require('venom-bot' );
const axios = require('axios');
require('dotenv').config(); // This line loads the .env file

// --- Configuration ---
const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;
const BOT_SESSION_NAME = process.env.BOT_SESSION_NAME;

// --- Main Function ---
async function startBot() {
  // Check if the webhook URL is configured
  if (!N8N_WEBHOOK_URL) {
    console.error('ERROR: N8N_WEBHOOK_URL is not defined in the .env file.');
    console.error('Please set up your .env file before running the bot.');
    return;
  }

  console.log('Starting the bot...');

  try {
    const client = await venom.create({
      session: BOT_SESSION_NAME,
      catchQR: (base64Qr, asciiQR) => {
        console.log('QR Code received, please scan:');
        console.log(asciiQR); // Display QR code in the terminal
      },
      logQR: false, // We are handling the QR code in catchQR
      statusFind: (statusSession, session) => {
        console.log('Status Session:', statusSession);
        console.log('Session name:', session);
      },
    });

    start(client);
  } catch (error) {
    console.error('Error creating Venom client:', error);
  }
}

// --- Message Handler ---
function start(client) {
  console.log('WhatsApp client is ready!');

  client.onMessage(async (message) => {
    // Ignore messages from groups and status updates to prevent spam
    if (message.isGroupMsg || message.isStatus) {
      return;
    }

    console.log(`Received message from: ${message.from}`);

    // Prepare data to send to n8n
    const messageData = {
      from: message.from,
      senderName: message.sender.pushname || message.sender.formattedName,
      body: message.body,
      timestamp: message.timestamp,
    };

    try {
      // Send the message data to the n8n webhook
      await axios.post(N8N_WEBHOOK_URL, messageData, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(`Successfully forwarded message to n8n.`);
    } catch (error) {
      console.error('Error forwarding message to n8n:', error.message);
      // Optionally, send an error message back to the user
      await client.sendText(message.from, 'Sorry, I am having trouble connecting to my brain. Please try again later.');
    }
  });
}

// --- Start the Application ---
startBot();
