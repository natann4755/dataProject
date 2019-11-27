import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbomComponent } from './albom.component';

describe('AlbomComponent', () => {
  let component: AlbomComponent;
  let fixture: ComponentFixture<AlbomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
