import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarpagoComponent } from './registrarpago.component';

describe('RegistrarpagoComponent', () => {
  let component: RegistrarpagoComponent;
  let fixture: ComponentFixture<RegistrarpagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarpagoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
