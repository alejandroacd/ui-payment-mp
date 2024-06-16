import FadeInSection from "../FadeInSection"
import Box from "./components/Box"
import Build from './svgs/Group.svg'
import Execute from './svgs/Group2.svg'
import Connect from './svgs/Group3.svg'
import './styles.modules.css'
const MainContent = async () => {
    return (
        <main className="p-6 mb-24 flex flex-col md:w-5/6 justify-center items-center">
            <FadeInSection delay={300}>
                <h1 className="font-semibold text-[64px] text-center"> WHAT MAKES IT UNIQUE</h1>
            </FadeInSection>

            <FadeInSection delay={700}>
                <p className="mt-12 text-center text-[28px] md:w-3/4 m-auto">Beamdust accelerates data integration and governance through an interactive AI layer, ensuring portability across any infrastructure and sustaining the entire data lifecycle.</p>
            </FadeInSection>

            <div className="container  mt-24">
                <ul id="cards">
                    <li className="card" id="card1">
                        <Box title="PAAS" subtitle="build" icon={Build}>
                            <p className="text-[18px] mt-6">
                                Beamdust accelerates data integration and governance through an interactive AI layer, ensuring portabilit
                            </p>
                            <p className="text-[18px] mt-6">
                                Beamdust accelerates data integration and governance</p>

                            <p className="text-[18px] mt-6">
                                governance through an interactive AI layer, ensuring portability across any infrastru
                            </p>

                        </Box>
                    </li>
                    <li className="card" id="card2">
                        <Box title="ARGUMENTED GOVERNANCE" subtitle="execute" icon={Execute}>
                            <p className="text-[18px] mt-6">
                                Beamdust accelerates data integration and governance through an interactive AI layer, ensuring portabilit
                            </p>
                            <p className="text-[18px] mt-6">
                                Beamdust accelerates data integration and governance</p>

                            <p className="text-[18px] mt-6">
                                governance through an interactive AI layer, ensuring portability across any infrastru
                            </p>

                        </Box>
                    </li>
                    <li className="card" id="card3">
                        <Box title="PORTABILITY" subtitle="connect" icon={Connect}>
                            <p className="text-[18px] mt-6">
                                Beamdust accelerates data integration and governance through an interactive AI layer, ensuring portabilit
                            </p>
                            <p className="text-[18px] mt-6">
                                Beamdust accelerates data integration and governance</p>

                            <p className="text-[18px] mt-6">
                                governance through an interactive AI layer, ensuring portability across any infrastru
                            </p>

                        </Box>
                    </li>

                </ul>
            </div>

        </main>
    )
}

export default MainContent