import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}

    // dipanggil sama local.strategy
    async validateUser(pusername, ppassword){
        const user = await this.userService.findUser(pusername);

        if(user){
            // cek pasword
            if(bcrypt.compareSync(ppassword, user.password)){
                return user;
            }
        }else{
            // return 'username tidak tersedia'
            return null;
        }
    }

    async login(user: any){
        const payload = { username: user.username };
        return {
            message: 'login success!',
            access_token: this.jwtService.sign(payload)
        }
    }

}
