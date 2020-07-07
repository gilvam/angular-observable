import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMeiComponent } from './account-mei.component';

describe('AccountMeiComponent', () => {
  let component: AccountMeiComponent;
  let fixture: ComponentFixture<AccountMeiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountMeiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountMeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
