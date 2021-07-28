import { Test, TestingModule } from '@nestjs/testing';
import { DiscoService } from './disco.service';

describe('DiscoService', () => {
  let service: DiscoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscoService],
    }).compile();

    service = module.get<DiscoService>(DiscoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
