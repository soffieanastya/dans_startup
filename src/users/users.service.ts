import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'model/entities/Users';
import * as bcrypt from 'bcrypt'
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
    constructor(@InjectRepository(Users) private userRepository: Repository<Users>){

    }

    async register(data:any){
        let message:any;
        try{
            const salt=bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(data.password,salt);
    
            await this.userRepository.insert({
                username:data.username,
                password:hash
            })

            message = 'Register successfully!'

        }catch(err:any){
            message = 'User failed to registered!' + err;
        }

        return message;
    }

    async findUser(data:any):Promise<any>{
        return await this.userRepository.findOne(
            {
                where : {username: data}
            }
        );
    }
}
