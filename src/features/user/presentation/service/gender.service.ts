import { GenderEntity } from '../../domain/entity/gender.entity';
import { genderRepository } from '../../domain/repository/gender.repository';
export class GenderService{
    constructor(private genderRepository: genderRepository){
        
    }

    public getAll = async (offset?:number, limit?:number): Promise<GenderEntity[]> => {
        return await this.genderRepository.getAll(offset, limit);
    }

    public getById = async (id:number): Promise<GenderEntity> => {
        return await this.genderRepository.getById(id);
    }

    public create = async (gender: GenderEntity) => {
        return await this.genderRepository.create(gender);
    }

}