import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  validLogin = false

  constructor(private router:Router,private hardcodedAuthenticationService : HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin(){

  //  if(this.username==='in28minutes' && this.password==='dummy'){
      if(this.hardcodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
      this.validLogin = true
    }else{
      this.invalidLogin = true
      this.validLogin = false
    }
  //  console.log(this.username)
  }
}
