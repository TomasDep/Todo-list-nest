import { Injectable } from '@nestjs/common';

import { ListsService } from 'src/lists/lists.service';
import { UsersService } from 'src/users/users.service';
import { LISTS_SEED } from './data/lists.seed';
import { USERS_SEED } from './data/users.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly listService: ListsService,
    private readonly userService: UsersService
  ) { }

  public populateDB(): string {
    this.listService.fillListsWithSeedData(LISTS_SEED);
    this.userService.fillListsWithSeedData(USERS_SEED);

    return 'SEED executed';
  }
}
