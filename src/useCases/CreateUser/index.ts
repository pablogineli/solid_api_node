import {MailtrapMailProvider} from "../../providers/implementations/MailtrapMailProvider";
import {PostgresUserRepository} from "../../repositories/implentations/PostgresUserRepository";
import {CreateUserUseCase} from "./CreateUserUseCase";
import {CreateUserController} from "./CreateUserController";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgresUserRepository = new PostgresUserRepository()

const createUserUseCase = new CreateUserUseCase(postgresUserRepository,mailtrapMailProvider)

const createUserUseCaseController = new CreateUserController(createUserUseCase)


export {createUserUseCase,createUserUseCaseController}
