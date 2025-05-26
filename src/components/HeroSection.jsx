import ButtonCallToAction from "./ButtonCallToAction";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 py-20 max-w-7xl mx-auto"
        >
            <div className="w-full md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold text-[#003049] leading-tight mb-4">
                    Your heart speaks. <br />
                    <span className="text-[#C1121F]">We help you listen.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                    In just a few steps, assess your cardiac risk using clinical data. <br />
                    Prevention starts with information.
                </p>

                <ButtonCallToAction />
            </div>

            {/* Imagem */}
            <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
                <img
                    src="/public/herosection-horizontal.png"
                    alt="Heart care illustration"
                    className="max-w-full h-auto"
                />
            </div>
        </section>
    );
};

export default HeroSection;
