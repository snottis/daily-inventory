/* eslint-disable max-classes-per-file */
class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class AuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthenticationError";
    this.status = 401;
  }
}

class AuthorizationError extends Error {
  constructor(message) {
    super(message);
    this.name = "AuthorizationError";
    this.status = 401;
  }
}

module.exports = {
  DatabaseError,
  ValidationError,
  AuthenticationError,
  AuthorizationError,
};
