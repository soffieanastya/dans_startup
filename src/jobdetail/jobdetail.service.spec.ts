import { Test, TestingModule } from '@nestjs/testing';
import { JobdetailService } from './jobdetail.service';

describe('JobdetailService', () => {
  let service: JobdetailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobdetailService],
    }).compile();

    service = module.get<JobdetailService>(JobdetailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
