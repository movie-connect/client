export type GenresTitle =
  | '액션'
  | '모험'
  | '애니메이션'
  | '코미디'
  | '범죄'
  | '다큐멘터리'
  | '드라마'
  | '가족'
  | '판타지'
  | '역사'
  | '공포'
  | '음악'
  | '미스터리'
  | '로맨스'
  | 'SF'
  | 'TV 영화'
  | '스릴러'
  | '전쟁'
  | '서부'
  | '액션 & 어드벤처'
  | '키즈'
  | '뉴스'
  | '리얼리티'
  | 'SF & 판타지'
  | '연속극'
  | '토크쇼'
  | '전쟁 & 정치'

export type Genre = { title: GenresTitle; id: number }

export const GENRES: Record<number, Genre> = {
  12: { title: '모험', id: 12 },
  14: { title: '판타지', id: 14 },
  16: { title: '애니메이션', id: 16 },
  18: { title: '드라마', id: 18 },
  27: { title: '공포', id: 27 },
  28: { title: '액션', id: 28 },
  35: { title: '코미디', id: 35 },
  36: { title: '역사', id: 36 },
  37: { title: '서부', id: 37 },
  53: { title: '스릴러', id: 53 },
  80: { title: '범죄', id: 80 },
  99: { title: '다큐멘터리', id: 99 },
  878: { title: 'SF', id: 878 },
  9648: { title: '미스터리', id: 9648 },
  10402: { title: '음악', id: 10402 },
  10749: { title: '로맨스', id: 10749 },
  10751: { title: '가족', id: 10751 },
  10752: { title: '전쟁', id: 10752 },
  10759: { title: '액션 & 어드벤처', id: 10759 },
  10762: { title: '키즈', id: 10762 },
  10763: { title: '뉴스', id: 10763 },
  10764: { title: '리얼리티', id: 10764 },
  10765: { title: 'SF & 판타지', id: 10765 },
  10766: { title: '연속극', id: 10766 },
  10767: { title: '토크쇼', id: 10767 },
  10768: { title: '전쟁 & 정치', id: 10768 },
  10770: { title: 'TV 영화', id: 10770 },
}
