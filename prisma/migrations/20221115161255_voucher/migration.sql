-- CreateTable
CREATE TABLE "Voucher" (
    "id" TEXT NOT NULL,
    "id_game" TEXT NOT NULL,
    "id_user" TEXT NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "remaining_amount" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,

    CONSTRAINT "Voucher_pkey" PRIMARY KEY ("id")
);
