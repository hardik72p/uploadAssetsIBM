import express from 'express';
import * as fileController from '../controller/file.controller';
import multer from 'multer';
// import S3Store from '../helper/fileUpload';
// import validate from 'express-validation';
// import multer from 'multer';

const router = express.Router();
const upload = multer();
console.log(">>>>>>>>>>>>>>>>>>",__dirname + '/uploads/images');
const uploads = upload.fields([{ name: 'file', maxCount: 1 }]);
// const uploads = multer({dest: __dirname + '/uploads/images'});


// router.post(
//   '/upload',
//   uploads,
//   campaignController.uploadAssets,
// );
const hardik=(req,res)=>{
  console.log("hihihihihihihihi",req.file,req.body.hardik);
}

router.post('/file',uploads,fileController.uploadAssets);

module.exports = router;
