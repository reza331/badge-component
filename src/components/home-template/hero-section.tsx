import ScrollWrapper from "../scroll-wrapper"

function Hero() {
    return (
        <ScrollWrapper>
            <div className="w-full h-screen flex items-center justify-center relative">
                <div className="w-150 h-50 bg-[#5270c8] blur-2xl opacity-20 rounded-3xl absolute"></div>
                <div className="text-center">
                    <div className="text-3xl font-bold">Badge Component Demo</div>
                    <div className="opacity-80 mt-2">Badge component inspired by shadcn/ui</div>
                </div>
            </div>
        </ScrollWrapper>
    )
}

export default Hero