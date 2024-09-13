const mongoose = require('mongoose');

const ShlokaSchema = new mongoose.Schema({
    text: { type: String, required: true },
    translationHindi: { type: String, required: true },
    translationEnglish: { type: String, required: true },
    audioUrl: { type: String }
});

const Shloka = mongoose.model('Shloka', ShlokaSchema);

module.exports = Shloka;
