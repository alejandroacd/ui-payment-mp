import './styles.modules.css'
import FadeInSection from "../../FadeInSection"
import Image from "next/image"
interface BoxProps {
    title: string,
    subtitle: string,
    icon: string,
    children: React.ReactNode,
}
const Box = async ({ title, subtitle, icon, children }: BoxProps) => {
    return (
        <FadeInSection delay={1000}>
        <article  className="md:max-w-[1017px] flex flex-row main-card" >
            <h1 className="w-2/6 text-[36px] font-semibold">{title}</h1>
            <div className="main-box w-3/4  min-h-[500px]">
                <Image  src={icon} alt={"Icono de la tarjeta"} width={200} height={200} />
                <div className="w-5/6 ml-12">
                <h1 className="font-semibold uppercase text-[36px]">{subtitle}</h1>
                <div className="leading-[30px]">
                    {children}
                </div>
                </div>
                
            </div>
        </article>
        </FadeInSection>

    )
}

export default Box