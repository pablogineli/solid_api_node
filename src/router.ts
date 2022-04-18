import {Router}  from "express"
import {createUserUseCaseController} from "./useCases/CreateUser";

const router = Router()

router.post("/user", (request, response)=>{
    return createUserUseCaseController.handle(request, response)
})



export {router}
