import S3Store from '../helper/fileUpload';

export const uploadAssets = async (req, res) => {
  try {
    const file = req.files.file[0];
    if (!file) {
      throw new Error('file not provided');
    }
    const s3Store = new S3Store();
    const link = await s3Store.createTextFile(file);
    if (!link) {
      throw new Error('Link not Returned');
    }
    return successResponse(req, res, data);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
}