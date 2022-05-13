import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formG: FormGroup;
  password: boolean = false;
  showModalRight: boolean = false;
  titleModal: string = '';
  tipoModal: string = '';
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
      nombre: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(5)]],
      password2: [null, [Validators.required, Validators.minLength(5)]],
      terminos: [false, [Validators.required]]
    });
  }

  onSubmit() {
    this.validarPassword();
    if (this.password) {
      return;
    }
    let user = this.formG.value;
    this.modalServ.showModal('loader');
    setTimeout(()=>{
      this.servPromocion.showPromotion = true;
      this.modalServ.hideModal();
      this.router.navigateByUrl('/promociones');
      this.authServ.register(user);
    }, 900);
  }

  validarPassword() {
    this.password = false;
    const pws1 = this.formG.value.password;
    const pws2 = this.formG.value.password2;
    if (pws1 !== pws2) {
      this.password = true;
    } else {
      this.password = false;
    }
  }

  showModal(title: string, tipo: string) {
    this.showModalRight = true;
    this.titleModal = title;
    this.tipoModal = tipo;
  }

  ocultarModal(e: boolean) {
    this.showModalRight = e;
  }
}
