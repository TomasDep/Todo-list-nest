import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';

import { ListsService } from './lists.service';

@Controller('lists')
export class ListsController {
  constructor(
    private readonly listsService: ListsService
  ) { }

  @Get()
  public getAllLists() {
    return this.listsService.findAll();
  }

  @Get(':id')
  public getListById(@Param('id', ParseIntPipe) id: number) {
    return this.listsService.findOneById(id);
  }

  @Post()
  public createList(@Body() list: any) {
    return {
      ok: true,
      list
    }
  }
  
  @Put(':id')
  public updateList(
    @Param('id', ParseIntPipe) id: number, 
    @Body() list: any
  ) {
    return {
      ok: true,
      id,
      list
    }
  }
  
  @Delete(':id')
  public deleteList(@Param('id', ParseIntPipe) id: number) {
    return {
      ok: true,
      id
    }
  }
}
