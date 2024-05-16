'use client'

import { Suspense } from 'react'

import { MovieContainer, MovieContainerFallback } from '@/entities/ui'
import { QUERY_KEY } from '@/shared/api/constants/query-key'
import { getPopular, getTopRated, getUpComing } from '@/shared/api/lib'
import RQProvider from '@/shared/lib/react-query/RQProvider'

import styles from './main-list.module.scss'

export function MainList() {
  return (
    <RQProvider>
      <div className={styles.container}>
        <Suspense fallback={<MovieContainerFallback />}>
          <MovieContainer
            title={'사람들에게 인기있는 영화'}
            description={'전 세계 관객들이 사랑하는 영화들을 만나보세요'}
            href={'/list/popular'}
            queryKey={QUERY_KEY.popular('1')}
            queryFn={() => getPopular({ pageParam: 1 })}
          />
        </Suspense>
        <Suspense fallback={<MovieContainerFallback />}>
          <MovieContainer
            title={'최신 개봉 영화'}
            description={'개봉 예정인 신작 영화들을 미리 만나보세요'}
            href={'/list/upcoming'}
            queryKey={QUERY_KEY.upComing('1')}
            queryFn={() => getUpComing({ pageParam: 1 })}
          />
        </Suspense>
        <Suspense fallback={<MovieContainerFallback />}>
          <MovieContainer
            title={'별점이 높은 영화'}
            description={'평론가와 관객 모두에게 인정받은 최고의 작품들'}
            href={'/list/top-rated'}
            queryKey={QUERY_KEY.topRated('1')}
            queryFn={() => getTopRated({ pageParam: 1 })}
          />
        </Suspense>
      </div>
    </RQProvider>
  )
}
