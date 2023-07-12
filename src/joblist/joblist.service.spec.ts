import { Test, TestingModule } from '@nestjs/testing';
import { JoblistService } from './joblist.service';

describe('JoblistService', () => {
  let service: JoblistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoblistService],
    }).compile();

    service = module.get<JoblistService>(JoblistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
