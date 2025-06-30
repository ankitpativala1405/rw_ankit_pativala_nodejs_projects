const Router = require('express')
const { MovieController } = require('../Controller/movie.controller')
const router = Router()

router.get("/",MovieController.GetMovie)
router.post("/",MovieController.SetMovie)

router.patch("/:id",MovieController.UpdateMovie)
router.delete("/:id",MovieController.DeleteMovie)


module.exports = router