export class CategoryEntity{
    
    constructor(
        id: number,
        description: number,
    ){

    }


    static formObject(object: { [key:string]: any }){
        const { id, description } = object;

        if(!id) throw `Id is required`;
        if(!description) throw `Description is required`;

        return new CategoryEntity(id, description);
    }

}