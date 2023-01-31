import { S3 } from "aws-sdk";
import * as path from "path";
import { Injectable } from "@nestjs/common";
import * as process from "process";
import * as crypto from "crypto";
@Injectable()
export class S3Client {
  private instance: S3;

  constructor() {
    this.createInstance();
  }
  createInstance() {
    if (!this.instance) {
      this.instance = new S3({
        endpoint: `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}`,
        accessKeyId: process.env.S3_ACCESS_ID,
        secretAccessKey: process.env.S3_ACCESS_SECRET,
        s3BucketEndpoint: true,
      });
    }

    return this.instance;
  }

  upload(file: Express.Multer.File, folder: string) {
    const extFile = path.extname(file.originalname);
    const tempName = crypto.randomBytes(8).toString("hex") + extFile;
    const params: S3.PutObjectRequest = {
      Bucket: process.env.S3_BUCKET,
      Key: `${folder}/${tempName}`,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read",
    };
    return new Promise((resolve, reject) => {
      this.instance.upload(params, (err, data) => {
        if (err) {
          reject(err.message);
        }
        resolve(data);
      });
    });
  }

  getInformationFile(key) {
    return new Promise((resolve, reject) => {
      const headParams = {
        Bucket: process.env.S3_BUCKET,
        Key: key,
      };
      this.instance.headObject(headParams, (err, data) => {
        if (err) {
          reject(err.message);
        }
        resolve(data);
      });
    });
  }
}
