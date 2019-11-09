import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauTp3Component } from './tableau-tp3.component';

describe('TableauTp3Component', () => {
  let component: TableauTp3Component;
  let fixture: ComponentFixture<TableauTp3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableauTp3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauTp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
