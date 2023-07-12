import { Controller, Get, Query, UseGuards,  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JobdetailService } from './jobdetail.service';

@Controller('jobdetail')
export class JobdetailController {
    constructor(private jobdetailService:JobdetailService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    Jobdetail(@Query() query):any{
        const ID = query.ID;

        return this.jobdetailService.job_detail(ID)
    }
}
