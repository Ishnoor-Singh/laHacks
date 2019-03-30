async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    // const [result] = await client.labelDetection('./1.jpg');
    const [result] = await client.labelDetection('https://i.ytimg.com/vi/3AfpFkrS7Lw/hqdefault.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }

  quickstart()