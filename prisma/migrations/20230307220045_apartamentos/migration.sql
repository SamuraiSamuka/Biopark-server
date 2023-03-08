-- CreateTable
CREATE TABLE "Apartamentos" (
    "id" SERIAL NOT NULL,
    "condominioid" INTEGER NOT NULL,
    "apartamentoid" INTEGER NOT NULL,
    "loocatarioid" INTEGER NOT NULL DEFAULT 0,
    "andar" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "vago" BOOLEAN NOT NULL DEFAULT true,
    "aluguel_valor" DOUBLE PRECISION NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Apartamentos_pkey" PRIMARY KEY ("id")
);
