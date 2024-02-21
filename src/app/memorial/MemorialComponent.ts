import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-memorial',
  templateUrl: './memorial.component.html',
  styleUrls: ['./memorial.component.css']
})
export class MemorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('content', { static: false }) el!: ElementRef;
  title = 'Cronograma de Execução';

  generatePDF() {
    html2canvas(document.body).then(canvas => {
      const contentDataUrl = canvas.toDataURL('image/png');

      let doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        hotfixes: ["px_scaling"]
      });

      var width = doc.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      doc.addImage(contentDataUrl, 'PNG', 0, 0, width, height);
      doc.save("Memorial de Cálculo");
    });


  }

}
