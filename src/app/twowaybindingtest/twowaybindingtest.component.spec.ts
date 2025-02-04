import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingtestComponent } from './twowaybindingtest.component';

describe('TwowaybindingtestComponent', () => {
  let component: TwowaybindingtestComponent;
  let fixture: ComponentFixture<TwowaybindingtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwowaybindingtestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwowaybindingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
