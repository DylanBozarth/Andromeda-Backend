import { Injectable } from '@nestjs/common';
import { UserInterface } from 'src/interfaces/user';

@Injectable()
export class UsersService {
    // private readonly users: UserInterface[];
    private readonly users = [
        {
          userId: 'test',
          userName: 'TESTMAN',
          password: '123456',
        },
        {
          userId: 'test',
          userName: 'maria',
          password: 'guess',
        },
      ];
    constructor() {
        this.users = [
            {
                userId: 'test',
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