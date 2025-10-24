import { prisma } from '../../../../data/mysql/index';
import { DocumentTypeDatasource } from '../../domain/datasource/document-type.datasource';
import { DocumentTypeEntity } from '../../domain/entity/document-type.entity';



export class DocumentTypeDatasourceImpl implements DocumentTypeDatasource {

    async create(documentType: DocumentTypeEntity): Promise<DocumentTypeEntity> {

        const documentCreate = await prisma.document_types.create({
            data: {
                code: documentType.code,
                description: documentType.description
            }
        })

        return DocumentTypeEntity.formObject(documentCreate);
        /* throw new Error("Method not implemented."); */
    }

    async getAll(offset?: number | undefined, limit?: number | undefined): Promise<DocumentTypeEntity[]> {
        const documentTypes = await prisma.document_types.findMany();
        return documentTypes.map(documentType => DocumentTypeEntity.formObject(documentType));
    }

    async getById(id: number): Promise<DocumentTypeEntity> {
        const customer = await prisma.document_types.findFirst({
            where: { id }
        })

        return DocumentTypeEntity.formObject(customer!);
    }


}