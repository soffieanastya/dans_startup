import { Test, TestingModule } from '@nestjs/testing';
import { JobdetailController } from './jobdetail.controller';

describe('JobdetailController', () => {
  let controller: JobdetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobdetailController],
    }).compile();

    controller = module.get<JobdetailController>(JobdetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
