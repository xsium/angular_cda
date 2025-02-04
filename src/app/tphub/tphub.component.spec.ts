import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TphubComponent } from './tphub.component';

describe('TphubComponent', () => {
  let component: TphubComponent;
  let fixture: ComponentFixture<TphubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TphubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TphubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
