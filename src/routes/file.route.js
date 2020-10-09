import express from 'express';
import uploadAssets from '../controller/file.controller'; 
// import S3Store from '../helper/fileUpload';
// import validate from 'express-validation';
// import multer from 'multer';

const router = express.Router();
// const uploads = upload.fields([{ name: 'file', maxCount: 1 }]);

// router.post(
//   '/upload',
//   uploads,
//   campaignController.uploadAssets,
// );

router.post('/file',uploadAssets());

module.exports = router;
