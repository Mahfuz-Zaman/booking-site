import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectTravelersComponent } from './connect-travelers.component';

describe('ConnectTravelersComponent', () => {
  let component: ConnectTravelersComponent;
  let fixture: ComponentFixture<ConnectTravelersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectTravelersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectTravelersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
