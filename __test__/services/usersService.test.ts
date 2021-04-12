import bcrypt from 'bcrypt';

import User from '../../src/models/User';
import usersService from '../../src/services/usersService';
import { Role } from '../../src/types/userTypes';
const memserver = require('../memoryServer');

describe('Users service', () => {
  const mockAdmin = {
    username: 'Jim',
    passwordPlain: '123',
    locations: [],
    role: 'admin' as Role,
  };
  const mockUser = {
    username: 'John',
    passwordPlain: '123',
    locations: [],
    role: 'user' as Role,
  };

  const { passwordPlain: adminpass, ...mAdmin } = mockAdmin as any;
  const { passwordPlain: userpass, ...mUser } = mockUser as any;
  beforeAll(async () => {
    mAdmin.password = await bcrypt.hash(adminpass, 1);
    mUser.password = await bcrypt.hash(userpass, 1);
    await memserver.connect();
  });
  afterAll(async () => {
    await memserver.disconnect();
  });
  beforeEach(async () => {
    await User.deleteMany({});
  });

  describe('Create users', () => {
    it('Should create user', async () => {
      await usersService.createUser(
        mockUser.username,
        mockUser.passwordPlain,
        mockUser.locations,
        mockUser.role,
      );
      expect(await User.countDocuments({})).toEqual(1);
    });
    it('Should create admin', async () => {
      await usersService.createUser(
        mockAdmin.username,
        mockAdmin.passwordPlain,
        mockAdmin.locations,
        mockAdmin.role,
      );
      expect(await User.countDocuments({})).toEqual(1);
    });
  });
  describe('Get one user', () => {
    it('Should get user', async () => {
      const user = await new User(mAdmin).save();
      const res = await usersService.getOne(user._id);
      expect(res.username).toEqual('Jim');
    });
  });
  describe('Get all users', () => {
    it('Should return 2 users', async () => {
      await new User(mAdmin).save();
      await new User(mUser).save();
      expect(await User.countDocuments()).toEqual(2);
    });
  });
  describe('Delete user', () => {
    it('Should delete user', async () => {
      const user = await new User(mUser).save();
      await usersService.deleteUser(user._id);
      expect(await User.countDocuments()).toEqual(0);
    });
  });
  describe('Update user', () => {
    it('Should change role to user', async () => {
      const user = await new User(mAdmin).save();
      await usersService.updateUser(user._id, null, null, null, 'user');
      const obj = (await User.findById(user._id)) as any;
      const role = obj.toObject().role as any;
      expect(role).toEqual('user');
    });
  });
  describe('Get password hash', () => {
    it('Should have matching hash', async () => {
      const user = (await new User(mAdmin).save()) as any;
      const res = (await usersService.getHash(user.username)) as any;
      await bcrypt.compare(mockUser.passwordPlain, res.password);
    });
  });
});
