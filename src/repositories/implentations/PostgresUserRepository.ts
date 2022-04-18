import {IUsersRepository} from "../IUsersRepository";
import {User} from "../../entities/User";

class PostgresUserRepository implements IUsersRepository{
    private users: User[] = [];

    async findByName(email: string): Promise<User>{
        const user = await this.users.find(user => user.email === email);

        // @ts-ignore
        return user;
    }

    async save(user: User): Promise<void>{
        this.users.push(user);
    }
}


export {PostgresUserRepository}
