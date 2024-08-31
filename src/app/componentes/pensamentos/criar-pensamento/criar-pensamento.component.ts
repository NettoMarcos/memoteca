import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo:'',
    autoria: '',
    modelo: 'modelo1'
  }
  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    
  }

  cancelar(){
    
  }

}
