import { GenderEntity } from "../entity/gender.entity";

export abstract class genderDatasource{

    abstract create( gender: GenderEntity ): Promise<GenderEntity>;

    abstract getAll( offset?:number, limit?:number ): Promise<GenderEntity[]>;

    abstract getById(id: number): Promise<GenderEntity>;

}