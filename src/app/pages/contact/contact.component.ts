import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { PageBannerComponent } from '../../components/layout/page-banner/page-banner.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, PageBannerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = { name: '', email: '', subject: '', message: '', file: null };
  contactSent = false;

  onContactSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.contactSent = true;
    setTimeout(() => {
      this.contactSent = false;
      form.resetForm({ subject: '' });
      this.contactForm = { name: '', email: '', subject: '', message: '', file: null };
    }, 5000);
  }
}
