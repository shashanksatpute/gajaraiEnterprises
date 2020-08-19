import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerMaterialDetailsComponent } from './customer-material-details.component';

describe('CustomerMaterialDetailsComponent', () => {
  let component: CustomerMaterialDetailsComponent;
  let fixture: ComponentFixture<CustomerMaterialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerMaterialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerMaterialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
