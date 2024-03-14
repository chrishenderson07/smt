/*
  Warnings:

  - You are about to drop the `_TournamentArena` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_TournamentArena" DROP CONSTRAINT "_TournamentArena_A_fkey";

-- DropForeignKey
ALTER TABLE "_TournamentArena" DROP CONSTRAINT "_TournamentArena_B_fkey";

-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "date" TIMESTAMP(3);

-- DropTable
DROP TABLE "_TournamentArena";

-- CreateTable
CREATE TABLE "_TournamentArenas" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TournamentArenas_AB_unique" ON "_TournamentArenas"("A", "B");

-- CreateIndex
CREATE INDEX "_TournamentArenas_B_index" ON "_TournamentArenas"("B");

-- AddForeignKey
ALTER TABLE "_TournamentArenas" ADD CONSTRAINT "_TournamentArenas_A_fkey" FOREIGN KEY ("A") REFERENCES "Arena"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TournamentArenas" ADD CONSTRAINT "_TournamentArenas_B_fkey" FOREIGN KEY ("B") REFERENCES "Tournament"("id") ON DELETE CASCADE ON UPDATE CASCADE;
