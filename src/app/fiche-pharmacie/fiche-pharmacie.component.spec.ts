import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePharmacieComponent } from './fiche-pharmacie.component';

describe('FichePharmacieComponent', () => {
  let component: FichePharmacieComponent;
  let fixture: ComponentFixture<FichePharmacieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePharmacieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePharmacieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
