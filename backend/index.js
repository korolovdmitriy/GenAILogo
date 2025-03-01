const { GoogleGenerativeAI } = require("@google/generative-ai");

const googleApiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(googleApiKey);

async function checkModel() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  try {
    const result = await model.generateContent("Hello");
    console.log("Model is working!");
  } catch (error) {
    console.error("Model is not working:", error);
  }
}

checkModel();
