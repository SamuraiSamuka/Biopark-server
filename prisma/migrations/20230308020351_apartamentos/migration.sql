/*
  Warnings:

  - You are about to drop the column `loocatarioid` on the `Apartamentos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Apartamentos" DROP COLUMN "loocatarioid",
ADD COLUMN     "locatarioid" INTEGER NOT NULL DEFAULT 0;
