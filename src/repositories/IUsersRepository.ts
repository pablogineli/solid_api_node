import {User} from "../entities/User";

interface IUsersRepository{

    findByName(email: string): Promise<User>;
    save(user: User):Promise<void>;


}
export {IUsersRepository}
