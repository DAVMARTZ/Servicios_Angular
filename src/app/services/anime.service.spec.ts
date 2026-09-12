import { TestBed } from '@angular/core/testing';

import { AnimeService } from './anime.service.js';

describe('AnimeServiceTs', () => {
  let service: AnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
