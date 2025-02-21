"use client"


import { experiencemap, portfolioExperienceSW, } from '@/app/utils/global'
import PortfolioExperienceCard from './PortfolioExperienceCard'

const PortfolioExperienceMap = () => {
    return (
        <>
            <div className='flex-1 flex flex-col  gap-8'>
                {
                    portfolioExperienceSW.map((SW: experiencemap, index) => (
                        <PortfolioExperienceCard key={index}
                            desc={SW.desc}
                            title={SW.title}
                        />
                    ))
                }
            </div>
        </>

    )
}

export default PortfolioExperienceMap