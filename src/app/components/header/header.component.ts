import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalService } from 'src/app/services/modal.service';
import { PromocionService } from 'src/app/services/promocion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mobile: boolean = false;
  constructor(public servPromocion: PromocionService,
              public authServ: AuthService,
              public modalServ: ModalService) { }

  ngOnInit(): void {
  }

  logout() {
    this.modalServ.showModal('logout', 'warning', '¿Estas seguro que deseas cerrar sesión?', '');
  }

}
