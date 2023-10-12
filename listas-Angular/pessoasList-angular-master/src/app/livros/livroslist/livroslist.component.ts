import { Component, inject } from '@angular/core';
import { Livros } from '../livros';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LivroService } from 'src/app/services/livros/livro.service';

@Component({
  selector: 'app-livroslist',
  templateUrl: './livroslist.component.html',
  styleUrls: ['./livroslist.component.scss']
})
export class LivroslistComponent {
  lista: Livros[] = [];

  livroSelecionadoParaEdicao: Livros = new Livros();
  indiceSelecionadoParaEdicao!: number;

  modalService = inject(NgbModal);
  livroService = inject(LivroService);

  constructor() {

    this.listAll();
    //this.exemploErro();

  }


  listAll() {

    this.livroService.listAll().subscribe({
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

    this.livroService.exemploErro().subscribe({
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
    this.livroSelecionadoParaEdicao = new Livros();

    this.modalService.open(modal, { size: 'sm' });
  }


  editar(modal: any, livro: Livros, indice: number) {
    this.livroSelecionadoParaEdicao = Object.assign({}, livro); //clonando o objeto se for edição... pra não mexer diretamente na referência da lista
    this.indiceSelecionadoParaEdicao = indice;

    this.modalService.open(modal, { size: 'sm' });
  }


  addOuEditarLivro(livro: Livros) {

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
    this.livroService.delete(id).subscribe({
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
