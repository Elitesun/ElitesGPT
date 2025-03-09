// npm install @google/generative-ai
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.VITE_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 0.4,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8000,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  return response.text();
}

export default run;
