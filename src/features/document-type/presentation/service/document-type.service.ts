import { DocumentTypeEntity } from "../../domain/entity/document-type.entity";
import { DocumentTypeRepository } from "../../domain/repository/document-type.repository";

export class DocumentTypeService {
    constructor(private repository: DocumentTypeRepository) {

    }

    public getAll = async (offset?: number, limit?: number): Promise<DocumentTypeEntity[]> => {
        return await this.repository.getAll(offset, limit);
    }

    public getById = async (id: number): Promise<DocumentTypeEntity> => {
        return await this.repository.getById(id);
    }

    public create = async (gender: DocumentTypeEntity) => {
        return await this.repository.create(gender);
    }

}