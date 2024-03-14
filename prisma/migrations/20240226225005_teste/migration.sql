/*
  Warnings:

  - You are about to drop the column `description` on the `Arena` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Arena` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `Tournament` table. All the data in the column will be lost.
  - You are about to drop the column `youtubeUrl` on the `Video` table. All the data in the column will be lost.
  - You are about to drop the `Social` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Teacher` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `title` to the `Arena` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sportId` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sportId` to the `Video` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Video` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Social" DROP CONSTRAINT "Social_teacherId_fkey";

-- AlterTable
ALTER TABLE "Arena" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "information" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" DROP COLUMN "endDate",
DROP COLUMN "name",
DROP COLUMN "startDate",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "sportId" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "youtubeUrl",
ADD COLUMN     "highlights" TEXT[],
ADD COLUMN     "sportId" TEXT NOT NULL,
ADD COLUMN     "youtubeId" TEXT,
ALTER COLUMN "description" SET NOT NULL;

-- DropTable
DROP TABLE "Social";

-- DropTable
DROP TABLE "Teacher";

-- CreateTable
CREATE TABLE "Sport" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Sport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TournamentArena" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_TournamentArena_AB_unique" ON "_TournamentArena"("A", "B");

-- CreateIndex
CREATE INDEX "_TournamentArena_B_index" ON "_TournamentArena"("B");

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TournamentArena" ADD CONSTRAINT "_TournamentArena_A_fkey" FOREIGN KEY ("A") REFERENCES "Arena"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TournamentArena" ADD CONSTRAINT "_TournamentArena_B_fkey" FOREIGN KEY ("B") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
