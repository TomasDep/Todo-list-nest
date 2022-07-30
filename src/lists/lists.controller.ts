import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

import { ListsService } from './lists.service';
import { CreateListDto } from './dto/create-list.dto';
import { IList } from './interfaces/list.interface';
import { UpdateListDto } from './dto/update-list.dto';

@Controller('lists')
@UsePipes(ValidationPipe)
export class ListsController {
  constructor(
    private readonly listsService: ListsService
  ) { }

  @Get()
  public getAllLists(): IList[] {
    return this.listsService.findAll();
  }

  @Get(':id')
  public getListById(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
  ): IList {
    return this.listsService.findOneById(id);
  }

  @Post()
  public createList(@Body() createListDto: CreateListDto) {
    return this.listsService.create(createListDto);
  }
  
  @Put(':id')
  public updateList(
    @Param('id', ParseUUIDPipe) id: string, 
    @Body() updateListDto: UpdateListDto
  ): IList {
    return this.listsService.update(id, updateListDto);
  }
  
  @Delete(':id')
  public deleteList(@Param('id', ParseUUIDPipe) id: string): void {
    return this.listsService.delete(id);
  }
}
