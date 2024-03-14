/*
  Warnings:

  - You are about to drop the `Professor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Professor";

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_email_key" ON "Teacher"("email");
