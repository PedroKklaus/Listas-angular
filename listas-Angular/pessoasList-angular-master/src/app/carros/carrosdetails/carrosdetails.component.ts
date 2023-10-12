import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carro } from '../carros';
import { CarroService } from 'src/app/services/carros/carro.service';

@Component({
  selector: 'app-carrosdetails',
  templateUrl: './carrosdetails.component.html',
  styleUrls: ['./carrosdetails.component.scss']
})
export class CarrosdetailsComponent {
  @Input() carro: Carro = new Carro();
  @Output() retorno = new EventEmitter<Carro>();

  carroService = inject(CarroService);

  constructor() {

  }

  salvar() {
    if (this.carro.id > 0) {
      this.carroService.update(this.carro).subscribe({
        next: carro => { // QUANDO DÁ CERTO
          this.retorno.emit(carro);
        },
        error: erro => { // QUANDO DÁ ERRO
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    } else {
      this.carroService.save(this.carro).subscribe({
        next: carro => {
          this.retorno.emit(carro);
        },
        error: erro => {
          alert('Exemplo de tratamento de erro/exception! Observe o erro no console!');
          console.error(erro);
        }
      });
    }
  }
  deletar() {
    this.carroService.delete(this.carro.id).subscribe({
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
