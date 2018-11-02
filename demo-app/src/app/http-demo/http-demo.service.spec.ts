import { TestBed, inject } from '@angular/core/testing';

import { HttpDemoService } from './http-demo.service';

describe('HttpDemoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpDemoService]
    });
  });

  it('should be created', inject([HttpDemoService], (service: HttpDemoService) => {
    expect(service).toBeTruthy();
  }));
});
