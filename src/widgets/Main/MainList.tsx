'use client'

import { Suspense } from 'react'

import { getPopular, getTopRated, getUpComing } from '@/entities/lib'
import { MovieContainer, MovieContainerFallback } from '@/entities/ui'
import RQProvider from '@/shared/lib/react-query/RQProvider'

import styles from './main-list.module.scss'

export function MainList() {
    const getUpComingInfo = {
        queryKey: ['movies', 'popular', 1] as [string, string, number],
        queryFn: getUpComing,
    }
    const getTopRatedInfo = {
        queryKey: ['movies', 'topRated', 1] as [string, string, number],
        queryFn: getTopRated,
    }
    const getPopularInfo = {
        queryKey: ['movies', 'upcoming', 1] as [string, string, number],
        queryFn: getPopular,
    }

    return (
        <RQProvider>
            <div className={styles.container}>
                <Suspense fallback={<MovieContainerFallback/>}>
                    <MovieContainer
                        title={'지금 인기있는 영화'}
                        description={'인기있는 영화를 지금 바로 만나보세요!'}
                        href={'/new_movie'}
                        queryInfo={getPopularInfo}
                    />
                </Suspense>
                <Suspense fallback={<MovieContainerFallback/>}>
                    <MovieContainer
                        title={'상영 예정중인 영화'}
                        description={'상영 예정인 영화를 미리 만나보세요!'}
                        href={'/new_movie'}
                        queryInfo={getUpComingInfo}
                    />
                </Suspense>
                <Suspense fallback={<MovieContainerFallback/>}>
                    <MovieContainer
                        title={'인기가 많은 영화'}
                        description={'과거부터 인기가 많은 영화를 다시 확인해보세요'}
                        href={'/new_movie'}
                        queryInfo={getTopRatedInfo}
                    />
                </Suspense>
            </div>
        </RQProvider>
    )
}