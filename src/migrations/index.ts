import * as migration_20261109_155516_initial from './20261109_155516_initial';
import * as migration_20261111_112128_add_business_cards_service from './20261111_112128_add_business_cards_service';

export const migrations = [
  {
    up: migration_20261109_155516_initial.up,
    down: migration_20261109_155516_initial.down,
    name: '20261109_155516_initial',
  },
  {
    up: migration_20261111_112128_add_business_cards_service.up,
    down: migration_20261111_112128_add_business_cards_service.down,
    name: '20261111_112128_add_business_cards_service'
  },
];
