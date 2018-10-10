import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') signUpForm : NgForm;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private auth: AuthService) {}

  ngOnInit() {
  }

  onSubmit(){
    // console.log(this.signUpForm);
    // clear form
    this.signUpForm.reset();
    // change state to login
    this.auth.onLogin();
    // navigate away
    this.router.navigate(['../list'],{relativeTo: this.route});
  }
}
