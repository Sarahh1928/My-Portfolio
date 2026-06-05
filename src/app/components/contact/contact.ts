import { CommonModule } from '@angular/common';
import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  constructor(
    private snack: MatSnackBar,
    private zone: NgZone,
    private cdr: ChangeDetectorRef // ✅ new
  ) { }

  contactInfo = {
    email: 'sarahmohamed1928@gmail.com',
    phone: '+201022230232',
    location: 'El Obour, Egypt',
    linkedin: 'https://www.linkedin.com/in/sarah-mohamed-604a96214',
    github: 'https://github.com/Sarahh1928'
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  messageSent = false;
  message = "";

  sendMessage() {
  const serviceID = 'service_585wq16';
  const ownerTemplateID = 'template_p81bm6c';
  const senderTemplateID = 'template_8tfvo3l';
  const publicKey = '222QIqpdS79JCjohR';

  const templateParams = {
  name: this.formData.name,
  email: this.formData.email,
  message: this.formData.message
};

  emailjs.send(serviceID, ownerTemplateID, templateParams, publicKey)
    .then(() => emailjs.send(serviceID, senderTemplateID, templateParams, publicKey))
    .then(() => {
      this.zone.run(() => {
        this.formData = { name: '', email: '', message: '' };
        this.messageSent = true;
        this.message = "Message sent successfully!";
        this.cdr.detectChanges();

        setTimeout(() => {
          this.messageSent = false;
          this.message = "";
          this.cdr.detectChanges();
        }, 3000);
      });
    })
    .catch((error) => {
      console.log("EmailJS error:", error);

      this.messageSent = false;
      this.message = "Failed to send message.";
      this.cdr.detectChanges();
    });
}
}