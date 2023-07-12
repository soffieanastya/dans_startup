import { Module } from '@nestjs/common';
import { JoblistController } from './joblist.controller';
import { JoblistService } from './joblist.service';
import { HttpModule } from '@nestjs/axios'

@Module({
    imports: [HttpModule],
    controllers: [JoblistController],
    providers: [JoblistService],
})
export class JoblistModule {}
