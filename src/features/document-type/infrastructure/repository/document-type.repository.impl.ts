import { DocumentTypeDatasource } from "../../domain/datasource/document-type.datasource";
import { DocumentTypeEntity } from "../../domain/entity/document-type.entity";
import { DocumentTypeRepository } from "../../domain/repository/document-type.repository";


export class DocumentTypeRepositoryImpl implements DocumentTypeRepository {

    constructor(private readonly datasource: DocumentTypeDatasource) { }

    create(documentType: DocumentTypeEntity): Promise<DocumentTypeEntity> {
        return this.datasource.create(documentType);

    }

    getAll(offset?: number | undefined, limit?: number | undefined): Promise<DocumentTypeEntity[]> {
        return this.datasource.getAll(offset, limit);

    }

    getById(id: number): Promise<DocumentTypeEntity> {
        return this.datasource.getById(id);
    }

}