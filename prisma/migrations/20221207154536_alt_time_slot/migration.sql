/*
  Warnings:

  - The `startTime` column on the `TimeSlot` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `endTime` column on the `TimeSlot` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "TimeSlot" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
