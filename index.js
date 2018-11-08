var Tesseract = require('tesseract.js');

var job1 = Tesseract.recognize('./img1.png');

job1.progress(message => console.log(message));

job1.catch(err => console.error(err));

job1.then(result => console.log(result));

job1.finally(resultOrError => console.log(resultOrError));