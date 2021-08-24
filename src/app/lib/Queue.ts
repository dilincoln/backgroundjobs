import Queue from 'bull'
import redisConfig from '../../config/redis'

type Job = {
	key: string
	handle({ data }: any): void
	options?: object
}

import * as jobs from '../jobs'

const queues = Object.values(jobs).map((job: Job) => ({
	bull: new Queue(job.key, {
		redis: redisConfig,
	}),
	name: job.key,
	handle: job.handle,
	options: job.options,
}))

export default {
	queues,
	add(name: string, data: Object) {
		const queue = this.queues.find((queue) => queue.name === name)

		return queue?.bull.add(data)
	},
	process() {
		return this.queues.forEach((queue) => {
			queue.bull.process(queue.handle)

			queue.bull.on('failed', (job, err) => {
				console.log('Job failed', queue.name, job.data)
				console.log(err)
			})

			queue.bull.on('completed', (job) => {
				console.log('Job completed', queue.name, job.data)
			})
		})
	},
}
