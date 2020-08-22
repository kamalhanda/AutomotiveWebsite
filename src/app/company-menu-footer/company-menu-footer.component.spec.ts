import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMenuFooterComponent } from './company-menu-footer.component';

describe('CompanyMenuFooterComponent', () => {
  let component: CompanyMenuFooterComponent;
  let fixture: ComponentFixture<CompanyMenuFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMenuFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMenuFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
