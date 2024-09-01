import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../service/auth.service';
import { DialogCommunicationService } from '../service/DialogCommunicationService';
import { ModalAnimationsComponent } from '../components/modal-animations/modal-animations.component';
import { RegisterUserComponent } from '../register-user/register-user.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private dialogClosedSubscription: Subscription = new Subscription();
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService,
    private modalService: NgbModal,
    private dialogCommunicationService: DialogCommunicationService
  ) {
    this.loginForm = this.fb.group({
      user_name: ['', [Validators.required, Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {
    this.dialogClosedSubscription = this.dialogCommunicationService.dialogClosed$.subscribe(() => {
      this.closeModal();
    });
  }

  ngOnDestroy(): void {
    if (this.dialogClosedSubscription) {
      this.dialogClosedSubscription.unsubscribe();
    }
  }

  openModal() {
    this.modalService.open(ModalAnimationsComponent, { centered: true });
  }

  openRegisterUser() {
    const modalRef = this.modalService.open(RegisterUserComponent, { 
      centered: true, 
      windowClass: 'custom-modal' // Adiciona a classe customizada ao modal
    });
  }
  
  closeModal() {
    // You might need to handle this depending on how you are opening the modal
    // ng-bootstrap modals usually don't require a close method on the component itself
  }

  onSubmit() {
    const credentials = this.loginForm.value;

    if (this.loginForm.valid) {
      const modalRef = this.modalService.open(ModalAnimationsComponent, { centered: true });

      this.auth.login(credentials).subscribe(
        (user) => {
          setTimeout(() => {
            modalRef.close();
            this.router.navigateByUrl('/dashboard');
          }, 3000);
        },
        (err) => {
          modalRef.close();
          alert(err.error.errors[0]);
        }
      );
    }
  }
}