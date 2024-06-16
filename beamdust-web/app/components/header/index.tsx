import Image from "next/image"
import Link from "next/link"
import Logo from './Logo.svg'
import './styles.modules.css'
const Header = async () => {
    return (
        <header className="header flex justify-center md:justify-between p-4 md:p-8">
            <Image width={200} height={200} src={Logo} alt="Beamdust Logo" />
            <nav className="hidden md:flex text-[22px] mr-12">
                <ul className="flex flex-row gap-12">
                    <Link href="/" className="hover-effect"> About us </Link>
                    <Link href="/" className="hover-effect">  Platform </Link>
                    <Link href="/" className="hover-effect"> Get in touch </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header

