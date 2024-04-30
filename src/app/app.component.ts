
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

  /*Para o Materialize*/
  /*ViewChild: pai acessa o component filho dentro da classe */
  @ViewChild('mobile') sideNav?: ElementRef;

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    M.Sidenav.init(this.sideNav?.nativeElement);
  }
  title = 'projeto';
}
