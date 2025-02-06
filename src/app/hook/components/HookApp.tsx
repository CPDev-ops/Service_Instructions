export interface HookInstructiveProps {
    source: string
    title: string
}
export function HookInstructive({ source, title }: HookInstructiveProps) {
    return (
        <iframe
            src={source}
            title={title}
            style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
    )
}