import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBagCostComponent } from './product-bag-cost.component';

describe('ProductBagCostComponent', () => {
  let component: ProductBagCostComponent;
  let fixture: ComponentFixture<ProductBagCostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBagCostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBagCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
