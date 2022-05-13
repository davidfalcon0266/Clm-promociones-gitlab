import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  showModalRight: boolean = false;
  titleModal: string = '';
  tipoModal: string = '';
  
  constructor(private modalServ: ModalService,
              private route: Router,
              public servPromocion: PromocionService) { 
                servPromocion.showPromotion = true;
                servPromocion.showProduct = true;
              }

  ngOnInit(): void {
  }

  verProducto() {
    this.modalServ.showModal('loader');
    setTimeout(()=>{
      this.modalServ.hideModal();
      this.route.navigateByUrl('/producto');
    }, 2000);
  }

  showModal(title: string, tipo: string) {
    document.body.classList.add('overflow');
    this.showModalRight = true;
    this.titleModal = title;
    this.tipoModal = tipo;
  }

  ocultarModal(e: boolean) {
    this.showModalRight = e;
  }

}
