import { CategoryEntity } from "../entity/category.entity";


export abstract class CategoryRepository{

    abstract create(categoryCreate: CategoryEntity): Promise<CategoryEntity>;

    abstract getAll( limit?:number, offset?:number ): Promise<CategoryEntity[]>;

    abstract getById(id:number): Promise<CategoryEntity>;

    abstract update(id:number, categoryUpdate: CategoryEntity): Promise<CategoryEntity>;

    abstract delete(id:number): Promise<CategoryEntity>;
    
}