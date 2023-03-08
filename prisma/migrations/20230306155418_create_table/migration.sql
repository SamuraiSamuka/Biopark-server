-- CreateTable
CREATE TABLE "Condominio" (
    "id" SERIAL NOT NULL,
    "uuid" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "uf" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,

    CONSTRAINT "Condominio_pkey" PRIMARY KEY ("id")
);
