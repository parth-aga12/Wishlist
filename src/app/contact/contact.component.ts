import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmailDomain';

// set invalid email hosts
const invalidEmailDomain = createInvalidDomainValidator(['gmail.com', 'yahoo.com', 'hotmail.com'])


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor() {}
  
  ngOnInit(): void {

  }

  contactForm = new FormGroup({
// this creates FormControl Objects (reactive) vs the 2-way ngModel from earlier
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [Validators.required, Validators.email, invalidEmailDomain]),
    senderMessage: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
// validators enforces conditions for submission

  submitForm() {

    console.log(this.contactForm.valid);
  //   if (this.contactForm.dirty) {
  //     alert('you changed the name field');
  //   }
  }
}
