import Redis from 'ioredis'

async function main() {
  const redisURL = process.env.REDIS_URL || ''
  const { POD_NUMBER } = process.env
  const redis = new Redis(redisURL)

  let total = 0

  do {
    const id = await redis.lpop('queue')

    if(id) {
      total++
      console.log(`PodNumber #${POD_NUMBER} processing id ${id}. Total: ${total} requests`)
    }
  } while(true)
};

main();