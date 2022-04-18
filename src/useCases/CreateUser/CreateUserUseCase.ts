import {IUsersRepository} from "../../repositories/IUsersRepository";
import {ICreateUserRequestDTO} from "./CreateUserDTO";
import {User} from "../../entities/User";
import {IMailProvider} from "../../providers/IMailProvider";

class CreateUserUseCase{
    constructor(
       private usersRepository: IUsersRepository,
       private mailProvider: IMailProvider
    ) {}

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByName(data.email)

        if (userAlreadyExists){
            throw new Error("User already exists")
        }

        const user = new User(data);

        await this.usersRepository.save(user);

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
             from:{
                name: "Equipe do App",
                email: "equipe@meuapp.com"
             },
             subject: "Seja bem vindo a plataforma",
             body: "<p>Você já pode fazer login em nosso plataforma</p>"
        });
    }
}

export {CreateUserUseCase}
