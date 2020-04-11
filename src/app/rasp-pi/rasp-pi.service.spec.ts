import { TestBed } from '@angular/core/testing';

import { RaspPiService } from './rasp-pi.service';

describe('RaspPiService', () => {
  let service: RaspPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaspPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
