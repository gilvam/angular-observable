import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPjComponent } from './account-pj.component';

describe('AccountPjComponent', () => {
  let component: AccountPjComponent;
  let fixture: ComponentFixture<AccountPjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
