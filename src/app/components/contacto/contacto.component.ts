import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  formG: FormGroup;
  constructor(public formB: FormBuilder,
              public modalServ: ModalService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.formG = this.formB.group({
      nombre: [null, Validators.required],
      email: [null, Validators.required],
      asunto: [null, Validators.required],
      mensaje: [null, [Validators.required, Validators.minLength(5)]],
    });
  }

  onSubmit() {
    this.modalServ.showModal('confirmacion', 'success', this.formG.value.nombre.toUpperCase() +', Te contactaremos lo más pronto posible', 'Gracias por solicitar');
  }
}

