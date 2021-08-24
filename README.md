# Background Job

This is an example to make background jobs with [Bull](https://github.com/OptimalBits/bull) and [Redis](https://redis.io/). In this example i use to send queued emails

Also include [Bull Board](https://github.com/felixmosh/bull-board) for monitoring

## Uses

### Install

```bash
yarn install
```

or

```bash
npm install
```

### Environment Variables

Rename .env.example to .env and fill with Redis and e-mail credentials

### Run

```bash
yarn dev
```

or

```bash
npm run dev
```

### Test

Access localhost:3333/admin to monitoring queues and make a POST request to /users endpoint with body:

```json
{
	"name": "Example",
	"email": "example@example.com",
	"password": "123456"
}
```

#

## Libs

[<img src="https://camo.githubusercontent.com/0566752248b4b31b2c4bdc583404e41066bd0b6726f310b73e1140deefcc31ac/68747470733a2f2f692e636c6f756475702e636f6d2f7a6659366c4c376546612d3330303078333030302e706e67" height="50" />](https://github.com/expressjs/express)

[<img src="https://raw.githubusercontent.com/nodemailer/nodemailer/master/assets/nm_logo_200x136.png" height="50" />](https://github.com/nodemailer/nodemailer)

[<img src="https://github.com/OptimalBits/bull/raw/develop/support/logo@2x.png" height="50" />](https://github.com/OptimalBits/bull)

<a href="https://github.com/felixmosh/bull-board" style="display: flex; align-items: center;">
<img src="https://raw.githubusercontent.com/felixmosh/bull-board/master/packages/ui/src/static/images/logo.svg" height="50" />
<span>BullBoard</span>
</a>

[<img src="https://redis.io/images/redis-white.png" height="50" />](https://redis.io/)
