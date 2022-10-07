import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { NotificationManager } from 'react-notifications'
import manipulaDate from '../../date/date'

function bordadosPdf(bordadosDoMes, totalBodados) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs

  if(bordadosDoMes.length === 0){
    NotificationManager.warning('Ainda não tem bordado cadastrado para que seja gerado o PDF', 'Atenção!')
    return
  }
  const reportTitle = [
    {
      text: [
        {text: 'Raquel Gomes Bordados\n',  fontSize: 25},
        {text: `CNPJ: 45.476.020/0001-71\n`, fontSize: 10},
        {text: `Telefone: (16) 99353-0267\n`, fontSize: 10},
        {text: `Endereço: Rua: francisco Carlos, 84 - Jardim Montreal Sertãozinho/SP\n`, fontSize: 10},
      ],
      margin:[15, 20, 0, 0], // left, top, right, bottom
    },
    
  ]

  const dadosBordado = bordadosDoMes.map((bordado) => {
    return [
      { text: bordado.cliente, style: 'tableHeader', fontSize: 10, margin: [0, 0, 0, 2] },
      { text: bordado.tipo, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment:'center' },
      { text: bordado.qtd_peca, style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment:'center' },
      { text: bordado.valor_unit.toFixed(2), style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment:'center' },
      { text: bordado.total_peca.toFixed(2), style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment:'center' },
    ]
  })

  const reportDetails = [
    {
      table: {
        headerRows: 1,
        widths: ['*', '*', '*', '*', '*'],
        body: [
          [
            { text: 'Cliente', style: 'tableHeader', fontSize: 10},
            { text: 'Tipo Bordado', style: 'tableHeader', fontSize: 10, alignment:'center' },
            { text: 'Qtd Peça', style: 'tableHeader', fontSize: 10, alignment:'center' },
            { text: 'Valor Unit', style: 'tableHeader', fontSize: 10, alignment:'center' },
            { text: 'Total', style: 'tableHeader', fontSize: 10, margin: [0, 2, 0, 2], alignment:'center' },
            
          ], 
          ...dadosBordado

        ]        
      },
      
      layout: 'lightHorizontalLines',
    }
  ]
  
  function Rodape(currentPage, pageCount) {
    return [
      {
        text: currentPage + ' / ' + pageCount,
        alignment: 'right',
        fontSize: 9,
        bold: true,
        margin: [0, 0, 20, 0]
      },
      {
        text: manipulaDate(4),
        alignment: 'left',
        fontSize: 9,
        bold: true,
        margin: [20, 0, 0, ]
      }
    ]
  }

  const docDefinitions = {
    pageSize: 'A4',
    pageMargins: [15, 150, 15, 40],

    header: [reportTitle, {text: 'Bordados referente ao mês: ' + bordadosDoMes[0].mes, alignment: 'center', fontSize: 14, margin: [15,20,0,0]}],
    content: [reportDetails, {text: 'Total R$ ' + totalBodados, alignment: 'right', margin: [0,50,20,0], fontSize: 30}],      
    footer: Rodape
  }

  pdfMake.createPdf(docDefinitions).print() //-- faz o download direto
}

export default bordadosPdf 