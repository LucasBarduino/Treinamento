import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  nome = '';
  telefone = '';
  contatos = signal<{ nome: string; telefone: string }[]>([]);

  adicionar() {
    if (this.nome && this.telefone) {
      this.contatos.update(lista => [...lista, { nome: this.nome, telefone: this.telefone }]);
      this.nome = '';
      this.telefone = '';
    }
  }
}