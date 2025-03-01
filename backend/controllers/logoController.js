const logoModel = require("../models/logoModel");

async function generateLogo(req, res) {
  const { text, style } = req.body;
  const prompt = `A logo with the text ${text} and style ${style}.`;

  try {
    const logoUrl = await logoModel.generateLogoImage(prompt);
    res.json({ logoUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { generateLogo };
