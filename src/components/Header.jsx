import ButtonCallToAction from "./ButtonCallToAction"

const Header = () => {
    return (
        <header className="md:fixed bg-white top-0 left-0 w-full h-20 z-50 p-5 mx-auto ">
            <nav className="flex justify-around items-center">
                <a href="#home">
                    <img src="/public/logo-principal.svg" alt="logotipo BeHeart" className="h-6 md:h-8 w-auto" />
                </a>

                <ul className="text-sm md:text-base font-medium hidden md:block ">
                    <div className="flex flex-row gap-1.5  md:gap-5">
                        <li> <a href="#home" className="hover:text-[#C1121F] transition">Home</a></li>
                        <li> <a href="#how" className="hover:text-[#C1121F] transition">Our Mission</a></li>
                        <li> <a href="#how" className="hover:text-[#C1121F] transition">How It Works</a></li>
                    </div>

                </ul>

                <div className="hidden md:block">
                    <ButtonCallToAction />
                </div>
            </nav>
        </header>
    )
}
export default Header