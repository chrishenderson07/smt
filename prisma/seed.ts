import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
	try {
		// Criar esportes
		const esportes: any = await prisma.sport.createMany({
			data: [
				{
					name: 'Futebol',
					description:
						'Esporte de equipe jogado com uma bola entre dois times de onze jogadores.',
				},
				{
					name: 'Basquete',
					description:
						'Esporte de equipe jogado com uma bola e cestas fixadas acima da cabeça dos jogadores.',
				},
				// Adicione mais esportes conforme necessário
			],
		})

		//Criar arenas
		const arenas: any = await prisma.arena.createMany({
			data: [
				{
					title: 'Maracanã',
					location: 'Rio de Janeiro, Brasil',
				},
				{
					title: 'Staples Center',
					location: 'Los Angeles, Estados Unidos',
				},
				// Adicione mais arenas conforme necessário
			],
		})

		// Criar torneios
		const torneios: any = await prisma.tournament.createMany({
			data: [
				{
					title: 'Copa do Mundo de Futebol',
					description: 'Principal torneio internacional de futebol masculino.',
					location: 'Vários países',
					sportId: 'clu0357oc0000nz1rl44tjy9w', // Usar o ID do primeiro esporte criado
				},
				{
					title: 'NBA Finals',
					description:
						'Série de jogos finais do campeonato da NBA (National Basketball Association).',
					location: 'Estados Unidos',
					sportId: 'clu0357oc0001nz1rms1k0a20', // Usar o ID do segundo esporte criado
				},
				// Adicione mais torneios conforme necessário
			],
		})

		// Criar vídeos
		const videos: any = await prisma.video.createMany({
			data: [
				{
					title: 'Final da Copa do Mundo de Futebol 2018',
					description: 'França vs. Croácia',
					sportId: 'clu0357oc0000nz1rl44tjy9w', // Usar o ID do primeiro esporte criado
					tournamentId: 'clu03hdrg0001o7c8xvb3qlxy', // Usar o ID do primeiro torneio criado
					arenaId: 'clu03el080003f31fkzva0omb', // Usar o ID da primeira arena criada
					youtubeId: 'https://www.youtube.com/watch?v=qkRUcYHJ1JI',
				},
				{
					title: 'Final da NBA 2020',
					description: 'Los Angeles Lakers vs. Miami Heat',
					sportId: 'clu0357oc0001nz1rms1k0a20', // Usar o ID do segundo esporte criado
					tournamentId: 'clu03hdrg0000o7c842t6lrq8', // Usar o ID do segundo torneio criado
					arenaId: 'clu03el080003f31fkzva0omb', // Usar o ID da segunda arena criada
					youtubeId: 'https://www.youtube.com/watch?v=qkRUcYHJ1JI',
				},
				// Adicione mais vídeos conforme necessário
			],
		})

		const teachers = await prisma.teacher.createMany({
			data: [
				{
					name: 'João Silva',
					email: 'joao@example.com',
					description: 'Professor de Futebol',
					formation: 'Licenciatura em Educação Física',
					phoneNumber: '(11) 99999-9999',
				},
				{
					name: 'Maria Santos',
					email: 'maria@example.com',
					description: 'Professora de Basquete',
					formation: 'Licenciatura em Educação Física',
					phoneNumber: '(11) 88888-8888',
				},
				// Adicione mais professores conforme necessário
			],
		})

		console.log('Seed concluído com sucesso!')
	} catch (error) {
		console.error('Erro ao executar seed:', error)
	} finally {
		await prisma.$disconnect()
	}
}

seed()
