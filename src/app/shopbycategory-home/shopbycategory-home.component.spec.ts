import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopbycategoryHomeComponent } from './shopbycategory-home.component';

describe('ShopbycategoryHomeComponent', () => {
  let component: ShopbycategoryHomeComponent;
  let fixture: ComponentFixture<ShopbycategoryHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopbycategoryHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopbycategoryHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
