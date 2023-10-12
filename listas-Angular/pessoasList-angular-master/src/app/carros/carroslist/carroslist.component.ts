import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Carro } from '../carros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarroService } from 'src/app/services/carros/carro.service';

@Component({
  selector: 'app-carroslist',
  templateUrl: './carroslist.component.html',
  styleUrls: ['./carroslist.component.scss']
})
export class CarroslistComponent {
  lista: Carro[] = [];

  carroSelecionadaParaEdicao: Carro = new Carro();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  carroService = inject(CarroService);

  constructor() {

    this.listAll();
    //this.exemploErro();

  }


  listAll() {

    this.carroService.listAll().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }

  exemploErro() {

    this.carroService.exemploErro().subscribe({
      next: lista => { // QUANDO DÁ CERTO
        this.lista = lista;
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });

  }


  adicionar(modal: any) {
    this.carroSelecionadaParaEdicao = new Carro();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, carro: Carro, indice: number) {
    this.carroSelecionadaParaEdicao = Object.assign({}, carro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }

  addOuEditarCarro(carro: Carro) {

    this.listAll();

    /*

    if (this.pessoaSelecionadaParaEdicao.id > 0) { //MODO EDITAR
      this.lista[this.indiceSelecionadoParaEdicao] = pessoa;
    } else {
      pessoa.id = 99;
      this.lista.push(pessoa);
    }
    */

    this.modalService.dismissAll();

  }

  deletar(id: number) {
    this.carroService.delete(id).subscribe({
      next: retorno => { // QUANDO DÁ CERTO
        this.listAll();
      },
      error: erro => { // QUANDO DÁ ERRO
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }

}
