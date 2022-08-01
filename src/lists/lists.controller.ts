import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { List } from './entities/list.entity';
import { ListsService } from './lists.service';
import { CreateListDto, UpdateListDto } from './dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id.pipe';

@Controller('lists')
export class ListsController {
  constructor(
    private readonly listsService: ListsService
  ) { }

  @Post()
  public create(@Body() createListDto: CreateListDto): Promise<List> {
    return this.listsService.create(createListDto);
  }

  @Get()
  public findAll() {
    return this.listsService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', ParseMongoIdPipe) id: string): Promise<List> {
    return this.listsService.findOne(id);
  }

  
  @Patch(':id')
  public update(
    @Param('id', ParseMongoIdPipe) id: string, 
    @Body() updateListDto: UpdateListDto
  ): Promise<any> {
    return this.listsService.update(id, updateListDto);
  }
  
  @Delete(':id')
  public remove(@Param('id', ParseMongoIdPipe) id: string): Promise<void> {
    return this.listsService.remove(id);
  }
}
