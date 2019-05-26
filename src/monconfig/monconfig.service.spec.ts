import { Test, TestingModule } from '@nestjs/testing';
import { MonconfigService } from './monconfig.service';

describe('MonconfigService', () => {
  let service: MonconfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonconfigService],
    }).compile();

    service = module.get<MonconfigService>(MonconfigService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
