import { Component } from "angular2/core";

@Component({
  selector: "contact",
  template: `				
    <div>
    
      <div>
        <label for="fname">First Name: </label>
        
        <input [(ngModel)]="contact.firstName" type="text" id="fname">
      </div>
      <div>
        <label for="lname">Last Name</label>
        
        <input [(ngModel)]="contact.lastName" type="text" id="lname">
      </div>
      <div>
        <label for="phone">Phone: </label>
        
        <input [(ngModel)]="contact.phone" type="text" id="phone">
      </div>
      <div>
        <label for="email">Email: </label>
        
        <input [(ngModel)]="contact.email" type="text" id="email">
      </div>   
      
    </div>
  `,
  inputs: ["contact"],
  styles: [`
    label {
      display: inline-block;
      width: 140px;
    }
  `]
})

export class ContactComponent {

  public contact = {};

}
