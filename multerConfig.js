const multer = require('multer');

let DIR = './server/upload';
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try{
            console.log(req.path);
            if(req.params.type == "room"){
                DIR = './upload/room_pictures';
            }else if(req.path == "/message-picture")
                DIR = "./upload/message_pictures";
            else{
                DIR = './upload/';
            }
            cb(null, DIR);
        }catch{
            cb(null, DIR);
        }
     
    },
    filename: (req, file, cb) => {
      if(req.path == "/message_piture")
         cb(null, file.fieldname + '-' + Math.random() + "-" + Date.now() + '.' + "jpg");
      else
         cb(null, file.fieldname + '-' + Date.now() +  '.' + "jpg");
    }
});
 
let upload = multer({storage: storage});

module.exports = upload;