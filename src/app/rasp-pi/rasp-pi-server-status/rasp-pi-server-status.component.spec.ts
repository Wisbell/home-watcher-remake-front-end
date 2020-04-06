import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspPiServerStatusComponent } from './rasp-pi-server-status.component';

describe('RaspPiServerStatusComponent', () => {
  let component: RaspPiServerStatusComponent;
  let fixture: ComponentFixture<RaspPiServerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspPiServerStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspPiServerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
