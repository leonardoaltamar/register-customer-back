import { CategoryDatasource } from "../../domain/datasource/category.datasource";
import { CategoryEntity } from "../../domain/entity/category.entity";

export class CategoryDatasourceImpl implements CategoryDatasource{

    create(categoryCreate: CategoryEntity): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }
    
    getAll(limit?: number | undefined, offset?: number | undefined): Promise<CategoryEntity[]> {
        throw new Error("Method not implemented.");
    }

    getById(id: number): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }

    update(id: number, categoryUpdate: CategoryEntity): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): Promise<CategoryEntity> {
        throw new Error("Method not implemented.");
    }

}