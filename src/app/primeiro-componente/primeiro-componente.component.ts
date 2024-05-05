import { Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  OnInit,
  SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.css'
})
export class PrimeiroComponenteComponent implements OnInit, OnChanges {
  @Input() valor: boolean = false; /* filho recebe do pai via template. Inicia com false. Nao deve ser alterado no filho*/
                                   /* pai usa [property binding] para enviar para o filho*/
  @Input() valorNovo!: string;                      
  
  nome: string = 'Controle de Cidades';

  @Output() tarefa = new EventEmitter<boolean>(); /* filho emite evento para o pai*/
                                                 /* pai usa (event binding) para capturar o evento*/


  /*Preenchido pelo app.component (pai)*/
  @Input() menuText!: string;

   /*Altera a variavel do botao*/
   exibir=false;


   mostrarComplemento:boolean = false;


   //Filho envia evento para o pai
  ngOnChanges(): void {
    if(this.valor)
      //this.tarefa.emit(true);
      setTimeout(()=> {
        this.tarefa.emit(true);  //@Output
      },1000);
  }

  ngOnInit(): void {
  }

  public getNome(): string{
    return this.nome;
  }


  public mostrar(): void{
    if(this.mostrarComplemento===true)
      this.mostrarComplemento=false;
    else
      this.mostrarComplemento=true;
  }

}
