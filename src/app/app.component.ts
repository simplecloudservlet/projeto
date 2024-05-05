
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import * as M from 'materialize-css';

import { AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnInit }
 from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    PrimeiroComponenteComponent,
    SegundoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnInit {

  title = 'projeto';

  /*Para o Materialize*/
  /*ViewChild: pai acessa o component filho dentro da classe */
  @ViewChild('mobile') sideNav?: ElementRef;

  /*ViewChild: pai acessa o component filho dentro da classe */
  @ViewChild('p1') p1!: PrimeiroComponenteComponent;
  @ViewChild('p2') p2!: PrimeiroComponenteComponent;

  /*Altera a variavel do botao*/
  exibir=false;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
 
//pai invoca este metodo quando o filho emite um evento no metodo 'ngOnChanges'
onTarefaEvent(event: boolean) {
  //this.modal.show = event;
  //this.modal.title = 'Janela Modal';
  //this.modal.text = 'Controle de Cidades Visitadas';
  window.alert('Evento ativado');
  console.log('Evento ativado');

}

public cadastrar(): void{
  if(this.exibir==true)
    this.exibir=false;
  else
    this.exibir=true;
}

}
