const memserver = require('../memoryServer');

import User from '../../src/models/User';
import { Role } from '../../src/types/userTypes';
import loginService from '../../src/services/loginService';
import bcrypt from 'bcrypt';

describe('Login service', () => {
  const mockUser = {
    username: 'John',
    passwordPlain: '123',
    locations: [],
    role: 'user' as Role,
  };

  const { passwordPlain: pass, ...mUser } = mockUser as any;
  beforeAll(async () => {
    mUser.password = await bcrypt.hash(pass, 1);
    await memserver.connect();
    await new User(mUser).save();
  });
  afterAll(async () => {
    await memserver.disconnect();
  });

  describe('Login with wrong information', () => {
    it('Should fail with wrong password', async () => {
      await expect(
        loginService.login(mUser.username, 'wrong pass'),
      ).rejects.toThrowError();
    });
    it('Should fail with wrong username', async () => {
      await expect(
        loginService.login('wrong username', mUser.password),
      ).rejects.toThrowError();
    });
    it('Should fail with wrong username and password', async () => {
      await expect(
        loginService.login('wrong username', 'wrong pass'),
      ).rejects.toThrowError();
    });
  });

  describe('Login with correct information', () => {
    it('Should be able to login', async () => {
      const response = await loginService.login(mUser.username, pass);
      expect(response).toHaveProperty('access_token');
      expect(response.username).toBe(mUser.username);
    });
  });
});
