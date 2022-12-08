/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "lastName" TEXT NOT NULL DEFAULT '';
