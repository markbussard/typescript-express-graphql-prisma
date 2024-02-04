import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("Couldn't find .env file");
}

export const NODE_ENV = process.env.NODE_ENV ?? 'development';

export const SERVER_PORT = process.env.SERVER_PORT
  ? parseInt(process.env.SERVER_PORT)
  : 4000;

export const AWS_REGION = process.env.AWS_REGION ?? '';

export const CLOUDWATCH_GROUP_NAME = process.env.CLOUDWATCH_GROUP_NAME ?? '';
export const CLOUDWATCH_ACCESS_KEY = process.env.CLOUDWATCH_ACCESS_KEY ?? '';
export const CLOUDWATCH_SECRET_ACCESS_KEY =
  process.env.CLOUDWATCH_SECRET_ACCESS_KEY ?? '';

export const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY ?? '';
