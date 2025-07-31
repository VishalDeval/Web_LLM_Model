# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




🧠 Local Web LLM Chatbot
This project is a fully local, privacy-focused chatbot that runs directly in your browser using WebLLM. It uses a quantized language model like LLaMA 3.1 8B and runs entirely on-device via WebGPU — no internet connection or API key required.

🚀 Features
✅ Runs offline after initial model download

🔒 100% private – no data leaves your device

💬 Chat interface with user input and assistant responses

🧠 Powered by LLMs like LLaMA 3.1-8B (q4f32_1 quantized)

⚡ Optimized for modern browsers with WebGPU support

🛠️ Tech Stack
⚛️ React + Vite (or your frontend framework)

🧩 WebLLM (MLC.ai)

🎮 WebGPU for model inference

📦 Models
Supports MLC-compatible models like:

LLaMA 2 / 3

Mistral 7B

Phi-2 / Phi-3

RedPajama, Vicuna, and more

Model files are automatically downloaded and cached on your device during first load.

![alt text](<Screenshot 2025-08-01 000224.png>)
![alt text](<Screenshot 2025-08-01 000114.png>)

🔧 How to Run
bash
Copy
Edit
# Install dependencies
npm install

# Start dev server
npm run dev
Make sure your browser supports WebGPU (Chrome Canary, Edge, or latest stable with flags enabled).

📁 Folder Structure
arduino
Copy
Edit
/public         → static files
/src
  /components   → UI components
  /hooks        → custom React hooks
  App.jsx       → main entry point
  main.jsx      → Vite setup
📜 License
MIT License – free to use, modify, and share.

Let me know if you want it tailored for plain JS, Next.js, or if you're hosting it online!








🧠 Local LLaMA Chatbot in the Browser
This project is a fully local AI chatbot that runs directly in your browser using WebLLM and the LLaMA 3.1 8B Instruct model (quantized). It works offline after the initial model download and ensures 100% user privacy — no API key, no server, no data sharing.

🚀 Features
✅ Local LLaMA 3.1 8B model (quantized q4f32_1)

🔒 Privacy-first: runs entirely in-browser using WebGPU

🌐 Works offline after first model load

💬 Chat interface with user message and model reply

📥 Auto-downloads model weights locally (only once)

🧠 Powered By
LLaMA 3.1-8B Instruct (MLC quantized)

WebLLM

MLC LLM inference engine

WebGPU for local on-device acceleration

🛠 Tech Stack
⚛️ React + Vite (or your stack)

🧠 WebLLM for LLM support

🌐 WebGPU (for browser-based model inference)

📦 Model Info
Model used:

wasm
Copy
Edit
Llama-3.1-8B-Instruct-q4f32_1-MLC
This quantized model is automatically downloaded and cached on your first run.

💻 How to Run Locally
bash
Copy
Edit
# Install dependencies
npm install

# Start the development server
npm run dev
Make sure your browser supports WebGPU

✅ Recommended: Chrome (latest), Edge, or Chrome Canary