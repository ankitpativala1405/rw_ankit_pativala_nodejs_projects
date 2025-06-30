import Movie from "../Model/movie.model.js";

export const MovieController = {
  GetMovie: async (_, res) => {
    try {
      const movies = await Movie.find();
      res.status(200).json({
        success: true,
        count: movies.length,
        data: movies
      })
    } catch {
      res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }

  },
  SetMovie: async (req, res) => {
    try {
      const movie = await Movie.create(req.body);
      res.status(201).json({
        success: true,
        data: movie
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  },
  UpdateMovie: async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      res.status(200).json({
        success: true,
        data: movie
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  },
  DeleteMovie: async (req, res) => {
    try {
      await Movie.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        data: null
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        error: "Server Error"
      });
    }
  }
}