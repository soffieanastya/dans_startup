import { Controller, Get, Query, UseGuards,  } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { JoblistService } from './joblist.service';

@Controller('joblist')
export class JoblistController {
    constructor(private readonly joblistService: JoblistService){}

    @UseGuards(AuthGuard('jwt'))
    @Get()
    joblist():any{
        return this.joblistService.joblist();
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('search')
    searchJoblist(@Query() query):any{
        const description = query.description;
        const location = query.location;
        const full_time = query.full_time;

        return this.joblistService.searchJoblist(description,location,full_time)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('page')
    pageJoblist(@Query() query):any{
        const page = query.page;

        return this.joblistService.pageJoblist(page);
    }
}
