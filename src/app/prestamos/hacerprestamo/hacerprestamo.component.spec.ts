import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerprestamoComponent } from './hacerprestamo.component';

describe('HacerprestamoComponent', () => {
  let component: HacerprestamoComponent;
  let fixture: ComponentFixture<HacerprestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacerprestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
