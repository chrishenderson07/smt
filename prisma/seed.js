import { PrismaClient } from '@prisma/client'

class Seeder {
	prisma

	constructor() {
		this.prisma = new PrismaClient()
	}

	async createSports() {
		try {
			await this.prisma.sport.createMany({
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

			console.log('Esportes criados com sucesso!')
		} catch (error) {
			console.error('Erro ao criar esportes:', error)
		}
	}

	async createArenas() {
		try {
			await this.prisma.arena.createMany({
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

			console.log('Arenas criadas com sucesso!')
		} catch (error) {
			console.error('Erro ao criar arenas:', error)
		}
	}

	async createTournaments() {
		try {
			await this.prisma.tournament.createMany({
				data: [
					{
						title: 'Copa do Mundo de Futebol',
						description:
							'Principal torneio internacional de futebol masculino.',
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

			console.log('Torneios criados com sucesso!')
		} catch (error) {
			console.error('Erro ao criar torneios:', error)
		}
	}

	async createVideos() {
		try {
			await this.prisma.video.createMany({
				data: [
					{
						title: 'Final da Copa do Mundo de Futebol 2018',
						description: 'França vs. Croácia',
						sportId: 'clubjbpeq0000wdn8aa69t40k', // Usar o ID do primeiro esporte criado
						tournamentId: 'clubjbq6x0004wdn82xj3py30', // Usar o ID do primeiro torneio criado
						arenaId: 'clubjbpsy0002wdn89i4l03iy', // Usar o ID da primeira arena criada
						youtubeId: 'https://www.youtube.com/watch?v=qkRUcYHJ1JI',
					},
					{
						title: 'Final da NBA 2020',
						description: 'Los Angeles Lakers vs. Miami Heat',
						sportId: 'clubjbper0001wdn8poolyw8h', // Usar o ID do segundo esporte criado
						tournamentId: 'clubjbq6x0005wdn8c1qchezk', // Usar o ID do segundo torneio criado
						arenaId: 'clubjbpsy0003wdn898f0mi9u', // Usar o ID da segunda arena criada
						youtubeId: 'https://www.youtube.com/watch?v=qkRUcYHJ1JI',
					},
					// Adicione mais vídeos conforme necessário
				],
			})

			console.log('Vídeos criados com sucesso!')
		} catch (error) {
			console.error('Erro ao criar vídeos:', error)
		}
	}

	async createTeachers() {
		try {
			const teachers = await this.prisma.teacher.createMany({
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

			console.log('Professores criados com sucesso!')
		} catch (error) {
			console.error('Erro ao criar professores:', error)
		}
	}

	async seed() {
		await this.createVideos()

		console.log('Seed concluído com sucesso!')
		await this.prisma.$disconnect()
	}
}

const seeder = new Seeder()
seeder.seed()
