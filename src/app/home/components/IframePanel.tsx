import { useState } from "react"

interface IframePanelProps {
    code: string
}

export function IframePanel({ code }: IframePanelProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className={` rounded-3xl shadow-lg transition-all pt-12 lg:py-0 duration-300 w-full lg:w-1/2`}>
            {/* Iframe Section */}
            {isLoading && (
                <div className="flex items-center justify-center min-h-[640px]">
                    {/* Aquí puedes usar tu propio componente de carga o un spinner */}
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
                    <p className="ml-4 animate-pulse">Cargando manual de usuario...</p>
                </div>
            )}
            <iframe
                className={`rounded-none ${isLoading ? 'hidden' : 'block'}`}
                src={`https://app.tango.us/app/embed/${code}`}
                style={{ minHeight: '640px' }}
                sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin"
                title="MANUAL DE USUARIO"
                width="100%"
                height="100%"
                referrerPolicy="strict-origin-when-cross-origin"
                frameBorder="0"
                allowFullScreen
                onLoad={handleIframeLoad} // Detecta cuando el iframe ha terminado de cargar
            ></iframe>
        </div>
    )
}
