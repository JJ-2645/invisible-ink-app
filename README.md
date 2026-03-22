# 👁️ Invisible Ink | Advanced Steganography Protocol

Invisible Ink is a robust, full-stack web application designed for secure, multi-modal data concealment. It utilizes Least Significant Bit (LSB) steganography combined with military-grade cryptography to hide highly classified payloads within standard digital media assets.

Unlike traditional steganography scripts, this application features a **Zero-Knowledge Architecture**—all encryption, decryption, and media manipulation occurs strictly client-side via the browser. The backend server acts exclusively as an enterprise audit logger, ensuring absolute data privacy.

## ✨ Key Features

* **Multi-Modal Concealment:** Supports hiding data in both image matrices (PNG, JPG) and high-fidelity acoustic assets (WAV). 
* **Military-Grade Encryption:** Payloads are secured using AES-256 cryptography with dynamically generated 16-character session keys before being embedded into the media.
* **Cryptographic Tamper Seals:** Implements SHA-256 hashing to generate a digital fingerprint of the payload. The extraction engine verifies data integrity and triggers a system lockdown if the asset has been intercepted, altered, or subjected to lossy compression.
* **Zero-Knowledge Architecture:** Payload data and encryption keys never leave the user's device. 
* **Enterprise Audit Logging:** A Node.js backend silently tracks and logs system usage (Action, IP Address, Timestamp, Asset Name) without compromising the encrypted payload.

## 🛠️ Technology Stack

* **Frontend:** HTML5 Canvas API (Image LSB), Web Audio API / ArrayBuffer (Acoustic LSB), Vanilla JavaScript, CSS3 (Glassmorphism UI).
* **Security:** CryptoJS (AES-256 & SHA-256).
* **Backend:** Node.js, Express.js.
* **Deployment:** Fully compatible with cloud hosting platforms (e.g., Render, Vercel) and temporary tunnel networks (Ngrok).

## 🚀 Local Installation & Setup

To run this application on your local machine:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USERNAME/invisible-ink-app.git](https://github.com/YOUR_USERNAME/invisible-ink-app.git)
   cd invisible-ink-app
   
2. **Install backend dependencies:**
npm install

3. **Initialize the Node.js server:**
node server.js

4. **Access the Application:**
Open your web browser and navigate to http://localhost:3000.

⚠️ Security Protocols & Usage Notes
Lossless Formats Required: Due to the nature of LSB steganography, the final secured asset must be saved and transmitted in a lossless format (PNG for images, WAV for audio).

The Compression Vulnerability: Sending secured assets through social media platforms (WhatsApp, Discord, Instagram) will automatically apply lossy JPEG/audio compression. This alters the pixel/bit data, triggering the SHA-256 Tamper Seal and destroying the payload. Assets must be transmitted as raw file attachments or via secure cloud storage.

Session Reset: For maximum security, the UI state and memory buffers automatically wipe upon asset download.

📜 Audit Log Access
When running the application, administrators can monitor system compliance and usage events by navigating to the backend API endpoint: http://localhost:3000/api/audit/logs.