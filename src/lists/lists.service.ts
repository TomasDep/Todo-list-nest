import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ListsService {
  private lists = [
    {
      id: 1,
      title: 'Titulo 1',
      tasks: 'task 1'
    },
    {
      id: 2,
      title: 'Titulo 2',
      tasks: 'task 2'
    },
    {
      id: 3,
      title: 'Titulo 3',
      tasks: 'task 3'
    }
  ];

  public findAll() {
    return this.lists;
  }

  public findOneById(id: number) {
    const list = this.lists.find(list => list.id === id);
    
    if (!list) throw new NotFoundException(`List with id '${ id }' not found`);

    return list;
  }
}
