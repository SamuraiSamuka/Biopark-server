-- CreateTable
CREATE TABLE "Locatarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "data_nascimento" TIMESTAMP(3) NOT NULL,
    "apartamentoid" INTEGER,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Locatarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Locatarios_apartamentoid_key" ON "Locatarios"("apartamentoid");
