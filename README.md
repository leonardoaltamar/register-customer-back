# Register Customer – Backend

API REST en Node.js + Express + Prisma (MySQL) para registro y gestión de clientes, personas y usuarios.

> Nota: No se usó Docker. Necesitas MySQL instalado y accesible en tu máquina/entorno.

## Requisitos

- Node.js 18+ (recomendado)
- MySQL 8+ instalado y levantado (localhost por defecto)
- Git

## Configuración rápida

1) Clona el repo y entra a la carpeta del proyecto

```bash
git clone <url-del-repo>
cd register-customer-back
```

2) Instala dependencias

```bash
npm install
```

3) Copia el archivo de variables de entorno y ajusta si es necesario

```bash
cp .env.example .env
```

Edita `DATABASE_URL` en `.env` si tu usuario/contraseña/host/puerto o nombre de base de datos son distintos.

Por defecto:

```
DATABASE_URL="mysql://root:1234@localhost:3306/ticketsystem"
```

4) Crea la base de datos si aún no existe (opcional; Prisma puede fallar si la BD no existe y tu usuario no tiene permisos para crearla):

```bash
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS ticketsystem CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"
```

## Migraciones y datos de prueba (dummy)

Este proyecto ya incluye un script de seed en `prisma/seed.ts`. Al correr la migración en desarrollo, Prisma aplicará el seed automáticamente y creará datos mínimos para que puedas probar:

- 1 tipo de documento (p. ej. CC)
- 1 persona
- 2 tipos de usuario: `admin` y `client`
- 1 usuario `admin` asociado a la persona y al tipo de usuario `admin`
 - Credenciales del usuario seed: `username: admin`, `password: 1234` (la contraseña se almacena como hash bcrypt en la base de datos)

Ejecuta:

```bash
npx prisma migrate dev --name init
```

Si deseas correr solo el seed manualmente:

```bash
npx prisma db seed
```

> Importante: La contraseña en el seed corresponde a `1234` (guardada como hash bcrypt). Si quieres cambiarla, ajusta `prisma/seed.ts` para generar el hash que prefieras o reemplázalo por uno nuevo.

## Ejecutar el proyecto

Desarrollo (watch):

```bash
npm run dev
```

Producción (build + run):

```bash
npm start
```

Por defecto el servidor corre en el puerto `3001` (ver `src/server/Server.ts`). Las rutas principales se montan en `/api` (ver `src/app.routes.ts`).

## Endpoints rápidos

- Personas: `GET /api/persons`
- Usuarios: `GET /api/users`
- Tipos de documento: `GET /api/document-types`
- Clientes:
	- `GET /api/customers` – lista de clientes (incluye datos de persona y conteo de tickets)
	- `POST /api/customers` – crea un cliente (crea la persona y luego el customer)
	- `PUT /api/customers/:id` – actualiza datos de la persona asociada (no modifica documentNumber ni documentTypeId)
	- `DELETE /api/customers/:id` – borrado lógico (soft delete) usando `deleted_at`

## Notas

- No se usa Docker. Debes tener MySQL instalado y accesible.
- Variables relevantes:
	- `DATABASE_URL`: cadena de conexión MySQL
	- `PORT`: no se usa actualmente en el arranque (el server escucha en 3001), puedes ajustar el código si lo deseas.
- Prisma Client se regenera automáticamente al hacer migraciones. Si lo necesitas manualmente:

```bash
npx prisma generate
```

## Troubleshooting

- Error aplicando migraciones relacionado con claves foráneas: verifica que la base de datos existe y que el usuario tiene permisos. Revisa también cambios en columnas referenciadas por FKs.
- Si `prisma db seed` falla con TypeScript, asegúrate de tener `ts-node` instalado (ya está incluido en `devDependencies`) y que en `package.json` exista:

```json
{
	"prisma": {
		"seed": "ts-node --transpile-only prisma/seed.ts"
	}
}
```

---

¡Listo! Con esto deberías poder levantar el entorno local, aplicar migraciones y contar con datos dummy para probar de inmediato.

