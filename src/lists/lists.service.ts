import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CreateListDto, UpdateListDto } from './dto';
import { List } from './entities/list.entity';

@Injectable()
export class ListsService {
  constructor(
    @InjectModel(List.name) private readonly listModel: Model<List>
  ) { }

  public async create(createListDto: CreateListDto): Promise<List> {
    try {
      const list = await this.listModel.create(createListDto);
      return list;
    } catch(error) {
      this.handleExceptions(error);
    }
  }

  public findAll() {
  }

  public async findOne(id: string): Promise<List> {
    let list: List;
    list = await this.listModel.findById(id);

    if (!list) throw new NotFoundException(`List with id '${ id }' not found in the database`);

    return list;
  }

  public async update(id: string, updateListDto: UpdateListDto): Promise<any> {
    const list = await this.findOne(id);

    try {
      await list.updateOne(updateListDto, { new: true });
      return { ...list.toJSON(), ...updateListDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  public async remove(id: string): Promise<void> {
    const { deletedCount } = await this.listModel.deleteOne({ _id: id });
    
    if (deletedCount === 0)
      throw new BadRequestException(`The list with id '${ id }' not found in the database`);
    
    return;
  }

  public fillListsWithSeedData(lists: List[]) {
  }

  private handleExceptions(error: any): void {
    console.log(error);

    if (error.code === 11000)
      throw new BadRequestException(`List exists in database ${ JSON.stringify(error.keyValue) }`);

    throw new InternalServerErrorException('Sorry an error has occurred, please try again later');
  }
}
