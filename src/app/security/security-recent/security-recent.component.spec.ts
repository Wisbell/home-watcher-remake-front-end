import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityRecentComponent } from './security-recent.component';

describe('SecurityRecentComponent', () => {
  let component: SecurityRecentComponent;
  let fixture: ComponentFixture<SecurityRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecurityRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
