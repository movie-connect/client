import { ResponseData } from '@/entities/model'

/*
곧 개봉될 영화의 정보를 불러옵니다.
 */
export async function getUpComing(page = 1): Promise<ResponseData> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_TMDB_BASE_URL}/movie/upcoming?language=ko-KR&page=${page}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
    },
    next: {
      tags: ['movies', 'upcoming'],
    },
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
