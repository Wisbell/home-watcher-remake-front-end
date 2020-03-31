import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityLiveComponent } from './security-live.component';

describe('SecurityLiveComponent', () => {
  let component: SecurityLiveComponent;
  let fixture: ComponentFixture<SecurityLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
