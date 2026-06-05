import SectionTitle from '../section-title'
import { GiMoneyStack } from 'react-icons/gi'
import { BsFillBoxFill } from 'react-icons/bs'
import { BiServer } from 'react-icons/bi'
import KpiCard, { KpiProps } from '../kpi-card'
import ScrollWrapper from '../scroll-wrapper'

const cards:KpiProps[] = [
    {id:1 , title:'Revenue' , icon:GiMoneyStack , value:'$12.5k' , color:'#00bba7' , badgeOption:{text:'+12%' , variant:'success'}},
    {id:2 , title:'Orders' , icon:BsFillBoxFill , value:'142' , color:'#0092b8' , badgeOption:{text:'ACTIVE' , variant:'primary'}},
    {id:3 , title:'Servers' , icon:BiServer , value:'8' , color:'#71717b' , badgeOption:{text:'HEALTHY' , variant:'success'}},
]

const DashboardScenario = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center h-screen">
            <SectionTitle title='Dashboard scenario' />
            <div className='w-fit mt-10 flex flex-col lg:flex-row items-center justify-center gap-5'>
              {cards.map( card => <ScrollWrapper delay={card.id * 200} key={card.id}><KpiCard {...card} /></ScrollWrapper> )}
            </div>
        </div>
    )
}

export default DashboardScenario