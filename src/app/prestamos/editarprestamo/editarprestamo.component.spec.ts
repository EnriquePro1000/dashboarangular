import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarprestamoComponent } from './editarprestamo.component';

describe('EditarprestamoComponent', () => {
  let component: EditarprestamoComponent;
  let fixture: ComponentFixture<EditarprestamoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarprestamoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarprestamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
