import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtplCookiesComponent } from './utpl-cookies.component';

describe('UtplCookiesComponent', () => {
  let component: UtplCookiesComponent;
  let fixture: ComponentFixture<UtplCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtplCookiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtplCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
