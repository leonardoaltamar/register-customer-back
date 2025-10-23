import { prisma } from '../../../../data/mysql/index';
import { genderDatasource } from "../../domain/datasource/gender.datasource";
import { GenderEntity } from "../../domain/entity/gender.entity";

export class GenderDatasourceImpl implements genderDatasource{

    async create(gender: GenderEntity): Promise<GenderEntity> {

        const genderCreate = await prisma.genders.create({
            data: {
                description: gender.description,
                created_at: new Date()
            }
        })

        return GenderEntity.formObject( genderCreate );
        /* throw new Error("Method not implemented."); */
    }

    async getAll(offset?: number | undefined, limit?: number | undefined): Promise<GenderEntity[]> {
        const genders = await prisma.genders.findMany();        
        return genders.map( gender => GenderEntity.formObject(gender) );
    }

    async getById(id: number): Promise<GenderEntity> {
        const gender = await prisma.genders.findFirst({
            where: {id}
        })

        return GenderEntity.formObject(gender!);
    }
    

}