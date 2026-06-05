import { CommonModule } from '@angular/common';
import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RevealOnScrollDirective } from '../../directives/reveal-on-scroll';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactService } from '../../services/contact-service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, RevealOnScrollDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  constructor(
    private snack: MatSnackBar,
    private contactService: ContactService,
    private cdr: ChangeDetectorRef
  ) {}

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
  message = '';

  sendMessage() {
    this.contactService.sendMessage(this.formData)
      .then(() => {
        this.formData = { name: '', email: '', message: '' };
        this.messageSent = true;
        this.message = 'Message sent successfully!';
        this.cdr.detectChanges();

        setTimeout(() => {
          this.messageSent = false;
          this.message = '';
          this.cdr.detectChanges();
        }, 3000);
      })
      .catch(() => {
        this.messageSent = false;
        this.message = 'Failed to send message. Please try again later.';
        this.cdr.detectChanges();

        setTimeout(() => {
          this.messageSent = false;
          this.message = '';
          this.cdr.detectChanges();
        }, 3000);
      });
  }
}
