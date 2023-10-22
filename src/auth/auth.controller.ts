import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from '../users/users.service';

@Controller('auth')
export class AuthController {
    constructor(private usersService: UsersService) {}

    @UseGuards(AuthGuard)
    @Post('login')
    async login(@Request() req) {
        return req.user;
    }

    @Post('register')
    async register(@Request() req) {
        const {username, password} = req.body;
        return this.usersService.register(username, password);
    }
}
