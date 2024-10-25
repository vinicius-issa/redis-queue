import Redis from 'ioredis'
import { randomUUID }  from 'node:crypto';

async function wait(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {resolve()}, ms)
  })
}

function getDurationInSeconds(start: Date) {
  const end = new Date();
  const interval = end.getTime() - start.getTime();

  return interval/1000
}

async function main() {
  const {
    RATE, // req/second
    DURATION // in seconds
  } = process.env
  const redisURL = process.env.REDIS_URL || ''
  const redis = new Redis(redisURL)

  const MAX_DURATION = Number(DURATION) || 0
  const INTERVAL = 1000/Number(RATE)

  let duration = 0
  const start = new Date()
  do {
    const id = randomUUID()
    redis.lpush('queue', id)

    await wait(INTERVAL)
    duration = getDurationInSeconds(start)
  } while(duration < Number(MAX_DURATION))
};

main();