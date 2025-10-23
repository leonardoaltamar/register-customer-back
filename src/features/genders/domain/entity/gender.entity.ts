export class GenderEntity{
    constructor(public id: number, public description:string, public created_at?: Date){

    }

    static formObject(object: { [key:string]: any }){
        const { id, description, created_at } = object;
        if(!id) throw `Id is required`;
        if(!description) throw `Description is required`;
        return new GenderEntity(id, description, created_at);
    }

    
}