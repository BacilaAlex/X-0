import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatratComponent } from './patrat.component';

describe('PatratComponent', () => {
  let component: PatratComponent;
  let fixture: ComponentFixture<PatratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
