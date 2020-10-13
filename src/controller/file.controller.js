import S3Store from '../helper/fileUpload';
import { successResponse, errorResponse } from '../helper';

export const uploadAssets = async (req, res) => {
  try {
    const file = req.file;
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>fileobj",file);
    if (!file) {
      throw new Error('file not provided');
    }
    const s3Store = new S3Store();
    const link = await s3Store.createTextFile(file);
    if (!link) {
      throw new Error('Link not Returned');
    }
    return successResponse(req, res, link);
  } catch (error) {
    return errorResponse(req, res, error.message)
  }
}