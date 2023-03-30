const mongoose = require("mongoose");

const HeroSchema = new mongoose.Schema({
  superHero: {
    type: String,
    required: [true, "Please name the hero"],
    unique: true,
    trim: true,
  },
  realName: {
    type: String,
    required: true,
    maxlength: [200, "Please keep name short"],
  },
});

//if Hero is already created in models, send that or else create a new
module.exports = mongoose.models.Hero || mongoose.model("Hero", HeroSchema);
