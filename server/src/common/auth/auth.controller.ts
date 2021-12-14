import { Body, Controller, Post, Request } from '@nestjs/common';
import { AuthUserDTO } from './auth.models';
import { AuthService } from './auth.service';

@Controller('v1/auth')
export class AuthController {

    constructor(private authService: AuthService) { }

    @Post('login')
    async login(@Body() user: AuthUserDTO) {
        // todo: user request validation
        return this.authService.login(user);
    }

    @Post('logout')
    async logout() {
        // todo: implememnt log out
        return {logout: true};
    }

}
