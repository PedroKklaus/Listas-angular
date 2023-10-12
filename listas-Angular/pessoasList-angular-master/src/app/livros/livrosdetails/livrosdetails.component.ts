import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livros } from '../livros';
import { LivroService } from 'src/app/services/livros/livro.service';

@Component({
  selector: 'app-livrosdetails',
  templateUrl: './livrosdetails.component.html',
  styleUrls: ['./livrosdetails.component.scss']
})
export class LivrosdetailsComponent {

  @Input() livro: Livros = new Livros();
  @Output() retorno = new EventEmitter<Livros>();

  livroService = inject(LivroService);

  constructor() {

  }

  salvar() {
    if (this.livro.id > 0) {
      this.livroService.update(this.livro).subscribe({
        next: livro => { // QUANDO DÁ CERTO
          this.retorno.emit(livro);
        },
        error: erro => { // QUANDO DÁ ERRO
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.livroService.save(this.livro).subscribe({
        next: pessoa => {
          this.retorno.emit(pessoa);
        },
        error: erro => {
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
  deletar() {
    this.livroService.delete(this.livro.id).subscribe({
      next: livro => {
        this.retorno.emit(livro);
      },
      error: erro => {
        alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
        console.error(erro);
      }
    });
  }
}
