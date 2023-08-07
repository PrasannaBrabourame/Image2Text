process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const Tesseract = require('tesseract.js');

const imagePath = './img1.png'; // Replace with the path to your image file

Tesseract.recognize(
    imagePath,
    'eng', // Language code for English
    {
        logger: info => console.log(info) // Optional logger function to view progress and logs
    }
).then(({ data: { text } }) => {
    console.log('Extracted Text:', text);
}).catch(error => {
    console.error('Error:', error);
});
