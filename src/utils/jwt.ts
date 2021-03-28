import jwt from 'jsonwebtoken';
import config from './config';

export default (payload: any): string => {
  return jwt.sign(payload, config.JwtSecret, {
    expiresIn: config.JwtExp,
  });
};
