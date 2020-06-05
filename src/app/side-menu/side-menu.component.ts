import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { menu } from './menu.model';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input('menu') mainMenu : menu; //El menú que se va a expandir
  @Input('parent') parentMenu : menu; //Referencia al menú padre. Esto para poder hacer links con Bootstsrap y menús colapsables
  @Input() box_name : string; //Nombre que llevará la caja para los menús colapsables

  constructor() {}

  ngOnInit(): void {
  }

  flipIcon(event){
    const icon = event.target.querySelector('i');
    if(icon){
      icon.classList.toggle('fa-rotate-90'); //Agrega la clase para que rote la flecha
    }
  }

}
