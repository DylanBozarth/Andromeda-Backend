import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from 'src/interfaces/user';

@Injectable()
export class UsersService {
    constructor(@InjectModel('user') private readonly userModel: Model<UserInterface>) { }
    async createUser(username: string, password: string): Promise<UserInterface> {
        return this.userModel.create({
            username,
            password,
        });
    }
    async getUser(query: object ): Promise<UserInterface> {
        return this.userModel.findOne(query);
    }
}