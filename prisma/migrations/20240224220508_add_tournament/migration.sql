/*
  Warnings:

  - You are about to drop the `_ArenaToTournament` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ArenaToTournament" DROP CONSTRAINT "_ArenaToTournament_A_fkey";

-- DropForeignKey
ALTER TABLE "_ArenaToTournament" DROP CONSTRAINT "_ArenaToTournament_B_fkey";

-- AlterTable
ALTER TABLE "Arena" ADD COLUMN     "description" TEXT;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "arenaId" INTEGER;

-- DropTable
DROP TABLE "_ArenaToTournament";

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_arenaId_fkey" FOREIGN KEY ("arenaId") REFERENCES "Arena"("id") ON DELETE SET NULL ON UPDATE CASCADE;
