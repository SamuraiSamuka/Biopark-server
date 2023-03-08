-- CreateTable
CREATE TABLE "Predios" (
    "id" SERIAL NOT NULL,
    "condominioid" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "pisos" TEXT NOT NULL,

    CONSTRAINT "Predios_pkey" PRIMARY KEY ("id")
);
