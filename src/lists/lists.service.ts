import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';

import { v4 as uuid } from 'uuid';

import { IList } from 'src/lists/interfaces/list.interface';
import { CreateListDto, UpdateListDto } from './dto';

@Injectable()
export class ListsService {
  private lists: IList[] = [];

  public findAll(): IList[] {
    return this.lists;
  }

  public findOneById(id: string): IList {
    const list = this.lists.find(list => list.id === id);
    
    if (!list) throw new NotFoundException(`List with id '${ id }' not found`);

    return list;
  }

  public create(createListDto: CreateListDto): IList {
    const list: IList = {
      id: uuid(),
      ...createListDto
    }

    this.lists.push(list);

    return list;
  }

  public update(id: string, updateListDto: UpdateListDto): IList {
    let listDB = this.findOneById(id);

    if (updateListDto.id && updateListDto.id !== id) 
      throw new BadRequestException(`List id is not valid`);

    this.lists = this.lists.map(list => {
      if (list.id === id) {
        listDB = { ...listDB, ...updateListDto, id }
        return listDB;
      }

      return list;
    });

    return listDB;
  }

  public delete(id: string): void {
    const list = this.findOneById(id);
    this.lists = this.lists.filter(list => list.id !== id);
  }

  public fillListsWithSeedData(lists: IList[]) {
    this.lists = lists;
  }
}
