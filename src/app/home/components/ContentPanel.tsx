'use client'
import { HookInstructive, HookInstructiveProps } from '@/app/hook/components/HookApp'
import { useRef } from 'react'
export default function ContentPanel({ source, title, code }: HookInstructiveProps) {
    const htmlRef = useRef<HTMLDivElement>(null)
    return (
        <div className={` ${code ? 'lg:w-1/2' : 'lg:w-full'} overflow-y-auto bg-white rounded-3xl shadow-lg lg:ml-4 my-8 lg:my-0`}>
            <div className="p-4 border-b flex-col items-center justify-between">
                <h2 className="text-lg text-black ">Manual de Usuario</h2>
            </div>
            <div ref={htmlRef} className="h-[calc(100vh-10rem)] object-center text-center flex justify-center items-center">
                {/* DATA QUE LLEGARIA */}
                <HookInstructive source={source} title={title} />
            </div>
        </div >
    )
}