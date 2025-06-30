const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Movie Title is Must Be Required"],
    trim: true
  },
  director: {
    type: String,
    require: [true, "Movie Director is Must Be Required"],
    trim: true
  },
  releaseYear: {
    type: Number,
    require: [true, "Movie Release Year is Must Be Required"],
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 10
  },
}, { timestamps: true });

const Movie = mongoose.model("Movie", MovieSchema);
module.exports = Movie