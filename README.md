Sure! Here's your updated `README.md` with a **"To Be Added"** section mentioning the logout functionality:

---

# IntervBit

> An AI‑powered platform for practicing job interviews in real time.

IntervBit  helps you sharpen your interview skills through live, AI‑driven voice interviews and post‑interview feedback. Built with Next.js and powered by Firebase and VAPI AI, it simulates realistic interview scenarios and provides actionable insights.

## Features

- **Real‑Time AI Voice Interviews**  
  Conduct a live, voice‑based interview with an AI interviewer powered by OpenAI’s GPT‑4, Deepgram for transcription, and 11labs for speech synthesis.  
- **Automatic Feedback Generation**  
  After each interview, receive structured feedback across multiple categories (Communication, Technical Knowledge, Problem Solving, Cultural Fit, Confidence).  
- **User Authentication & Data Persistence**  
  Sign up or log in with Firebase Authentication; interview transcripts and feedback are stored securely in Firestore.  
- **Customizable Interview Templates**  
  Define your own question flows or choose from preset templates; support for various roles, experience levels, and tech stacks.  
- **Modern UI/UX**  
  Responsive design using Tailwind CSS animations, Radix UI components, and iconography from Lucide React.  

## Tech Stack

- **Framework**: Next.js 15 (App Router)  
- **Language**: TypeScript, React 19  
- **Styling**: Tailwind CSS v4, `clsx`, `class-variance-authority`  
- **Authentication & Database**: Firebase (Auth, Firestore)  
- **AI & Transcription**:  
  - VAPI AI SDK (`@vapi-ai/web`) for workflow orchestration  
  - OpenAI GPT‑4 for interview logic  
  - Deepgram for speech‑to‑text  
  - 11labs for text‑to‑speech  
- **Utilities**: `react-hook-form`, `zod`, `dayjs`  

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
```

### Run Locally

```bash
npm run dev
# or
yarn dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## Usage

1. **Sign Up / Log In** via the Firebase auth form  
2. **Choose an interview template**  
3. **Start a live interview** by clicking “Call”  
4. **Speak** your responses  
5. **Receive instant feedback** post interview  

## Deployment

### Vercel

- Import repo on Vercel  
- Add environment variables  
- Deploy with Vercel’s CI/CD  

Or self-host with:

```bash
npm run build
npm start
```

## To Be Added

- 🔒 **Logout functionality** for signed-in users  
- 📝 Editable feedback and summary export  
- 📊 Dashboard with historical performance and metrics  
- 🌐 Multi-language support  
- 📱 Mobile-first UI enhancements  

## Contributing

1. Fork this repo  
2. Create a branch: `git checkout -b feature/my-feature`  
3. Commit and push  
4. Open a pull request

## License

[MIT License](LICENSE)
