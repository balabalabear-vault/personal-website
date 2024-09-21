import Link from "next/link"

interface IJLink {
    href: string;
    newTab: boolean;
    noDecoration?: boolean;
    children?: React.ReactNode;
}

export default function JLink(
    {
        children,
        href,
        newTab,
        noDecoration=true,
    }: Readonly<IJLink>,
) {
    return (
        <Link
            href={href}
            target={newTab ? '_blank' : '_self'}
            style={{
                textDecoration: noDecoration ? 'none' : 'Highlight',
                color: noDecoration ? 'rgba(0, 0, 0, 0.87)' : '-webkit-link'
            }}
        >
            {children && children}
        </Link>
    )
}