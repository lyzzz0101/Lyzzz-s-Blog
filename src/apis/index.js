// const dayjs = require('dayjs')
import { createClient } from "@sanity/client"

console.log("sanity", createClient)

const client = createClient({
  projectId: "k64luji7",
  dataset: "production",
  useCdn: true, // 如果您想使用CDN缓存,设置为true
  // apiVersion: dayjs().format('YYYY-MM-DD')
})

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  return posts
}

export async function getCategory() {
  const category = await client.fetch(`*[_type == "category"]`)
  return category
}
