import { Component, inject } from '@angular/core';
import { Pessoa } from '../pessoa';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoalist',
  templateUrl: './pessoalist.component.html',
  styleUrls: ['./pessoalist.component.scss']
})
export class PessoalistComponent {
  lista: Pessoa[] = [];

  pessoaSelecionadaParaEdicao: Pessoa = new Pessoa();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  pessoaService = inject(PessoaService);

  constructor() {
    this.listAll();
  }


  listAll() {

    this.pessoaService.listAll().subscribe({
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

    this.pessoaService.exemploErro().subscribe({
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
    this.pessoaSelecionadaParaEdicao = new Pessoa();

    this.modalService.open(modal, { size: 'sm' });
  }

  editar(modal: any, pessoa: Pessoa, indice: number) {
    this.pessoaSelecionadaParaEdicao = Object.assign({}, pessoa); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }


  addOuEditarPessoa(pessoa: Pessoa) {

    this.listAll();

    /*

    if (this.pessoaSelecionadaParaEdicao.id > 0) { //MODO EDITAR
      this.lista[this.indiceSelecionadoParaEdicao] = pessoa;
    } else {
      pessoa.id = 99;
      this.lista.push(pessoa);
    }
    */
  }


  deletar(id: number) {
    this.pessoaService.delete(id).subscribe({
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

