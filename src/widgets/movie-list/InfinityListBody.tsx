"use client"

import { Suspense, useMemo } from "react";

import { MovieInfinityList } from "@/entities/ui";
import { getPopular, getTopRated, getUpComing } from "@/shared/api/lib";
import { MovieType } from "@/shared/api/model/movie-info";

import styles from './infinity-list-body.module.scss'

type Props = {
    type: MovieType
}

export function InfinityListBody({ type }: Props) {
    const { qureyFn, queryKey } = useMemo(() => {
        switch (type) {
            case "popular":
                return { queryKey: ['infinity-popular'] as [string], qureyFn: getPopular }
            case "upcoming":
                return { queryKey: ['infinity-upcoming'] as [string], qureyFn: getUpComing }
            case "top-rated":
                return { queryKey: ['infinity-top-rated'] as [string], qureyFn: getTopRated }
        }
    }, [type])

    return <Suspense>
        <div className={styles.container}><MovieInfinityList queryKey={queryKey} qureyFn={qureyFn}/></div>
    </Suspense>
}
