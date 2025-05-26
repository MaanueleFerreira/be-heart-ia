import ButtonCallToAction from "./ButtonCallToAction"

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full h-20 z-50 p-5  mx-auto ">
            <nav className="flex justify-around items-center">
                <img src="/public/LOGO HORIZONTAL (2).svg" alt="logotipo BeHeart" className="h-6 md:h-8 w-auto" />

                <ul className="flex gap-5 text-sm md:text-base font-medium">
                    <li> <a href="#home" className="hover:text-[#C1121F] transition">Home</a></li>
                    <li> <a href="#about" className="hover:text-[#C1121F] transition">About Us</a></li>
                    <li> <a href="#how" className="hover:text-[#C1121F] transition">How It Works</a></li>
                </ul>

                <ButtonCallToAction />
            </nav>
        </header>
    )
}
export default Header