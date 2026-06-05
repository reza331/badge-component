import ScrollWrapper from './scroll-wrapper'

const SectionTitle = ({ title }: { title: string }) => {
    return (
        <ScrollWrapper delay={50}>
            <div className="w-full flex items-center justify-center relative">
                <div className="w-110 h-20 bg-[#5270c8] blur-2xl opacity-25 rounded-3xl absolute z-50"></div>
                <div className="text-center">
                    <div className="opacity-80 mt-2 font-semibold">{title}</div>
                </div>
            </div>
        </ScrollWrapper>
    )
}

export default SectionTitle