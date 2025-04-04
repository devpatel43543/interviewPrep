import AWS from 'aws-sdk';
import dotenv from 'dotenv';
dotenv.config();
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});


const s3 = new AWS.S3();
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const dynamoDBClient = new AWS.DynamoDB(); // Base client for table operations
export { s3, dynamoDB, AWS,dynamoDBClient };