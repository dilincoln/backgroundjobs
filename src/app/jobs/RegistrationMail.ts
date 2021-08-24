import Mail from '../lib/Mail'

type Request = {
	user: {
		name: string
		email: string
	}
}

export default {
	key: 'RegistrationMail',
	async handle({ data }: { data: Request }) {
		const { user } = data
		await Mail.sendMail({
			from: 'Queue Test <queue@test.com.br>',
			to: `${user.name} <${user.email}>`,
			subject: 'Cadastro de usuário',
			html: `Olá, ${user.name}, bem-vindo ao sistema de filas da Mutual :D`,
		})
	},
}
