import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { consoleGurdGuard } from './console-gurd.guard';

describe('consoleGurdGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => consoleGurdGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
