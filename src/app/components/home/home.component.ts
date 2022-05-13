import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/services/modal.service';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public servPromocion: PromocionService,
              public modalServ: ModalService,
              private route: Router) { 
                // Ocultamos las opciones en el header de Producto y Promocion
    servPromocion.showPromotion = false;
  }

  ngOnInit(): void {
  }

  verPromociones() {
    this.modalServ.showModal('loader');
    setTimeout(()=>{
      this.servPromocion.showPromotion = true;
      this.modalServ.hideModal();
      this.route.navigateByUrl('/promociones');
    }, 900);
  }
}
