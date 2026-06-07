import { getPageData } from '@/data/db'
import Portfolio from './components/Portfolio'

export const revalidate = 60 // Revalidate page data every 60 seconds

export default async function Home() {
  const data = await getPageData()
  return <Portfolio data={data} />
}
