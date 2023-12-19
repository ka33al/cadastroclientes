const routes = require("express").Router()
    const TaskController = require("../controller/TaskController")

routes.get("https://ka33al.github.io/cadastroclientes/",TaskController.getallTasks  )
routes.post("https://ka33al.github.io/cadastroclientes/create", TaskController.createTask)
routes.get("https://ka33al.github.io/cadastroclientes/getById/:id/:method",TaskController.getById)
routes.post("https://ka33al.github.io/cadastroclientes/updateOne/:id",TaskController.updateOneTask)
routes.get("https://ka33al.github.io/cadastroclientes/deleteOne/:id",TaskController.deleteOneTask)


module.exports= routes
