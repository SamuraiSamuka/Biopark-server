/*
  Warnings:

  - Changed the type of `andar` on the `Apartamentos` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Apartamentos" DROP COLUMN "andar",
ADD COLUMN     "andar" INTEGER NOT NULL;
