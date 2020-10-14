require('dotenv').config();

const myCOS = require('ibm-cos-sdk');

export default class S3Store {
  constructor() {
    //  Credentials for configuration
    this.config = {
      endpoint: process.env.END_POINT,
      apiKeyId: process.env.API_KEY_ID,
      ibmAuthEndpoint: 'https://iam.cloud.ibm.com/identity/token',
      serviceInstanceId: process.env.SERVICE_INSTANCE_ID,
    }
    this.cosClient = new myCOS.S3(this.config);
  }
  //  Credentials for configuration
  // var config = {
  //   endpoint: process.env.END_POINT,
  //   apiKeyId: process.env.API_KEY_ID,
  //   ibmAuthEndpoint: 'https://iam.cloud.ibm.com/identity/token',
  //   serviceInstanceId: process.env.SERVICE_INSTANCE_ID,
  // };

  // var cosClient = new myCOS.S3(config);

  //  Create New Bucket
  async newBucket(bucketName) {
    console.log(`Creating new bucket: ${bucketName}`);
    return this.cosClient.createBucket({
      Bucket: bucketName,
      CreateBucketConfiguration: {
        LocationConstraint: 'us-standard'
      },
    }).promise()
      .then((() => {
        console.log(`Bucket: ${bucketName} created!`);
      }))
      .catch((e) => {
        console.error(`ERROR: ${e.code} - ${e.message}\n`);
      });
  }

  //  Upload Text File
  async createTextFile(file, bucketName = 'images-upload') {
    const param = {
      Bucket: bucketName,
      Key: file.originalname,
      Body: file.buffer,
      ACL: 'public-read',
    }
    return new Promise((res, rej) => this.cosClient.putObject(param, (error, data,p1,p2,p3) => {
      console.log(error,data,p1,p2,p3);
      if (error) {
        console.log('Error uploading data: ', error);
        rej(error);
      } else {
        const link=`${this.config.endpoint}/${bucketName}/${file.originalname}`
        console.log('link------',link);
        res(link);
      }
    }));
  }

  // createTextFile('images-upload', 'demoTextFile', 'hello\nI created new object');
}

