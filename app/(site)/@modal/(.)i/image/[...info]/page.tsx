import { MovieImageModal } from "@/entities/modal";

type Props = {
    params: { info: [string, "poster" | "backdrop", string] }
}

export default function Page({ params }: Props) {
    return <MovieImageModal movieId={params.info[0]} imageType={params.info[1]} imageUrl={params.info[2]}/>
}
