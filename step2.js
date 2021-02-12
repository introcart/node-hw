const fs = require('fs');
const axios = require('axios');

function cat(path){
  fs.readFile(path, 'utf8', (err,data) =>{
    if (err){
      console.error('Error reading ${path}: ${err}');
      process.exit(1);
    }
    console.log(data);
  });
}



async function webcat(url) {
  try {
    let resp = await axios.get(url);
    console.log(resp.data);
  } catch (err) {
    console.error(`Error fetching ${url}: ${err}`);
  }
}

path = process.argv[2];

if (path.slice(0,4) === 'http') {
  webcat(path);
} else {
  cat(path)
}