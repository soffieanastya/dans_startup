import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JobdetailController } from './jobdetail.controller';
import { JobdetailService } from './jobdetail.service';

@Module({
    imports: [HttpModule],
    controllers: [JobdetailController],
    providers: [JobdetailService]
})
export class JobdetailModule {}
