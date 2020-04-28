import { TestBed } from '@angular/core/testing';

import { PostersService } from './posters.service';

describe('PostersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostersService = TestBed.get(PostersService);
    expect(service).toBeTruthy();
  });
});
