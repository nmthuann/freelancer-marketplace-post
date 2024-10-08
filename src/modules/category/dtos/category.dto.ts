import { Expose } from 'class-transformer';
import { IsString} from 'class-validator';

export class CategoryDto {
  //@Expose()
  category_id: number;

  //@IsString()
  category_name: string;
  description: string;
}




export class CreateCategoryDto {
  @Expose()
  @IsString()
  category_name: string;

  @Expose()
  @IsString()
  description: string;
}