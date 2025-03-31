'use client'

import { IframePanel } from "./components/IframePanel";
import ContentPanel from "./components/ContentPanel";
import { useSearchParams } from "next/navigation";
import { parseQueryToBody } from "@/lib/utils";
import React, { Suspense } from 'react'

function HomeContent() {
    // Obtén los parámetros de búsqueda (query parameters)
    const searchParams = useSearchParams();
    const queryValue = searchParams.get('nameApp'); // Obtén el valor de 'queryValue'
    console.log(queryValue)
    const value = parseQueryToBody(queryValue)
    return (
        <div className="min-h-screen">
            {/*  <Navbar title={value.title} /> */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="lg:flex gap-4">
                    {value.code && (
                        <IframePanel
                            code={value.code}
                        />
                    )}
                    <ContentPanel code={value.code} source={value.source} title={value.titleCode} />
                </div>
            </main>
        </div>
    )
}

export default function PageHome() {
    return (
        <Suspense fallback={<div>Cargando...</div>}>
            <HomeContent />
        </Suspense>
    )
}

