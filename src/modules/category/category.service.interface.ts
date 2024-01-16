
import { IBaseService } from '../base/base.service.interface';
import { CategoryEntity } from './entities/category.entity';

export interface ICategoryService extends IBaseService<CategoryEntity>{
    initializeCategory(): Promise<CategoryEntity>;
}