import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-juegos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles-juegos.component.html',
  styleUrl: './detalles-juegos.component.css'
})
export class DetallesJuegosComponent {

  ruta = inject(ActivatedRoute)

  juegos = [
    {
      id: "1",
      nombre: 'Grand Theft Auto IV',
      precio: "10",
      url: "https://www.infobae.com/new-resizer/zqu-fqtEtsSTGQiN0WtCJGAMJpY=/768x432/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11130411/Grand-theft-auto-4.jpg",
      compra: "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638367&hvpos=&hvnetw=g&hvrand=2164173814401041988&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9069516&hvtargid=kwd-10573980&hydadcr=2246_13468515&gad_source=1"
    },
    {
      id: "2",
      nombre: 'Super Mario Galaxy',
      precio: "15",
      url: "https://www.infobae.com/new-resizer/qKjkwgv7B2J_E8z_Lcti5cj7JEQ=/768x432/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11132017/Super-Mario-Galaxy.jpg",
      compra: "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638367&hvpos=&hvnetw=g&hvrand=2164173814401041988&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9069516&hvtargid=kwd-10573980&hydadcr=2246_13468515&gad_source=1"
    },
    {
      id: "3",
      nombre: 'The Legend of Zelda',
      precio: "12",
      url: "https://www.infobae.com/new-resizer/qhV22ytTts1Xyn_weZGAyBYmKlg=/768x341/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11140157/The-Legend-of-Zelda-Breath-of-the-Wild.jpg",
      compra: "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638367&hvpos=&hvnetw=g&hvrand=2164173814401041988&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9069516&hvtargid=kwd-10573980&hydadcr=2246_13468515&gad_source=1"
    },
    {
      id: "4",
      nombre: 'Halo',
      precio: "20",
      url: "https://www.infobae.com/new-resizer/j4ivbB1U5fLYqQUwwd21sQ-nP7s=/768x576/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11145628/Halo-Combat-Evolved.jpg",
      compra: "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638367&hvpos=&hvnetw=g&hvrand=2164173814401041988&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9069516&hvtargid=kwd-10573980&hydadcr=2246_13468515&gad_source=1"
    },
    {
      id: "5",
      nombre: 'Uncharted 2',
      precio: "13",
      url: "https://www.infobae.com/new-resizer/fJfH7STO8QwjCWSCEwBaXXDUMBs=/768x432/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/07/11152944/Uncharted-2.jpg",
      compra: "https://www.amazon.com/?&tag=googleglobalp-20&ref=pd_sl_7nnedyywlk_e&adgrpid=159651196451&hvpone=&hvptwo=&hvadid=675114638367&hvpos=&hvnetw=g&hvrand=2164173814401041988&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9069516&hvtargid=kwd-10573980&hydadcr=2246_13468515&gad_source=1"
    }
  ]

  juego:any
  id:any
  ngOnInit() {
    this.ruta.params.subscribe(p => {
      this.id = p['idJuegos']

      this.juegos.forEach(element => {
        if(element.id == this.id){
          this.juego = element
                    
        }
      })
    })
  }

}
