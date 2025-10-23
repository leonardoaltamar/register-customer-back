import { genderDatasource } from "../../domain/datasource/gender.datasource";
import { GenderEntity } from "../../domain/entity/gender.entity";
import { genderRepository } from "../../domain/repository/gender.repository";

export class genderRepositoryImpl implements genderRepository{

    constructor(private readonly datasource: genderDatasource ){}

    create(gender: GenderEntity): Promise<GenderEntity> {
        return this.datasource.create(gender);

    }

    getAll(offset?: number | undefined, limit?: number | undefined): Promise<GenderEntity[]> {
        return this.datasource.getAll(offset, limit);

    }

    getById(id: number): Promise<GenderEntity> {
        return this.datasource.getById(id);
    }

}