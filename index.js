
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';
var userData;
 inquirer.prompt([
    {
      name :"url",
      message: 'Enter your url : ',
      type: 'input'
   }])

    .then(function(answer){
      console.log(answer);
      const urly=answer.url;
      console.log(urly);
      fs.writeFile("url.txt",JSON.stringify(urly, null, 2),(err)=>{
        if (err) throw err;
        console.log("File has been saved");
      var qr_svg = qr.image(urly);
      qr_svg.pipe(fs.createWriteStream("qr_img3.png"));
     
    });
    });

    
    