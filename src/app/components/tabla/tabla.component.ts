import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  juegos = [
    {
      id: '1',
      nombre: 'Grand Theft Auto IV',
      precio: '10',
      url: 'https://www.infobae.com/new-resizer/zqu-fqtEtsSTGQiN0WtCJGAMJpY=/768x432/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11130411/Grand-theft-auto-4.jpg',
    },
    {
      id: '2',
      nombre: 'Super Mario Galaxy',
      precio: '15',
      url: 'https://www.infobae.com/new-resizer/qKjkwgv7B2J_E8z_Lcti5cj7JEQ=/768x432/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11132017/Super-Mario-Galaxy.jpg',
    },
    {
      id: '3',
      nombre: 'The Legend of Zelda',
      precio: '12',
      url: 'https://www.infobae.com/new-resizer/qhV22ytTts1Xyn_weZGAyBYmKlg=/768x341/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11140157/The-Legend-of-Zelda-Breath-of-the-Wild.jpg',
    },
    {
      id: '4',
      nombre: 'Halo',
      precio: '20',
      url: 'https://www.infobae.com/new-resizer/j4ivbB1U5fLYqQUwwd21sQ-nP7s=/768x576/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11145628/Halo-Combat-Evolved.jpg',
    },
    {
      id: '5',
      nombre: 'Uncharted 2',
      precio: '13',
      url: 'https://www.infobae.com/new-resizer/fJfH7STO8QwjCWSCEwBaXXDUMBs=/768x432/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11152944/Uncharted-2.jpg',
    },
  ];

  filtro = 0;
  minPrecio: number = 10;
  maxPrecio: number = 20;

  filtroJuegos = this.juegos;

  runFiltro() {
    console.log('Filtro se aplico');
    this.filtroJuegos = this.juegos.filter(
      (juego) =>
        parseInt(juego.precio) >= this.minPrecio &&
        parseInt(juego.precio) <= this.maxPrecio
    );
  }

  visualizar: any;
  ver(id: any) {
    this.visualizar = id;
  }
}
