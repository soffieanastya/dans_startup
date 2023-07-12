import { Test, TestingModule } from '@nestjs/testing';
import { JoblistController } from './joblist.controller';

describe('JoblistController', () => {
  let controller: JoblistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JoblistController],
    }).compile();

    controller = module.get<JoblistController>(JoblistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
