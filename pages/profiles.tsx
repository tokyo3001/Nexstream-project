import { NextPageContext } from "next"
import { getSession } from "next-auth/react"
import useCurrentUser from "../hooks/useCurrentUser";
import { useRouter } from "next/router";

//use getserversideprops when you need to render a page whose data must be fetched at request time
//next.js will pre-render this page on each request
export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }

    return {
        props: {}
    }
}

const Profiles = () => {
    const router = useRouter();
    const { data: user } =  useCurrentUser();

    return (
        <div className="flex items-center h-full justify-center">
            <div className="flex flex-col">
                <h1 className="text-3xl md:text-6xl text-black text-center">Who is watching?</h1>
                <div className="flex items-center justify-center gap-8 mt-10">
                    <div onClick={() => router.push('/')}>

                        <div className="group flex-row w-44 mx-auto">
                            <div 
                               className="
                                  w-44
                                  h-44
                                  rounded-full
                                  flex
                                  item-center
                                  justify-center
                                  border-4
                                  border-transparent
                                  group-hover:cursor-pointer
                                  group-hover:border-black
                                  overflow-hidden
                                  "
                                  >
                                    <img src="/images/profile.png" alt="Profile" />
                            </div>
                            <div className="mt-4 text-gray-800 text-2xl text-center group-hover:text-black
                            ">
                                {user?.name}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profiles