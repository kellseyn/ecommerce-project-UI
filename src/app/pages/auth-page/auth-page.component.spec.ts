import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageComponent } from './auth-page.component';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;
  let loginToggle: boolean;
  let signupToggle: boolean;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle login to signup', ()=>{
     loginToggle = true;
     signupToggle = false;
     const auth = new AuthPageComponent();
     expect(auth.loginToggle).toBe(true);
     expect(auth.signupToggle).toBe(false);
     auth.loginToggler();
     expect(auth.loginToggle).toBe(false);
     expect(auth.signupToggle).toBe(true);
  });
});
