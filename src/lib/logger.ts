import winston from 'winston';
import WinstonCloudwatch, {
  type CloudwatchTransportOptions
} from 'winston-cloudwatch';

import {
  AWS_REGION,
  CLOUDWATCH_ACCESS_KEY,
  CLOUDWATCH_GROUP_NAME,
  CLOUDWATCH_SECRET_ACCESS_KEY,
  NODE_ENV
} from '~/config';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const level = NODE_ENV === 'development' ? 'debug' : 'warn';

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
};

winston.addColors(colors);

const formats = [
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.prettyPrint(),
  winston.format.splat()
];

if (NODE_ENV === 'development') {
  formats.push(winston.format.colorize({ all: true }));
}

formats.push(
  winston.format.printf(({ level, message, timestamp, additionalInfo }) => {
    return additionalInfo
      ? `${timestamp} ${level}: ${message} \nAdditional Info: ${JSON.stringify(
          additionalInfo,
          null,
          2
        )}`
      : `${timestamp} ${level}: ${message}`;
  })
);

const format = winston.format.combine(...formats);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
  new winston.transports.File({ filename: 'logs/combined.log' })
];

const Logger = winston.createLogger({
  level,
  levels,
  format,
  transports
});

if (
  NODE_ENV === 'production' &&
  CLOUDWATCH_GROUP_NAME &&
  CLOUDWATCH_ACCESS_KEY &&
  CLOUDWATCH_SECRET_ACCESS_KEY &&
  AWS_REGION
) {
  const cloudwatchConfig: CloudwatchTransportOptions = {
    level: 'warn',
    logGroupName: CLOUDWATCH_GROUP_NAME,
    logStreamName: `${CLOUDWATCH_GROUP_NAME}-${NODE_ENV}`,
    awsOptions: {
      credentials: {
        accessKeyId: CLOUDWATCH_ACCESS_KEY,
        secretAccessKey: CLOUDWATCH_SECRET_ACCESS_KEY
      },
      region: AWS_REGION
    },
    messageFormatter: ({ level, message, additionalInfo }) =>
      additionalInfo
        ? `${level}: ${message} \nAdditional Info: ${JSON.stringify(additionalInfo, null, 2)}`
        : `${level}: ${message}`
  };
  Logger.add(new WinstonCloudwatch(cloudwatchConfig));
}

export { Logger };
