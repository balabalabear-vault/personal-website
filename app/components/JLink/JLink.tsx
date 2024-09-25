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
        noDecoration=false,
    }: Readonly<IJLink>,
) {
    return (
        <Link
            href={href}
            target={newTab ? '_blank' : '_self'}
            style={{
                textDecoration: noDecoration ? 'none' : 'underline',
                color: noDecoration ? '#ffffff' : 'bisque'
            }}
        >
            {children && children}
        </Link>
    )
}