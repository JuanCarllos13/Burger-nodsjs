import { Router } from "express"
import multer from "multer"
import multerConfig from './config/multer'

import SessionController from "./app/controllers/SessionController"
import UserController from "./app/controllers/UserController"
import ProductsController from "./app/controllers/ProductsController"
import CategoryController from "./app/controllers/CategoryController"
import OrderController from "./app/controllers/OrderController"

import authMiddlewares from "./app/middlewares/auth"

const upload = multer(multerConfig)

const routes = new Router()

routes.post("/users", UserController.store)

routes.post("/sessions", SessionController.store)

routes.use(authMiddlewares) // será chamados por todas as routas abaixo

routes.post("/products", upload.single('file'), ProductsController.store)
routes.get("/products", ProductsController.index)
routes.put("/products/:id", upload.single('file'), ProductsController.update)

routes.post("/categories",upload.single('file'), CategoryController.store)
routes.get("/categories", CategoryController.index)
routes.put("/categories/:id", upload.single('file'), CategoryController.update)


routes.post("/orders", OrderController.store)
routes.put("/orders/:id", OrderController.update)
routes.get("/orders", OrderController.index)

export default routes