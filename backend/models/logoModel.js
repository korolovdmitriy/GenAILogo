// backend/models/logoModel.js
const { GoogleGenerativeAI } = require("@google/generative-ai");
const OpenAI = require("openai");

const googleApiKey = process.env.GOOGLE_API_KEY;
const openaiApiKey = process.env.OPENAI_API_KEY;

const genAI = new GoogleGenerativeAI(googleApiKey);
const openai = new OpenAI({ apiKey: openaiApiKey });

async function generateLogoDescription(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}

async function generateLogoImage(description) {
  try {
    const response = await openai.images.generate({
      prompt: description,
      n: 1,
      size: "512x512",
    });
    const imageUrl = response.data[0].url;
    return imageUrl;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}

module.exports = { generateLogoDescription, generateLogoImage };
