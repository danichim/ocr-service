let fs = require('fs'),
    PDFParser = require("pdf2json");

let pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    console.log(pdfData);
    fs.writeFile("./test.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF('./core/ocr-reader/mock-pdf-list/TransportOrder3583209-2607127.pdf');



// import { PdfReader }  from 'pdfreader';

// var rows = {}; // indexed by y-position

// function printRows() {
//   Object.keys(rows) // => array of y-positions (type: float)
//     .sort((y1, y2) => parseFloat(y1) - parseFloat(y2)) // sort float positions
//     // .forEach((y) => console.log((rows[y] || []).join('')));
// }

// new PdfReader().parseFileItems('./core/ocr-reader/mock-pdf-list/TransportOrder3583209-2607127.pdf', function(err, item){
//   // console.log(err);
//   if (err) throw new Error(err.data)

//   console.log(item);
//   if (!item || item.page) {
//     // end of file, or page
//     printRows();
//     // console.log('PAGE:', item.page);
//     rows = {}; // clear rows for next page
//   }
//   else if (item.text) {
//     // console.log(item.text);
//     // accumulate text items into rows object, per line
//     (rows[item.y] = rows[item.y] || []).push(item.text);
//   }
// });



// /* Input a pdf file, outputs the pdf as an object */
// function parsePdf(pdf:string) {
//   console.log(pdf);
// }




// export { parsePdf };