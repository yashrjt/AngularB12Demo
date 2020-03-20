import { Component } from '@angular/core';
import {Employee}  from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularB12Demo';

  employeeData:Array<Employee>=[
    {
    "userId":"rirani",
    "jobTitleName":"Developer",
    "firstName":"Romin",
    "lastName":"Irani",
    "preferredFullName":"Romin Irani",
    "employeeCode":"E1",
    "region":"CA",
    "phoneNumber":"408-1234567",
    "emailAddress":"romin.k.irani@gmail.com"
    },
    {
    "userId":"nirani",
    "jobTitleName":"Developer",
    "firstName":"Neil",
    "lastName":"Irani",
    "preferredFullName":"Neil Irani",
    "employeeCode":"E2",
    "region":"CA",
    "phoneNumber":"408-1111111",
    "emailAddress":"neilrirani@gmail.com"
    },
    {
    "userId":"thanks",
    "jobTitleName":"Program Directory",
    "firstName":"Tom",
    "lastName":"Hanks",
    "preferredFullName":"Tom Hanks",
    "employeeCode":"E3",
    "region":"CA",
    "phoneNumber":"408-2222222",
    "emailAddress":"tomhanks@gmail.com"
    }
    ]

  showTitle:boolean=true;

  m:number=10;
  cityName:string='New York';
  imgUrl:string='assets/favicon.ico';
  xyz:Array<String>=['giraffe','lion','tiger'];
  // String z='Chicago';

  addData(a:number,b:number):number{
    return a+b;
  }

  computeData($event):void{
    console.log("AppComponent -> computeData -> $event", $event);
    console.log('You clicked the button');
  }

  handleBlur(){
    console.log('text box blurred');
  }

  getEmployee(val){
  console.log("AppComponent -> getEmployee -> val", val)

  }

  toggleTitle(){
    this.showTitle=!this.showTitle;
  }
}
