import ProductCard, { ProductProps } from "../product-card"
import ScrollWrapper from "../scroll-wrapper"
import SectionTitle from "../section-title"


const mockedProducts: ProductProps[] = [
  { id: 1, img: '/product1.webp', name: 'Luxury Watch A', price: 5000, isAvailable: true },
  { id: 2, img: '/product2.webp', name: 'Luxury Watch B', price: 2000, isAvailable: false },
  { id: 3, img: '/product3.webp', name: 'Luxury Watch C', price: 3000, isAvailable: false },
]


const ProductScenario = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <SectionTitle title='Product scenario' />
      <div className='w-fit mt-10 flex items-center justify-center gap-5 flex-wrap'>
        {mockedProducts.map(product => <ScrollWrapper delay={product.id * 200} key={product.id}><ProductCard {...product} /></ScrollWrapper>)}
      </div>
    </div>
  )
}

export default ProductScenario