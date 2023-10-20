import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user';

@Injectable()
export class UsersService {
    private readonly users: UserInterface[];

    constructor() {
        this.users = [
            {
                userId: Date.now().toString(),
                userName: 'test',
                password: 'test',
            }
        ];
    }

    async findOne(username: string): Promise<UserInterface | undefined> {
        return this.users.find(user => user.userName === username);
    }

    async register(username: string, password: string): Promise<UserInterface> {
        const newUser = {
            userId: Date.now().toString(),
            userName: username,
            password: password,
        };
        this.users.push(newUser);
        return newUser;
    }
}