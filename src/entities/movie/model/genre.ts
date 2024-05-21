export interface Genre {
  id: number
  name: GenresName
}

export type GenresName =
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