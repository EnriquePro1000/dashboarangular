import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifysaldoComponent } from './modifysaldo.component';

describe('ModifysaldoComponent', () => {
  let component: ModifysaldoComponent;
  let fixture: ComponentFixture<ModifysaldoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifysaldoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifysaldoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
