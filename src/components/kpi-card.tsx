import { IconType } from "react-icons"
import Badge, { Variant } from "./badge"
import { FC } from "react"

export interface KpiProps {
    id:number,
    title: string,
    value: string,
    icon: IconType,
    color: string,
    badgeOption: { variant: Variant, text: string },
}

const KpiCard:FC<KpiProps> = ({title , color , value , badgeOption , icon:Icon}) => {
    return (
        <div className="w-70 neu p-3 rounded-3xl flex justify-between items-center gap-10">
            <div>
                <div style={{color}} className="flex gap-2 items-center">
                    <Icon className="size-7" />
                    <div className="font-bold ">{title} </div>
                </div>
                <Badge className='ms-2 mt-2' variant={badgeOption.variant}>{badgeOption.text}</Badge>
            </div>
            <div className="neu_inner py-2 px-5 rounded-full text-lg font-semibold">
                {value}
            </div>
        </div>
    )
}

export default KpiCard