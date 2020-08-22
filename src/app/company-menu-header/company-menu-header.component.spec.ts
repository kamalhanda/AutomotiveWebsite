import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMenuHeaderComponent } from './company-menu-header.component';

describe('CompanyMenuHeaderComponent', () => {
  let component: CompanyMenuHeaderComponent;
  let fixture: ComponentFixture<CompanyMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
