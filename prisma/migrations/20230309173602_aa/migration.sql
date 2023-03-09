/*
  Warnings:

  - You are about to drop the column `condominoid` on the `Locatarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Locatarios" DROP COLUMN "condominoid",
ADD COLUMN     "condominioid" INTEGER;
