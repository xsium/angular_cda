import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsereditorComponent } from './usereditor.component';

describe('UsereditorComponent', () => {
  let component: UsereditorComponent;
  let fixture: ComponentFixture<UsereditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsereditorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsereditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
