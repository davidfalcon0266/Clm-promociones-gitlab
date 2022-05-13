import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formG: FormGroup;
  constructor(public formB: FormBuilder,
              private router: Router,
              private authServ: AuthService,
              public modalServ: ModalService,
              public servPromocion: PromocionService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formG = this.formB.group({
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    let user = this.formG.value;
    this.modalServ.showModal('loader');
    setTimeout(()=>{
      this.servPromocion.showPromotion = true;
      this.modalServ.hideModal();
      this.router.navigateByUrl('promociones');
      this.authServ.login(user);
    }, 1500);
  }

}
