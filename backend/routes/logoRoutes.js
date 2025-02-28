const express = require("express");
const logoController = require("../controllers/logoController");
const Joi = require("joi");

const router = express.Router();

const logoSchema = Joi.object({
  text: Joi.string().required(),
  style: Joi.string().required(),
});

router.post(
  "/generate-logo",
  (req, res, next) => {
    const { error } = logoSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  },
  logoController.generateLogo
);

module.exports = router;
