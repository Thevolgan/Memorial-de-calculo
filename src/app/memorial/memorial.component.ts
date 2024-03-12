import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Nunito } from 'src/assets/fonts'
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-memorial',
  templateUrl: './memorial.component.html',
  styleUrls: ['./memorial.component.css']
})
export class MemorialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('content',{static:false}) el!: ElementRef
  title = 'Cronograma de Execução';
    
  generatePDF(){
      let doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        hotfixes: ["px_scaling"] 
      });

    //LOGO img
    // (dist horizontal LEFT, dist vertical TOP, width, height)
    //doc.addImage("assets/logo3.png", "PNG", 65, 9, 55,55);  

    //TITULO img
    doc.addImage("assets/logo_top.png", "PNG", 240, 30, 320, 45);
    //CONTEÚDO 1ª TABELA:
    //NOME FANTASIA
    doc.addFileToVFS("Nunito.ttf", Nunito);
    doc.addFont("Nunito.ttf", "Nunito", "Normal");

    //MEMORIAL DE CÁLCULO:
    autoTable(doc, {
      body: [
        [ 
          {content: 'Nome de Fantasia:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1},cellWidth: 85, cellPadding:5}}, 
          {content: 'ENERGIN TECNOLOGIA E INOVAÇÃO DA AMAZÔNIA', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding:5}}, 
        ]
      ],
      //tableWidth: 1010,
      startY: 115, //+17
      theme: 'grid',
    })

    //RAZÃO SOCIAL
    autoTable(doc, {
      body: [
        [ 
          {content: 'Razão Social:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1},cellWidth: 65, cellPadding: 5}}, 
          {content: 'ENERGIN DA AMAZONIA LTDA', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding:5}}, 
        ]
      ],
      //tableWidth: 1010,
      startY: 132, //+17
      theme: 'grid',
    })

    //CNPJ & OPTANTE
    autoTable(doc, {
      body: [
        [ 
          {content: 'CNPJ:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 40, cellPadding:5}}, 
          {content: '05.682.859/0001-41', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellWidth: 268, cellPadding:5}}, 
          {content: 'Optante pelo SIMPLES?', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 100, cellPadding:5}}, 
          {content: '(NÃO)', styles: {fontSize: 5.5, fontStyle: 'normal', lineColor: false, textColor: [0,0,0], lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding:5}}, 
        ]
      ],
      startY: 149,
      theme: 'grid',
    })

    //ENDEREÇO
    autoTable(doc, {
      body: [
        [ 
          {content: 'Endereço:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 52,cellPadding:5}}, 
          {content: 'Rua Professor Castelo Branco, n. 05, Conjunto Jardim Yolanda', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding:5}}, 
        ]
      ],
      startY: 166,
      theme: 'grid',
    })

     //BAIRRO & CIDADE
     autoTable(doc, {
      body: [
        [ 
          {content: 'Bairro:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 40, cellPadding:5}}, 
          {content: 'Parque Dez de Novembro', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellWidth: 268, cellPadding:5}}, 
          {content: 'Cidade:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 40, cellPadding:5}}, 
          {content: 'Manaus', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding:5}}, 
        ]
      ],
      startY: 183 ,
      theme: 'grid',
    })
    
     //CEP & EMAIL
     autoTable(doc, {
      body: [
        [ 
          {content: 'CEP:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 33, cellPadding:5}}, 
          {content: '69055-090', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellWidth: 275, cellPadding:5}}, 
          {content: 'E-mail:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 35, cellPadding:5}}, 
          {content: 'energin.amazonia@gmail.com', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding:5}}, 
        ]
      ],
      startY: 200,
      theme: 'grid',
    })

     //TELEFONE
     autoTable(doc, {
      body: [
        [ 
          {content: 'Telefone:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 45, cellPadding: 5}}, 
          {content: '(92) 3232-7651', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding: 5}}, 
        ]
      ],
      startY: 217,
      theme: 'grid',
    })

     //BANCO E CONTA
     autoTable(doc, {
      body: [
        [ 
          {content: 'Banco:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 40, cellPadding:5}}, 
          {content: 'SICOOB', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellWidth: 268, cellPadding:5}}, 
          {content: 'Conta Bancária:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1}, cellWidth: 65, cellPadding:5}}, 
          {content: '94.515-3', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding:5}}, 
        ]
      ],
      startY: 234,
      theme: 'grid',
    })

    //NOME E Nº DA AGENCIA
    autoTable(doc, {
      body: [
        [ 
          {content: 'Nome e nº da agência bancária:', styles: {fontSize: 5.5, fontStyle: 'bold', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:1},cellWidth: 120, cellPadding:5}}, 
          {content: '5008', styles: {fontSize: 5.5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:1}, cellPadding:5}}, 
        ]
      ],
      //tableWidth: 1010,
      startY: 251,
      theme: 'grid',
    })

    //TÍTULO CENTRAL
    autoTable(doc, {
      body: [
        [ 
          {content: 'SERVIÇOS EXECUTADOS', styles: {fontSize: 7.5, fontStyle: 'bold', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#FFFFFF', lineWidth:{right: 1, top: 1, left: 1, bottom:1}, cellPadding: 5}}, 
        ]
      ],
      startY: 268,
      theme: 'grid',
    })
    
    // SEGUNDO TÍTULO CENTRAL
    autoTable(doc, {
      body: [
        [ 
          {content: 'LOCAL: Escola Estadual Olga Falcone - Subestação Aérea de 150 kVA', styles: {fontSize: 5.5, fontStyle: 'bold', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#D0CECE', lineWidth:{right: 1, top: 1, left: 1, bottom:1}, cellPadding: 5}}, 
        ]
      ],
      startY: 285,
      theme: 'grid',
    })
    
    // TERCEIRO TÍTULO CENTRAL
    autoTable(doc, {
      body: [
        [ 
          {content: 'RESPONSAVEL TÉCNICO Eng. Eletricista Elson Carvalho Bezerra CREA: 040551677-0', styles: {fontSize: 5.5, fontStyle: 'bold', lineColor: false, valign: 'middle', halign: 'center', textColor: [0,0,0], fillColor: '#D0CECE', lineWidth:{right: 1, top: 1, left: 1, bottom:1}, cellPadding: 5}}, 
        ],
        [
          {content: '01. (ID 53502) SERVIÇOS DE ENGENHARIA ELÉTRICA, Descrição: Contratação de empresa para elaboração de projetos de revisão de rede elétrica, conforme projeto básico', styles: {fontSize: 5.5, fontStyle: 'bold', lineColor: false, valign: 'middle', halign: 'left', textColor: [255,255,255], fillColor: '#595959', lineWidth:{right: 1, top: 1, left: 1, bottom:1}, cellPadding: 5}}, 
        ]
      ],
      startY: 302,
      theme: 'grid',
    })
    
    // TAB GRUPO 1
    autoTable(doc, {
      head: [
        [ 
          {content: '01.01 -', styles: {fontSize: 4.0, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 1, left:1, bottom:0},cellWidth: 48, cellPadding:5}}, 
          {content: 'SERVIÇOS TÉCNICOS ESPECIALIZADOS: Estudos e projetos de energia de alta tensão', styles: {fontSize: 4.0, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 1, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.0, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 1, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'OK', styles: {fontSize: 4.0, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 1, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.0, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 1, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.0, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 1, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.0, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 1, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.0, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 1, top: 1, left:0, bottom:0}, cellPadding:5}}, 
        ]
      ],
      body: [
        [
          {content: 'Referência', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'Descrição do Serviço', styles: {fontSize: 5, fontStyle: 'italic', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: 'Und', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'Quant', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'italic', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: 'Valor', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 60, cellPadding:5}}, 
          {content: 'Total(R$)', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
        [ 
          {content: '01.01.00.001', styles: {fontSize: 5, fontStyle: 'italic', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'ESTUDO PRELIMINAR DE VIABLIDADE DE MANUTENÇÃO PREVENTIVA/CORRETIVA EM UNIDADE DE SUBESTAÇÃO AÉREA OU ABRIGADA.', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: 'UN', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '1,00', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'R$ 10.227,64', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: 'dez mil, duzentos e vinte e setereais e sessenta e quatro centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: 'R$ 10.227,64', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 60, cellPadding:5}}, 
          {content: 'dez mil, duzentos e vinte e setereais e sessenta e quatro centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
      ],
      foot: [
        [ 
          {content: '', styles: {fontSize: 5, fontStyle: 'italic', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'Total Grupo 01:', styles: {fontSize: 7, fontStyle: 'bold', textColor: [255,255,255], fillColor: '#808080', lineColor: false, valign: 'middle', halign:'right', lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: 'R$ 10.227,64', styles: {fontSize: 6.5, fontStyle: 'bold', textColor: [255,255,255], fillColor: '#808080', lineColor: false, valign: 'middle', lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 75, cellPadding:5}}, 
          {content: 'dez mil, duzentos e vinte e setereais e sessenta e quatro centavos', styles: {fontSize: 6.5, fontStyle: 'bold', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
      ],
      startY: 337,
      theme: 'grid',
    })

    autoTable(doc, {
      body: [
        [
          {content: '02. (ID 54876) SERVIÇOS DE MANUTENÇÃO EM SUBESTAÇÃO, Descrição: Contratação de empresa para prestação de serviço de manutenção preventiva em Subestação, com reposição de peças, conforme projeto básico', styles: {fontSize: 5.5, fontStyle: 'bold', lineColor: false, valign: 'middle', halign: 'left', textColor: [255,255,255], fillColor: '#595959', lineWidth:{right: 1, top: 1, left: 1, bottom:1}, cellPadding: 5}}, 
        ]
      ],
      startY: 443,
      theme: 'grid',
    })
    
    // TAB GRUPO 2
    autoTable(doc, {
      head: [
        [ 
          {content: '02.01 -', styles: {fontSize: 4.0, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 48, cellPadding:5}}, 
          {content: 'SERVIÇOS ORDINÁRIOS NA CAPITAL: Manutenção preventiva - subestações aéreas e abrigadas', styles: {fontSize: 4.0, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'OK', styles: {fontSize: 4.0, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
        [
          {content: 'Referência', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'Descrição do Serviço', styles: {fontSize: 5, fontStyle: 'italic', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: 'Und', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'Quant', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'italic', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: 'Valor', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 60, cellPadding:5}}, 
          {content: 'Total(R$)', styles: {fontSize: 5, fontStyle: 'italic',  textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
        [ 
          {content: '03.04.01 -', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#D6DCE4', lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 48, cellPadding:5}}, 
          {content: 'Manutenção Corretiva - Subestação Aérea', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#D6DCE4', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#D6DCE4', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#D6DCE4', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#D6DCE4', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#D6DCE4', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#D6DCE4', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#D6DCE4', lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
      ],
      body: [
        [ 
          {content: '02.01.00.002', styles: {fontSize: 5, fontStyle: 'italic', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'MEDIÇÃO DA RESISTÊNCIA DO ISOLAMENTO, ÔHMICA DOS ROLAMENTOS E DE RELAÇÃO DE TENSÕES DO TRANSFORMADOR, INCLUSO LIMPEZA DOS ISOLADORES', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: 'KVA', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '150,00', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'R$ 15,01', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: 'quinze reais e um centavo', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: 'R$ 2.251,50', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 60, cellPadding:5}}, 
          {content: 'dois mil, duzentos e cinquenta e um reais e cinquenta centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
        [
          {content: '02.01.00.004', styles: {fontSize: 5, fontStyle: 'italic', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'LIMPEZA GERAL DA SUBESTAÇÃO INCLUINDO CUBÍCULO E ÁEREA EXTERNA (VEGETAÇÃO)', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: 'SERV.', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '1,00', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'R$ 1.051,93', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: 'um mil e cinquenta e um reais e noventa e três centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: 'R$ 1.051,93', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 60, cellPadding:5}}, 
          {content: 'um mil e cinquenta e um reais e noventa e três centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
        [
          {content: '02.01.00.007', styles: {fontSize: 5, fontStyle: 'italic', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'MANUTENÇÃO PREVENTIVA COM INSPEÇÃO E AJUSTE DOS TERMINAIS, DOS CABOS E CAIXA DE INSPEÇÃO.', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: 'KVA', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '150,00', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'R$ 19,03', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: 'dezenove reais e três centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: 'R$ 2.854,50', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 60, cellPadding:5}}, 
          {content: 'dois mil, oitocentos e cinquenta e quatro reais e cinquenta centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
            [
              {content: '02.03 -', styles: {fontSize: 4.5, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 48, cellPadding:5}}, 
              {content: 'SERVIÇOS ESPECIAIS NA CAPITAL: Manutenção preventiva - subestações aéreas e abrigadas', styles: {fontSize: 4.5, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
              {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
              {content: 'OK', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
              {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
              {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
              {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
              {content: '', styles: {fontSize: 4.5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
            ],
        [
          {content: '02.03.00.002', styles: {fontSize: 5, fontStyle: 'italic', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'COMPLEMENTO DO NIVEL DO ÓLEO DO TRANSFORMADOR', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: 'L', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '9,00', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'R$ 571,96', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: 'quinhentos e setenta e um reais e noventa e seis centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: 'R$ 5.147,64', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 60, cellPadding:5}}, 
          {content: 'cinco mil, cento e quarenta e sete reais e sessenta e quatro centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
        [
          {content: '02.03.00.009', styles: {fontSize: 5, fontStyle: 'italic', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'COLETA DE AMOSTRA E ANÁLISE NO ÓLEO ISOLANTE DO TRAFO DO TRANSFORMADOR', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: 'SERV.', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '1,00', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: 'R$ 488,33', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: 'quatrocentos e oitenta e oito reais e trinta e três centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: 'R$ 488,33', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 60, cellPadding:5}}, 
          {content: 'quatrocentos e oitenta e oito reais e trinta e três centavos', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ]
      ],
      foot: [
        [ 
          {content: '', styles: {fontSize: 5, fontStyle: 'italic', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:0},cellWidth: 30, cellPadding:5}}, 
          {content: 'Total Grupo 02:', styles: {fontSize: 7, fontStyle: 'bold', textColor: [255,255,255], fillColor: '#808080', lineColor: false, valign: 'middle', halign:'right', lineWidth:{right: 0, top: 0, left:0, bottom:0},cellWidth: 240, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 50, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 105, cellPadding:5}}, 
          {content: 'R$ 11.793,90', styles: {fontSize: 6.5, fontStyle: 'bold', textColor: [255,255,255], fillColor: '#808080', lineColor: false, valign: 'middle', lineWidth:{right: 0, top: 0, left:0, bottom:0}, cellWidth: 75, cellPadding:5}}, 
          {content: 'onze mil, setecentos e noventa e três reais e noventa centavos', styles: {fontSize: 6.5, fontStyle: 'bold', textColor: [255,255,255], fillColor: '#808080', lineColor: false, lineWidth:{right: 1, top: 0, left:0, bottom:0}, cellPadding:5}}, 
        ],
        [
          {content: '', styles: {fontSize: 5, fontStyle: 'italic', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:1, bottom:1},cellWidth: 30, cellPadding:5}}, 
          {content: 'TOTAL', styles: {fontSize: 7, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, valign: 'middle', halign:'right', lineWidth:{right: 0, top: 0, left:0, bottom:1},cellWidth: 240, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:1}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:1}, cellPadding:5}}, 
          {content: '', styles: {fontSize: 5, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 0, top: 0, left:0, bottom:1}, cellWidth: 50, cellPadding:5}}, 
          {content: 'R$', styles: {fontSize: 7, fontStyle: 'normal', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, valign: 'middle', halign: 'left', lineWidth:{right: 0, top: 0, left:1, bottom:1}, cellWidth: 105, cellPadding:5}}, 
          {content: '50.586,53', styles: {fontSize: 7, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, valign: 'middle', lineWidth:{right: 0, top: 0, left:0, bottom:1}, cellWidth: 75, cellPadding:5}}, 
          {content: 'cinquenta mil, quinhentos e oitenta e seis reais e cinquenta e três centavos', styles: {fontSize: 6.5, fontStyle: 'bold', textColor: [0,0,0], fillColor: '#FFFFFF', lineColor: false, lineWidth:{right: 1, top: 0, left:1, bottom:1}, cellPadding:5}}, 

        ]
      ],
      startY: 467,
      theme: 'grid',
    })


    //ASSINATURAS
    doc.addImage('assets/assinatura.png', 'PNG', 160,890,500,110);

    //RODA PÉ
    doc.setTextColor(0, 32, 96);
    doc.addFileToVFS("Nunito.ttf", Nunito);
    doc.addFont("Nunito.ttf", "Nunito", "Normal");
    doc.setFontSize(7.3);
    doc.text('CNPJ: 05.682.859/0001-41', 65, 1070);
    doc.text('Telefone: (92) 3232-7652', 65, 1085);
    doc.text('E-mail: energin.amazonia@gmail.com', 65, 1100);
   

    //BAIXAR O PDF
    window.open(doc.output('bloburl'))
    console.log('clicado');
    
    doc.html(document.body, {
      callback: function (doc) {
      },
      x: 1000,
      y: 10
    });
  }
  
}
