import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome message';
  welcomeMessageFromService:string;
  errorMessage : string;
  name = '';
  //In Java
  //String message = "Some Welcome message";

  //Activated Route
  constructor(private route:ActivatedRoute,private service:WelcomeDataService) { }

  ngOnInit() {
    console.log(this.message);
 //   console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name1']
  }

  getWelcomeMessage(){
   // console.log('get welcome message')
   console.log(this.service.executeHelloWorldBeanService());
   this.service.executeHelloWorldBeanService().subscribe(
     response=>this.handleSuccessfulResponse(response),
     error=>this.handleErrorResponse(error)
   );
   console.log('Last line of getWelcomeMessage');
  }

  getWelcomeMessageWithParameter(){
    // console.log('get welcome message')
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response=>this.handleSuccessfulResponse(response),
      error=>this.handleErrorResponse(error)
    );
    console.log('Last line of getWelcomeMessage');
   }

  handleSuccessfulResponse(response){
    this.welcomeMessageFromService = response.message;
    console.log(response);
    console.log(response.message);
  }

  handleErrorResponse(error){
    this.errorMessage = error.error.message;
    console.log(error.error.message);
  }
}
