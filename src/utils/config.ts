console.log('CONF', process.env.MONGODB_URI);

export default {
  MongodbUri: process.env.MONGODB_URI as string,
  JwtSecret: process.env.JWT_SECRET as string,
  JwtExp: process.env.JWT_EXP as string,
  CryptRounds: process.env.CRYPT_ROUNDS as string,
};
