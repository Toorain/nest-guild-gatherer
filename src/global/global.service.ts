import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {Model} from "mongoose";
import {AddItemDto} from "../dtos/add-item.dto";
import {InjectModel} from "@nestjs/mongoose";
import {GlobalDocument, GlobalItem} from "../schemas/global.schema";

@Injectable()
export class GlobalService {
  constructor(@InjectModel(GlobalItem.name) private globalModel: Model<GlobalDocument>) {}

  async getAllProducts() {
    return this.globalModel.find().exec();
  }

  async addProduct(addItemDto: AddItemDto) {
    const findProduct = await this.globalModel
      .findOne({
        code: addItemDto.code,
      })
      .select('_id')
      .lean();
    if(findProduct == null) {
      const createdProduct = new this.globalModel(addItemDto);
      return createdProduct.save();
    } else {
      throw new HttpException({
        status: HttpStatus.CONFLICT,
        error: 'Le produit existe déjà'
      }, HttpStatus.CONFLICT);
    }
  }

  async editProduct(id: string, updateUserDto: AddItemDto) {
    return this.globalModel.findByIdAndUpdate(id, updateUserDto);
  }

  async increaseCount(id: string, updateUserDto: AddItemDto) {
    return this.globalModel.findByIdAndUpdate(id, updateUserDto);
  }

  async removeProduct(id: string) {
    return this.globalModel.findByIdAndDelete(id);
  }
}
