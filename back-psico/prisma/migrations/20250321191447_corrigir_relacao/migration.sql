/*
  Warnings:

  - You are about to drop the column `adminId` on the `Atendimento` table. All the data in the column will be lost.
  - You are about to drop the column `agendaId` on the `Atendimento` table. All the data in the column will be lost.
  - You are about to drop the column `anamneseId` on the `Atendimento` table. All the data in the column will be lost.
  - You are about to drop the column `data` on the `Atendimento` table. All the data in the column will be lost.
  - You are about to drop the column `especialidade` on the `Atendimento` table. All the data in the column will be lost.
  - You are about to drop the column `medicoId` on the `Atendimento` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the `Administracao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Agenda` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Anamnese` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Medico` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `dataHora` to the `Atendimento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profissionalId` to the `Atendimento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Administracao" DROP CONSTRAINT "Administracao_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_atendimentoId_fkey";

-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_medicoId_fkey";

-- DropForeignKey
ALTER TABLE "Agenda" DROP CONSTRAINT "Agenda_pacienteId_fkey";

-- DropForeignKey
ALTER TABLE "Anamnese" DROP CONSTRAINT "Anamnese_pacienteId_fkey";

-- DropForeignKey
ALTER TABLE "Atendimento" DROP CONSTRAINT "Atendimento_adminId_fkey";

-- DropForeignKey
ALTER TABLE "Atendimento" DROP CONSTRAINT "Atendimento_anamneseId_fkey";

-- DropForeignKey
ALTER TABLE "Atendimento" DROP CONSTRAINT "Atendimento_medicoId_fkey";

-- DropForeignKey
ALTER TABLE "Medico" DROP CONSTRAINT "Medico_usuarioId_fkey";

-- DropIndex
DROP INDEX "Atendimento_agendaId_key";

-- DropIndex
DROP INDEX "Atendimento_anamneseId_key";

-- AlterTable
ALTER TABLE "Atendimento" DROP COLUMN "adminId",
DROP COLUMN "agendaId",
DROP COLUMN "anamneseId",
DROP COLUMN "data",
DROP COLUMN "especialidade",
DROP COLUMN "medicoId",
ADD COLUMN     "dataHora" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "profissionalId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Paciente" ADD COLUMN     "historicoFamiliar" TEXT,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "objetivoTerapia" TEXT,
ADD COLUMN     "principalQueixa" TEXT,
ADD COLUMN     "usoMedicamentos" TEXT;

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "nome";

-- DropTable
DROP TABLE "Administracao";

-- DropTable
DROP TABLE "Agenda";

-- DropTable
DROP TABLE "Anamnese";

-- DropTable
DROP TABLE "Medico";

-- CreateTable
CREATE TABLE "Profissional" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "especialidade" TEXT NOT NULL,
    "localizacao" TEXT NOT NULL,
    "faixaEtaria" TEXT NOT NULL,
    "matriculaProfissional" TEXT NOT NULL,

    CONSTRAINT "Profissional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EvolucaoClinica" (
    "id" SERIAL NOT NULL,
    "pacienteId" INTEGER NOT NULL,
    "profissionalId" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "relatoAtendimento" TEXT NOT NULL,
    "ajustesNoTratamento" TEXT NOT NULL,

    CONSTRAINT "EvolucaoClinica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profissional_usuarioId_key" ON "Profissional"("usuarioId");

-- AddForeignKey
ALTER TABLE "Profissional" ADD CONSTRAINT "Profissional_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvolucaoClinica" ADD CONSTRAINT "EvolucaoClinica_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EvolucaoClinica" ADD CONSTRAINT "EvolucaoClinica_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Atendimento" ADD CONSTRAINT "Atendimento_profissionalId_fkey" FOREIGN KEY ("profissionalId") REFERENCES "Profissional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
