/*
  Warnings:

  - You are about to drop the column `apartamentoid` on the `Apartamentos` table. All the data in the column will be lost.
  - You are about to drop the column `area` on the `Apartamentos` table. All the data in the column will be lost.
  - Added the required column `predioid` to the `Apartamentos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Apartamentos" DROP COLUMN "apartamentoid",
DROP COLUMN "area",
ADD COLUMN     "predioid" INTEGER NOT NULL;
