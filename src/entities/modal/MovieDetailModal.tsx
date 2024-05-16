'use client'

import { Suspense } from 'react'

import { MovieDetailContent, MovieDetailContentSkeleton } from '@/entities/modal'
import { Modal } from '@/shared/ui/Modal'

type Props = {
  movieId: string
}

export function MovieDetailModal({ movieId }: Props) {
  return (
    <Modal>
      <Modal.Content>
        <Suspense fallback={<MovieDetailContentSkeleton />}>
          <MovieDetailContent movieId={movieId} />
        </Suspense>
      </Modal.Content>
    </Modal>
  )
}
