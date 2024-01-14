import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString} from 'class-validator';

export class CreateCategoryDto {
    @IsNotEmpty()
    @IsString()
    category_name: string;

    @IsNotEmpty()
    @IsNumber()
    category_parent_id: number;
}