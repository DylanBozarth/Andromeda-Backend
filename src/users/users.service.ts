import { Injectable } from '@nestjs/common';
import { Users } from '../../entity/users.entity';

@Injectable()
export class UsersService {
    private readonly users: Users[];

    constructor() {
        this.users = [
            {
                userId: Date.now().toString(),
                username: 'test',
                password: 'test',
            }
        ];
    }

    async findOne(username: string): Promise<Users | undefined> {
        return this.users.find(user => user.username === username);
    }

    async register(username: string, password: string): Promise<Users> {
        const newUser = {
            userId: Date.now().toString(),
            username: username,
            password: password,
        };
        this.users.push(newUser);
        return newUser;
    }
}