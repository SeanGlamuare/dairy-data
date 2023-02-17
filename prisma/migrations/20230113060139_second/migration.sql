/*
  Warnings:

  - You are about to drop the column `EirCode` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `Email` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `Message` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `Name` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `NumOfCows` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `ParlourSizeMake` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `Phone` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `Supplier` on the `Contact` table. All the data in the column will be lost.
  - Added the required column `email` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Contact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Contact` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "EirCode",
DROP COLUMN "Email",
DROP COLUMN "Message",
DROP COLUMN "Name",
DROP COLUMN "NumOfCows",
DROP COLUMN "ParlourSizeMake",
DROP COLUMN "Phone",
DROP COLUMN "Supplier",
ADD COLUMN     "eirCode" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "noc" TEXT,
ADD COLUMN     "parlourSizeMake" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "supplier" TEXT,
ADD COLUMN     "agree" BOOLEAN;
