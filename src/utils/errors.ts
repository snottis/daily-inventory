/* eslint-disable max-classes-per-file */

export class DatabaseError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'DatabaseError';
    this.status = 500;
  }
}

export class ValidationError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
  }
}

export class AuthenticationError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
    this.status = 401;
  }
}

export class AuthorizationError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'AuthorizationError';
    this.status = 401;
  }
}

export default {
  DatabaseError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
};
