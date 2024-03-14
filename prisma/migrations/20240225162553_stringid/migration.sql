/*
  Warnings:

  - The primary key for the `Arena` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Teacher` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Tournament` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Video` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_arenaId_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_tournamentId_fkey";

-- AlterTable
ALTER TABLE "Arena" DROP CONSTRAINT "Arena_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Arena_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Arena_id_seq";

-- AlterTable
ALTER TABLE "Teacher" DROP CONSTRAINT "Teacher_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Teacher_id_seq";

-- AlterTable
ALTER TABLE "Tournament" DROP CONSTRAINT "Tournament_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Tournament_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Tournament_id_seq";

-- AlterTable
ALTER TABLE "Video" DROP CONSTRAINT "Video_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tournamentId" SET DATA TYPE TEXT,
ALTER COLUMN "arenaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Video_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Video_id_seq";

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_tournamentId_fkey" FOREIGN KEY ("tournamentId") REFERENCES "Tournament"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_arenaId_fkey" FOREIGN KEY ("arenaId") REFERENCES "Arena"("id") ON DELETE SET NULL ON UPDATE CASCADE;
