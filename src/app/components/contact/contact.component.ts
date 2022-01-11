import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from 'src/app/contact';
import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })





@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  reasons=  [ 'Company hire' ,
   'Client quote request', 
 'Others'];
 model = new Contact('Zainab Afolabi', 'zainab.o.afolabi@gmail.com','I would like to discuss a Frontend Engineer role with you', 'excellent', 'subscribe');

 submitted = false;

 onSubmit() { this.submitted = true;
}

 newContact() {
   this.model = new Contact('', '','','','');
 }


  // contactForm:FormGroup=new FormGroup ({
  //   email:new FormControl ("", Validators.email),
  //   phoneNumber:new FormControl ("", Validators.required),
  //   message:new FormControl ("", Validators.required),
  
  // });
  // contactFormLoading: boolean = false;
  // email:string='';
  // phoneNumber:string='';
  // message:string='';

  constructor() {   }

  ngOnInit(): void {
    
  }

//   contact() {
//     this.contactFormLoading = true;
//     let data = {
      
//       email: this.contactForm.value.email,
//       phoneNumber: this.contactForm.value.phoneNumber,
//       message:this.contactForm.value.message

//     };
// }
// onSubmit(contactForm:FormGroup){

//   console.log(this.contactForm.value);

// }
}

