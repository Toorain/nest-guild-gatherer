import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {GlobalService} from "./global.service";
import {AddItemDto} from "../dtos/add-item.dto";

@Controller('global')
export class GlobalController {
  constructor(private globalService: GlobalService) {}

  @Get('/getAll')
  async getAllProducts() {
    return this.globalService.getAllProducts();
  }

  @Post('/add')
  async createProduct(@Body() addItemDto: AddItemDto) {
    return this.globalService.addProduct(addItemDto);
  }

  @Delete('/remove/:id')
  async removeProduct(@Param('id') id: string) {
    return this.globalService.removeProduct(id);
  }

  @Put('/increaseCount/:id')
  async increaseCount(@Param('id') id: string, @Body() updateUserDto: AddItemDto): Promise<any> {
    return this.globalService.increaseCount(id, updateUserDto);
  }

  @Put('/edit/:id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: AddItemDto): Promise<any> {
    return this.globalService.editProduct(id, updateUserDto);
  }
}
