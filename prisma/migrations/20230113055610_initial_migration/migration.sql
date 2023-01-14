-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "EirCode" TEXT,
    "NumOfCows" TEXT,
    "ParlourSizeMake" TEXT,
    "Supplier" TEXT,
    "Message" TEXT,

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);
