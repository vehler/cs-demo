import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup = new FormGroup({});
  public loading = false;
  public submitted = false;
  public returnUrl: string = '';
  public error = '';

  constructor(private readonly formBuilder: FormBuilder,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly authService: AuthService
  ) {

    // redirect to home if already logged in
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }

  }
  public ngOnInit(): void {
    // Added demo auth data
    this.loginForm = this.formBuilder.group({
      email: ['emilee.johson@foo.com', Validators.required],
      password: ['tzxoLRUjyO', Validators.required]
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easier access to form fields
  public get f() { return this.loginForm.controls; }

  public onSubmit(): void {
    this.submitted = true;
    this.toggleForm();

    if (this.loginForm.invalid) {
      this.toggleForm();
      return;
    }

    this.loading = true;
    this.authService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([this.returnUrl]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

  private toggleForm(): void {
    for(let control in this.loginForm.controls) {
      if(this.loginForm.controls[control].disabled) {
        this.loginForm.controls[control].enable();
      } else {
        this.loginForm.controls[control].disable();
      }
    }
  }


}
