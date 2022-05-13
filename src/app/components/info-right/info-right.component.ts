import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-info-right',
  templateUrl: './info-right.component.html',
  styleUrls: ['./info-right.component.css']
})
export class InfoRightComponent implements OnInit {

  @Input ()show: boolean; 
  @Input ()title: string = ''; 
  @Input ()tipo: string = ''; 
  @Output()hide: EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  hideModal() { 
    document.body.classList.remove('overflow');
    this.hide.emit(false);
  }

}
