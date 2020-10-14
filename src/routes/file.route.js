import express from 'express';
import * as fileController from '../controller/file.controller';
import multer from 'multer';

const router = express.Router();
// const upload = multer();
// const uploads = upload.fields([{ name: 'file', maxCount: 1 }]);
// const uploads = multer({dest: __dirname + '/uploads/images'});

const upload = multer();

router.post('/file',upload.single('file'),fileController.uploadAssets);

module.exports = router;
