import { DocumentTypeEntity } from "../entity/document-type.entity";


export abstract class DocumentTypeDatasource {

    abstract create(customer: DocumentTypeEntity): Promise<DocumentTypeEntity>;

    abstract getAll(offset?: number, limit?: number): Promise<DocumentTypeEntity[]>;

    abstract getById(id: number): Promise<DocumentTypeEntity>;

}