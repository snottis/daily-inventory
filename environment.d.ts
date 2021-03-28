declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      JWT_SECRET: string;
      JWT_EXP: string;
      CRYPT_ROUNDS: string;
    }
  }
}

export {};
