import './styles.modules.css'
import FadeInSection from "../FadeInSection"
import Chat from './chat.svg'
import Image from "next/image"
const Hero = async () => {
    return (
        <>
            <section className="mt-12 md:mt-28 flex justify-center flex-col  p-8 items-center w-full md:w-5/6">
                <FadeInSection delay={700}>
                    <h1 className="text-4xl md:text-[64px] lg:mr-12 uppercase text-center font-semibold"> Even the smartest AI
                    </h1>
                    <h1 className="md:mt-16 text-center text-4xl md:text-[64px] font-semibold uppercase">can´t compensate for bad data</h1>

                    <p className="md:w-3/4 text-center m-auto mt-12 text-base md:text-[28px] font-normal md:mt-12 md:text-center md:leading-[44px]">Beamdust emerges as the only platform to create a Data Fabric, facilitaiting efficient data orchestration with unique approach of augmented governance.</p>
                </FadeInSection>
                <FadeInSection delay={1000}>
                    <div className="w-100 flex justify-center">
                        <button className="mt-16 button-hero p-4 text-base md:text-lg font-semibold md:w-[278px] md:h-[67px]"> GET IN TOUCH </button>
                    </div>
                </FadeInSection>
            </section>
            <section className='w-full'>
                <FadeInSection delay={500}>
                    <Image width={400} height={400} src={Chat} alt="Chat" className='w-full md:w-3/4 m-auto' />
                </FadeInSection>
            </section>
        </>

    )
}

export default Hero