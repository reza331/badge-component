import { AiFillCheckCircle } from "react-icons/ai"; 
import { DiReact } from "react-icons/di"; 
import { AiFillBell } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Image from "next/image"
import ScrollWrapper from "../scroll-wrapper"
import SectionTitle from "../section-title"
import Badge from "../badge";
import { CgMoreVerticalAlt } from "react-icons/cg";

const ProfileScenario = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-screen">
      <SectionTitle title='Profile scenario' />
      <ScrollWrapper delay={100}>
        <div className='w-fit h-fit neu mt-10 rounded-3xl p-5'>
          <div className="flex items-center justify-center gap-2">
            <Image className="rounded-full" src={'/profile.jpg'} alt="avatar" width={40} height={40} />
            <span className="font-semibold">Reza</span>
            <div className="ms-20 relative">
              <Badge className="absolute -top-3 -right-3">2</Badge>
              <BsFillEnvelopeFill className="text-3xl" />
            </div>
            <div className="ms-5 relative">
              <Badge className="absolute -top-3 -right-3">5</Badge>
              <AiFillBell className="text-3xl" />
            </div>
            <div className="ms-2">
              <CgMoreVerticalAlt className="text-3xl" />
            </div>
          </div>
          <div className="w-full h-px bg-zinc-400 my-5" />
          <div className="neu_inner p-5 rounded-2xl">
            <div className="flex items-center gap-1 font-semibold"><DiReact className="text-2xl" /> Front-end Developer</div>
            <div className="mt-3 flex items-center gap-2">
              <Badge variant="success">PREMIUM</Badge>
              <Badge>ACTIVE</Badge>
              <Badge variant="neutral">TOP CONTRIBUTOR</Badge>
            </div>
            <div className="flex items-center gap-1 text-sm mt-3"><AiFillCheckCircle className="text-2xl" />Member since 2024</div>
          </div>
        </div>
      </ScrollWrapper>
    </div>
  )
}

export default ProfileScenario