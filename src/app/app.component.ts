import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { menu } from './side-menu/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proyecta';
  sidemenu : menu; //Tipo menú
  constructor(private http : HttpClient) {}

  ngOnInit(){
    this.fetchData();
  }

  private fetchData(){
    this.http.get<menu>('http://65.99.252.132:7431/menu') //Esto es para saber que se espera un objeto de tipo Menú, según la interfaz declarada en side-menu/menu.model.ts
    .subscribe( responseData => {
      console.log(responseData);
      this.sidemenu = responseData; //Se asigna la respuesta a lo que será el menú
      /*  El módulo de side-menu es quien se encarga de parsear el menú */
    } );
  }
}
