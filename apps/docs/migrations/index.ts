import * as migration_20260123_192703_init from './20260123_192703_init';

export const migrations = [
  {
    up: migration_20260123_192703_init.up,
    down: migration_20260123_192703_init.down,
    name: '20260123_192703_init'
  },
];
