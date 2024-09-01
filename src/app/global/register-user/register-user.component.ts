import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  registroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {
    this.registroForm = this.fb.group({
      person_name: ['', [Validators.required]],
      user_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: [''],
      cpf: ['', [Validators.pattern(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/)]],
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {}

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirm_password = formGroup.get('confirm_password')?.value;
    if (password !== confirm_password) {
      formGroup.get('confirm_password')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirm_password')?.setErrors(null);
    }
  }

  registrar() {
    if (this.registroForm.valid) {
      // Handle registration logic here
      console.log('Form Submitted', this.registroForm.value);
      this.modalService.dismissAll();
    }
  }
}
