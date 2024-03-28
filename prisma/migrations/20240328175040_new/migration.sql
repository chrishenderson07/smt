/*
  Warnings:

  - Added the required column `formation` to the `Teacher` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "facebook" TEXT,
ADD COLUMN     "formation" TEXT NOT NULL,
ADD COLUMN     "instagram" TEXT,
ADD COLUMN     "messenger" TEXT,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "whatsapp" TEXT;

-- CreateTable
CREATE TABLE "_TeacherSports" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TeacherSports_AB_unique" ON "_TeacherSports"("A", "B");

-- CreateIndex
CREATE INDEX "_TeacherSports_B_index" ON "_TeacherSports"("B");

-- AddForeignKey
ALTER TABLE "_TeacherSports" ADD CONSTRAINT "_TeacherSports_A_fkey" FOREIGN KEY ("A") REFERENCES "Sport"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeacherSports" ADD CONSTRAINT "_TeacherSports_B_fkey" FOREIGN KEY ("B") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
