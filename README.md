# IntervBit

> An AI‑powered platform for practicing job interviews in real time.

IntervBit  helps you sharpen your interview skills through live, AI‑driven voice interviews and post‑interview feedback. Built with Next.js and powered by Firebase and VAPI AI, it simulates realistic interview scenarios and provides actionable insights.

## Features

- **Real‑Time AI Voice Interviews**  
  Conduct a live, voice‑based interview with an AI interviewer powered by OpenAI’s GPT‑4, Deepgram for transcription, and 11labs for speech synthesis citeturn15view0turn13view0  
- **Automatic Feedback Generation**  
  After each interview, receive structured feedback across multiple categories (Communication, Technical Knowledge, Problem Solving, Cultural Fit, Confidence) via a Firebase‑backed workflow citeturn15view0turn9view0  
- **User Authentication & Data Persistence**  
  Sign up or log in with Firebase Authentication; interview transcripts and feedback are stored securely in Firestore citeturn10view0turn9view0  
- **Customizable Interview Templates**  
  Define your own question flows or choose from preset templates; support for various roles, experience levels, and tech stacks citeturn15view0  
- **Modern UI/UX**  
  Responsive design using Tailwind CSS animations, Radix UI components, and iconography from Lucide React citeturn4view0  

## Tech Stack

- **Framework**: Next.js 15 (App Router) citeturn4view0  
- **Language**: TypeScript, React 19  
- **Styling**: Tailwind CSS v4, `clsx`, `class-variance-authority`  
- **Authentication & Database**: Firebase (Auth, Firestore) citeturn10view0turn9view0  
- **AI & Transcription**:  
  - VAPI AI SDK (`@vapi-ai/web`) for workflow orchestration  
  - OpenAI GPT‑4 for interview logic  
  - Deepgram for speech‑to‑text  
  - 11labs for text‑to‑speech  
- **Utilities**: `react-hook-form`, `zod` for validation, `dayjs` for date handling  

## Getting Started

### Prerequisites

- Node.js v18 or later  
- npm (or Yarn)  
- A Firebase project with service account credentials  
- VAPI AI credentials and a defined workflow ID

### Clone & Install

```bash
git clone https://github.com/Kumaraditya18/IntervBit.git
cd IntervBit
npm install
# or
yarn install
```

### Environment Variables

Create a `.env.local` file in the project root with the following:

```bash
# Firebase Admin (Server-side)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_KEY_CONTENT\n-----END PRIVATE KEY-----\n"

# VAPI AI (Client-side)
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_vapi_workflow_id

# [Optional] If your VAPI SDK requires an API key:
# NEXT_PUBLIC_VAPI_API_KEY=your_vapi_api_key
```

> **Note:** The Firebase client config is already set in `firebase/client.ts` citeturn10view0. No additional vars needed for client initialization.

### Run Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. **Sign Up / Log In** via the Firebase‑powered auth form.  
2. **Create or Select** an interview template (role, tech stack, questions).  
3. **Press “Call”** to start a live voice interview.  
4. **Speak** your answers; the AI will react and ask follow‑ups.  
5. **Receive Feedback** upon completion and review your scores and comments.

## Deployment

### Vercel

1. Push your branch to GitHub.  
2. Import the repo in Vercel.  
3. Set the same environment variables in your Vercel project settings.  
4. Deploy — Vercel will handle build and release.

Alternatively, you can self‑host:

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository.  
2. Create a feature branch: `git checkout -b feature/YourFeature`.  
3. Commit your changes and push to your fork.  
4. Open a Pull Request detailing your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions or feedback, reach out at **kumaraditya1814@gmail.com**.
