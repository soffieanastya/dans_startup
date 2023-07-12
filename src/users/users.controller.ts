import { Body, Controller, Post } from '@nestjs/common';
import { Users } from 'model/entities/Users';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userServices: UsersService){}

    @Post()
    register(@Body() data: Users){
        return this.userServices.register(data)
    }
}
