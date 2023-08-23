import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactSheetApiService } from 'src/app/service/contact-sheet-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.less'],
})
export class ContactFormComponent {
  googleSheetForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ContactSheetApiService
  ) {
    this.googleSheetForm = this.formBuilder.group({
      name: formBuilder.control(null, Validators.required),
      email: formBuilder.control(null, Validators.email),
      phone: formBuilder.control(null),
      message: formBuilder.control(null, Validators.required),
    });
  }

  changeLoad() {
    this.loading = !this.loading;
  }

  public onSubmit() {
    const name = this.googleSheetForm.value.name;
    const email = this.googleSheetForm.value.email;
    const phone = this.googleSheetForm.value.phone;
    const message = this.googleSheetForm.value.message;

    this.changeLoad();

    if (this.googleSheetForm.invalid) {
      this.invalidAlert();
      this.changeLoad();
      return;
    }
    this.googleSheetForm.disable();

    this.service.createSheet(name, email, phone, message).subscribe({
      next: () => {
        this.googleSheetForm.reset();
        this.successAlert();
      },
      error: (error) => {
        console.log(error);
        this.errorAlert();
      },
      complete: () => {
        this.googleSheetForm.enable();
        this.changeLoad();
      },
    });
  }

  invalidAlert() {
    Swal.fire({
      html:
        ' <div class="alert__ctn">' +
        '<div class="icon__ctn invalid"><i class="fa-solid fa-triangle-exclamation"></i></div>' +
        '<p class="alert__title invalid">Form is not filled</p>' +
        '<p class="alert__message invalid">Please fill in the name and message</p>' +
        '</div>',
      confirmButtonColor: 'var(--pink)',
    });
  }

  successAlert() {
    Swal.fire({
      html:
        ' <div class="alert__ctn">' +
        '<div class="icon__ctn success"><i class="fa-solid fa-envelope"></i></div>' +
        '<p class="alert__title success">Success</p>' +
        '<p class="alert__message success">Message send Successfully</p>' +
        '</div>',
      confirmButtonColor: 'var(--orange)',
    });
  }

  errorAlert() {
    Swal.fire({
      html:
        ' <div class="alert__ctn">' +
        '<div class="icon__ctn error"><i class="fa-solid fa-server"></i></i></div>' +
        '<p class="alert__title error">Sorry...</p>' +
        '<p class="alert__message error">There is a problem with our server</p>' +
        '</div>',
      confirmButtonColor: 'var(--pink)',
    });
  }
}
