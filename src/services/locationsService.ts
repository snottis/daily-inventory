import Location from '../models/Location';
import { NotFoundError } from '../utils/errors';

const create = async (name: string): Promise<any> => {
  const location = new Location({ name });
  await location.save();
  return location;
};

const remove = async (id: string): Promise<any> => {
  const location = await Location.findById(id);
  if (!location) throw new NotFoundError(`id: ${id} not found`);
  await location.remove();
  return location;
};

const getAll = async (): Promise<any> => {
  const res = await Location.find({});
  return res;
};

const update = async (id: string, name: string): Promise<any> => {
  const location = Location.findById(id);
  if (!location) throw new NotFoundError(`id: ${id} not found`);
  const res = await location.update({ name }, { new: true });
  return res;
};

export default { create, remove, getAll, update };
