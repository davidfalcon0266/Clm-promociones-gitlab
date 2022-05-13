import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.css']
})
export class PromocionesComponent implements OnInit {

  constructor(public servPromocion: PromocionService,
              private modalServ: ModalService,
              private route: Router) { 
              servPromocion.showPromotion = true;
  }

  ngOnInit(): void {
  }
  
  verProducto() {
    this.modalServ.showModal('loader');
    setTimeout(()=>{
      this.modalServ.hideModal();
      this.servPromocion.showProduct = true;
      this.route.navigateByUrl('/producto');
    }, 900);
  }
}
