import multer from "multer";
import { v4 } from "uuid"
import { extname, resolve } from 'path'

export default {

    storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', 'uploads'),
        filename: (request, file, calback) => {
           return calback(null, v4() + extname(file.originalname))
        }
    })
}