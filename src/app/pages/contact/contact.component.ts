import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ContactSheetApiService } from 'src/app/service/contact-sheet-api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
})
export class ContactComponent implements OnInit {
  googleSheetForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ContactSheetApiService
  ) {
    this.googleSheetForm = this.formBuilder.group({
      name: formBuilder.control(''),
      email: formBuilder.control(''),
      phone: formBuilder.control(0),
      message: formBuilder.control(''),
    });
  }

  ngOnInit(): void {}

  public onSubmit() {
    console.log(this.googleSheetForm.value);

    const name = this.googleSheetForm.value.name;
    const email = this.googleSheetForm.value.email;
    const phone = this.googleSheetForm.value.phone;
    const message = this.googleSheetForm.value.message;

    this.service.createSheet(name, email, phone, message).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
