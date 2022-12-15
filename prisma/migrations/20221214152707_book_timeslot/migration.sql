/*
  Warnings:

  - You are about to drop the column `payment_status` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `time_slot_id` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Made the column `user_id` on table `Booking` required. This step will fail if there are existing NULL values in that column.
  - Made the column `game_id` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_game_id_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_user_id_fkey";

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "payment_status",
ADD COLUMN     "time_slot_id" TEXT NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "game_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_time_slot_id_fkey" FOREIGN KEY ("time_slot_id") REFERENCES "TimeSlot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_game_id_fkey" FOREIGN KEY ("game_id") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
