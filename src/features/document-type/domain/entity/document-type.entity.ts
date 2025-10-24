export class DocumentTypeEntity {
    constructor(        
        public id: number,
        public code: string,
        public description: string,
        public createdAt?: Date,
        public updatedAt?: Date,
        public deletedAt?: Date,
    ) {

    }

    static formObject(object: { [key: string]: any }) {
        const id = object.id ?? object.id;
        const code = object.code ?? object.code;
        const description = object.description ?? object.description;
        const createdAt = object.createdAt ?? object.created_at;
        const updatedAt = object.updatedAt ?? object.updated_at;
        const deletedAt = object.deletedAt ?? object.deleted_at;

        if (code === undefined || code === null) throw `code is required`;
        return new DocumentTypeEntity(id,code,description, createdAt, updatedAt, deletedAt);
    }


}