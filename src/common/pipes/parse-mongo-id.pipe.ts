import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

import { isValidObjectId } from 'mongoose';

@Injectable()
export class ParseMongoIdPipe implements PipeTransform {
  transform(value: string): string {
    if (!isValidObjectId(value))
      throw new BadRequestException(
        `The value '${value}' is not a valid Mongo ID`,
      );

    return value;
  }
}
