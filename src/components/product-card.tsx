import { FC } from 'react'
import Badge from './badge'
import { IoCartSharp } from 'react-icons/io5'

export interface ProductProps {
    id:number
    name:string
    price:number
    img:string
    isAvailable:boolean
}

const ProductCard: FC<ProductProps> = (props) => {
    return (
        <div className="neu w-50 h-fit rounded-2xl overflow-hidden">
            <img className="w-full h-50%" src={props.img} alt="" />
            <div className="font-semibold px-3 line-clamp-1 mt-2 text-center">{props.name}</div>
            <div className="font-semibold px-3 line-clamp-1 mt-1 opacity-80 text-center text-xl">$ {props.price}</div>
            <div className="flex justify-center px-3 mt-2">
                {props.isAvailable && <Badge variant="success">In stock</Badge>}
                {!props.isAvailable && <Badge variant="destructive">Out of stock</Badge>}
            </div>
            <button className="text-sm mt-4 w-full h-11 neu font-semibold flex items-center justify-center gap-2 cursor-pointer">
                <IoCartSharp className="text-xl" />
                Add to cart
            </button>
        </div>
    )
}

export default ProductCard