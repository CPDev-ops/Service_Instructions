/* import Image from "next/image" */

/* import { useRouter } from "next/navigation" */
/* import { MdArrowBackIos } from "react-icons/md" */

interface NavbarProps {
    title: string
}
export function Navbar({ title }: NavbarProps) {
  /*   const router = useRouter() */
    return (
        <header className="bg-white border-b w-full top-0 z-10 sm:static sm:border-none fixed">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center justify-between">
                       {/*  <MdArrowBackIos size={20} onClick={() => router.back()} className="text-black mr-2" /> */}
                        <h1 className="text-lg mx-auto text-gray-900">
                            {title}
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}