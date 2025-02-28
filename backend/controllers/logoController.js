const logoModel = require("../models/logoModel");

async function generateLogo(req, res) {
  const { text, style } = req.body;
  const prompt = `Generate a logo description with the text "${text}" and style "${style}".`;

  try {
    const logoDescription = await logoModel.generateLogoDescription(prompt);
    const logoUrl = await logoModel.generateLogoImage(logoDescription);
    res.json({ logoUrl });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { generateLogo };
