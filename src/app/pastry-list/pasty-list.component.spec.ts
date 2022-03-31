import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastyListComponent } from './pasty-list.component';

describe('PastyListComponent', () => {
  let component: PastyListComponent;
  let fixture: ComponentFixture<PastyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
