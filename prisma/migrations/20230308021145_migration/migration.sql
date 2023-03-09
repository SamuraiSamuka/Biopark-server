/*
  Warnings:

  - A unique constraint covering the columns `[locatarioid]` on the table `Apartamentos` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Apartamentos" ALTER COLUMN "aluguel_valor" DROP NOT NULL,
ALTER COLUMN "locatarioid" DROP NOT NULL,
ALTER COLUMN "locatarioid" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Apartamentos_locatarioid_key" ON "Apartamentos"("locatarioid");
