import bcrypt from 'bcrypt';
import jwt from '../utils/jwt';
import { AuthenticationError } from '../utils/errors';
import users from './usersService';

const login = async (username: string, password: string) => {
  const hash = await users.getHash(username);
  if (hash && password) {
    const result = await bcrypt.compare(password, hash.password);
    if (result) {
      const user = await users.getOne(hash._id.toString());
      const access_token = jwt({
        username: user.username,
        locations: user.locations,
        role: user.role,
      });
      const json = user.toJSON();
      return { access_token, ...json };
    }
  }
  throw new AuthenticationError('Invalid username or password');
};

export default { login };
