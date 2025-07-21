# Venom N8N WhatsApp Bot 🤖

<p align="center">
  <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  <img src="https://img.shields.io/badge/n8n-1A1A2D?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n.io">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License: MIT">
</p>

> **Don't have n8n yet? Get started with the powerful, low-code automation platform that powers this bot.**
>
> **[➡️ Click here to sign up and get the workflow on n8n via my affiliate link!](https://n8n.partnerlinks.io/et001atzcei7 )**

A powerful, reliable, and easy-to-deploy WhatsApp bot that acts as a bridge between your WhatsApp account and the limitless automation capabilities of **n8n.io**.

This template allows you to build sophisticated AI assistants, customer support bots, notification systems, and more, directly on any personal or business WhatsApp number **without needing to use the official Facebook Graph API**. This means no complex business verification, no per-message costs, and no feature limitations.

---

## ✨ Key Features

-   **🚀 No Official API Needed:** Connects using the same method as WhatsApp Web, allowing you to automate any WhatsApp account.
-   **🔗 N8N-Native:** Designed specifically to forward messages to an n8n webhook, turning your WhatsApp into a trigger for any workflow.
-   **💨 Simple & Lightweight:** Minimal code, easy to understand, and runs efficiently on any VPS or even locally.
-   **🔒 Secure:** Ready-to-use `.gitignore` to protect your session files and secrets.
-   **🏭 Production Ready:** Includes instructions for running continuously with PM2, a professional process manager.
-   **🧠 Scalable Logic:** Your bot's "brain" lives in n8n, so you can build simple or incredibly complex logic without ever touching the bot's code.

---

## 🚀 Use Cases & Ideas

Because this bot connects directly to n8n, the possibilities are endless. Here are a few ideas to get you started:

#### 1. AI-Powered Customer Support Agent
-   **Trigger:** A customer sends a message to your support number.
-   **N8N Workflow:**
    1.  The bot forwards the message to n8n.
    2.  n8n sends the query to an **AI model** (like OpenAI's GPT-4o or Google's Gemini).
    3.  The AI can be given context from a **Vector Database** (like Supabase or Pinecone) to answer questions based on your company's documents.
    4.  The final response is sent back to the bot, which replies to the customer.

#### 2. Real-Time Order Notifications
-   **Trigger:** A new order is placed on your Shopify, WooCommerce, or custom e-commerce store.
-   **N8N Workflow:**
    1.  The e-commerce platform triggers an n8n webhook.
    2.  n8n formats a beautiful message: "Hi [Customer Name], your order #[Order Number] has been confirmed! We'll let you know when it ships."
    3.  n8n uses the bot's API (or another method) to send this message to the customer's WhatsApp number.

#### 3. Personal Information Hub
-   **Trigger:** You send a message like "What's on my calendar today?"
-   **N8N Workflow:**
    1.  The bot forwards your message to n8n.
    2.  n8n connects to your **Google Calendar** API.
    3.  It fetches today's events, formats them into a clean list, and sends the summary back to you on WhatsApp.

#### 4. Lead Capture & CRM Integration
-   **Trigger:** A potential client messages you with an inquiry.
-   **N8N Workflow:**
    1.  The bot forwards the message to n8n.
    2.  n8n creates a new contact in your **CRM** (like HubSpot, Salesforce, or Airtable).
    3.  It sends an automated, personalized reply: "Thanks for reaching out! Someone from our team will be with you shortly."

---

## 🛠️ Setup and Installation

Follow these steps to get your own bot running in minutes.

### Prerequisites

-   **Node.js** (v16 or higher)
-   A server or computer to run the bot 24/7 (A cheap VPS from DigitalOcean, Vultr, or Hostinger is perfect)
-   A dedicated WhatsApp account for the bot.

### Step 1: Clone the Repository

First, get the code onto your machine or server.
```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
