import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  show: boolean = false;
  tipoModal: string = '';
  icono: string = 'check';
  titulo: string = 'Usuario o contraseña incorrecta..!';
  subtitulo: string = 'Por favor verifique';


  constructor() { }

  showModal(tipo: string, icono: string = '', titulo: string='', subtitulo: string='') {
    this.show = true;
    this.tipoModal = tipo;
    this.icono = icono;
    this.titulo = titulo;
    this.subtitulo = subtitulo;
  }
  hideModal() {
    this.show = false;
    this.tipoModal = '';
  }
}
