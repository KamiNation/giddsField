"use client"
import PortfolioHero from './Hero/PortfolioHero'
import PortfolioAbout from './About/PortfolioAbout'
import PortfolioExperience from './Experience/PortfolioExperience'
import PortfolioProject from './Project/PortfolioProject'




const Portfolio = () => {
    return (
        <section className='w-[100%] 800px:w-[92%] m-auto  h-full'>
            <PortfolioHero />
            <PortfolioAbout />
            <PortfolioExperience />
            <PortfolioProject />
        </section>
    )
}

export default Portfolio