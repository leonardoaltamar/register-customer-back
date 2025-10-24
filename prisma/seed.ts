import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // 1️⃣ Crear el tipo de documento
  const documentType = await prisma.document_types.create({
    data: { code: 'CC', description: 'Cédula de Ciudadanía' },
  })

  // 2️⃣ Crear una persona
  const person = await prisma.persons.create({
    data: {        
        first_name: "asdasdasd",
        second_name: "Luis",
        surname: "Altama2r",
        second_surname: "Jimenez",
        document_type_id: 1,
        document_number: "123456789",
        expedition_date: new Date("2010-06-14"),
        birthdate: new Date("1990-06-14")
    },
  })

    const userType = await prisma.user_types.create({
    data: {
      code: 'admin',
      description: 'Administrator',    
    },
  })

  // 3️⃣ Crear el usuario
  const user = await prisma.users.create({
    data: {
      username: 'admin',
      password: '$2b$10$fRYcZ9rhKI0eDeSp0IqX.egpABDa.iTpXH15ux9rs1yH8w4vzxpPi', // en producción se encripta
      person_id: person.id,
      user_type_id: userType.id, // admin
    },
  })

const userTypeClient = await prisma.user_types.create({
    data: {
      code: 'client',
      description: 'Cliente',    
    },
  })

  console.log('✅ Datos creados:')
  console.log({ documentType, person, user })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })