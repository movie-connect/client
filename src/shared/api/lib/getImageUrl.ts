export const getImageUrl = (path: string, size: string) => {
    return `https://image.tmdb.org/t/p/${size}${path}`
}
