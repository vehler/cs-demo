import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserResponseDTO } from 'src/users/users.models';
import { UsersService } from 'src/users/users.service';
import { AuthUserDTO } from './auth.models';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(email: string, pass: string): Promise<UserResponseDTO> {
        const user = await this.usersService.findByEmail(email);

        // todo: implement password hash
        if (user && user.password_plain == pass) {
            return new UserResponseDTO(user);
        }

        return null;
    }

    async login(authUser: AuthUserDTO) {
        // todo: implement remember me
        const user = await this.usersService.findByEmail(authUser.email);

        if (user && user.password_plain == authUser.password) {
            const payload = { username: user.email, sub: user.id };

            return {
                access_token: this.jwtService.sign(payload),
            };
        } else {

        }
    }
}
