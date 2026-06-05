import Badge, { Variant } from "../badge"
import ScrollWrapper from "../scroll-wrapper"
import SectionTitle from "../section-title"

const variants: Variant[] = ['primary', 'success', 'destructive', 'warning', 'neutral']

const VariantShowcaseSection = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center h-screen px-5">
            <SectionTitle title='Variants showcase' />
            <ScrollWrapper delay={100}>
                <div className='w-fit h-fit neu mt-10 rounded-3xl p-5'>
                    {/* render solids */}
                    <div className="flex items-center justify-center gap-5 flex-wrap">
                        {variants.map((variant) => <Badge key={variant} appearance='solid' variant={variant} >{variant.toUpperCase()}</Badge>)}
                    </div>
                    {/* render subtle */}
                    <div className="flex items-center justify-center gap-5 mt-5 flex-wrap">
                        {variants.map((variant) => <Badge key={variant} appearance='subtle' variant={variant} >{variant.toUpperCase()}</Badge>)}
                    </div>
                </div>
            </ScrollWrapper>
        </div>
    )
}

export default VariantShowcaseSection