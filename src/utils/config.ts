export default {
  MongodbUri: process.env.MONGODB_URI as string,
  JwtSecret:
    process.env.NODE_ENV == 'test'
      ? 'secret'
      : (process.env.JWT_SECRET as string),
  JwtExp:
    process.env.NODE_ENV == 'test' ? '3600' : (process.env.JWT_EXP as string),
  CryptRounds:
    process.env.NODE_ENV == 'test' ? '1' : (process.env.CRYPT_ROUNDS as string),
};
