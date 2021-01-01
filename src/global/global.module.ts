import {Module} from '@nestjs/common';
import { GlobalService } from './global.service';
import { GlobalController } from './global.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {GlobalItem, GlobalSchema} from "../schemas/global.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: GlobalItem.name, schema: GlobalSchema}])
  ],
  providers: [GlobalService],
  controllers: [GlobalController]
})
export class GlobalModule {}
