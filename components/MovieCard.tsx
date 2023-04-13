import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi"
import FavouriteButton from "./FavouriteButton";
import { useRouter } from "next/router";
import useInfoModal from "../hooks/useInfoModal";

 interface MovieCardProps {
    data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({
    data
}) => {
    const router = useRouter();
    const { openModal } = useInfoModal();

    return (
        <div className="group col-span relative h-[12vw]">
            <img className="cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 
            sm:group-hover:opacity-0 delay-300 w-full h-[12vw]" 
            src={data.thumbnailUrl} alt="Thumbnail " />
            <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible
            sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw]
            group-hover:translate-x-[2vw] group-hover:opacity-100">
                <img className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]" src={data.thumbnailUrl} alt="Thumbnail" />
                <div className="z-10 bg-blue-300 p-2 lg:p-4 absolute w-full transiton shadow-md rounded-b-md">
                    <div className="flex flex-row gap-3 items-center">
                        <div 
                        className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white border-black border-2 rounded-full flex justify-center items-center transition hover:bg-neutral-300"
                        onClick={() => router.push(`/watch/${data?.id}`)}>
                            <BsFillPlayFill size={30} />
                        </div>
                        <FavouriteButton movieId={data?.id}/>
                        <div onClick={() => openModal(data?.id)}

                        className="cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10
                        border-black border-2 rounded-full flex justify-center items-center 
                        transition hover:border-neutral-600">
                            <BiChevronDown className="text-black  group-hover/item:text-neutral-600" size={30}/>
                        </div>
                    </div>
                    <p className="text-rose-500 font-semibold mt-4">
                        New <span className="text-black">2023</span>
                    </p>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-black text-[10px] lg:text-sm">{data.duration}</p>
                    </div>
                    <div className="flex flex-row mt-4 gap-2 items-center">
                        <p className="text-black text-[10px] lg:text-sm">{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;