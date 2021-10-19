import {
  exists as _exists,
  mkdir as _mkdir,
  writeFile as _writeFile
} from 'fs';
import { promisify } from 'util';

export const exists = promisify(_exists);
export const mkdir = promisify(_mkdir);
export const writeFile = promisify(_writeFile);

export default {
  exists,
  mkdir,
  writeFile
};
