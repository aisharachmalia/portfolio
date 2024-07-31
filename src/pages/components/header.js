import Link from 'next/link'

export const Header = () => {
    return (
        <header>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/blog'}> My Blog</Link>
            </nav>
        </header>
    )
}