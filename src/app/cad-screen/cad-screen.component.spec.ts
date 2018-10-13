import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadScreenComponent } from './cad-screen.component';

describe('CadScreenComponent', () => {
  let component: CadScreenComponent;
  let fixture: ComponentFixture<CadScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
