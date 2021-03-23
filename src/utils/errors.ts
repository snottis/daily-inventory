/* eslint-disable max-classes-per-file */

class DatabaseError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'DatabaseError';
    this.status = 500;
  }
}

class ValidationError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
  }
}

class AuthenticationError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'AuthenticationError';
    this.status = 401;
  }
}

class AuthorizationError extends Error {
  status: number;
  constructor(message: string) {
    super(message);
    this.name = 'AuthorizationError';
    this.status = 401;
  }
}

module.exports = {
  DatabaseError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
};
