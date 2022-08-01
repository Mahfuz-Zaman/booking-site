import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBangladeshComponent } from './explore-bangladesh.component';

describe('ExploreBangladeshComponent', () => {
  let component: ExploreBangladeshComponent;
  let fixture: ComponentFixture<ExploreBangladeshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreBangladeshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreBangladeshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
