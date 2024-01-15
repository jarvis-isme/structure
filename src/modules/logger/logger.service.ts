import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  private readonly logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf((info) => {
          return `${info.timestamp} [${info.level}]: ${info.message}`;
        }),
      ),

      transports: [
        new DailyRotateFile({
          filename: 'logs/application-%DATE%.log',
          datePattern: 'YYYY-MM-DD',
          zippedArchive: true,
          maxSize: '10m',
          maxFiles: '14d',
        }),
      ],
    });
  }

  private logWithLocation(level: string, message: string) {
    const stack = new Error().stack?.split('\n');
    if (stack && stack.length >= 4) {
      // Extract the file path and line number
      const caller = stack[3].trim();
      const matches = caller.match(/at .* \((.*):(\d+):\d+\)/);

      if (matches && matches.length === 3) {
        const [, file, line] = matches;
        const logMessage = `(${file}:${line}) ${message}`;
        this.logger.log(level, logMessage);
        return;
      }
    }
  }

  log(message: string) {
    this.logger.log('info', message);
  }

  error(message: string) {
    this.logWithLocation('error', message);
  }

  warn(message: string) {
    this.logger.log('warn', message);
  }

  debug(message: string) {
    this.logger.log('debug', message);
  }
}
