import ButtonCallToAction from "./ButtonCallToAction";

const HeroSection = () => {
    return (
        <section id="home" className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0 hidden md:block z-0 md:mt-15">
                <img
                    src="/hero-gif.gif"
                    alt="Heart care illustration"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 h-full max-w-7xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold text-[#003049] leading-tight mb-4">
                    Your heart speaks. <br />
                    <span className="text-[#C1121F]">We help you listen.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-xl">
                    Quickly evaluate cardiac risk using clinical indicators. <br />
                    A tool designed for healthcare professionals to support faster, <br />data-driven decisions.
                </p>
                <ButtonCallToAction />
            </div>
        </section>
    );
};

export default HeroSection;
