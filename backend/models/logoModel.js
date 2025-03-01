const OpenAI = require("openai");

const openaiApiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({ apiKey: openaiApiKey });

async function generateLogoImage(prompt) {
  try {
    const response = await openai.images.generate({
      prompt: prompt,
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

module.exports = { generateLogoImage };
