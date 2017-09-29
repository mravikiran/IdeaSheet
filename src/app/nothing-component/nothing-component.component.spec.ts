import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NothingComponentComponent } from './nothing-component.component';

describe('NothingComponentComponent', () => {
  let component: NothingComponentComponent;
  let fixture: ComponentFixture<NothingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NothingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NothingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
