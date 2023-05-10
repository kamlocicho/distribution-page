import Link from "next/link";
import { ArrowDownIcon } from '@heroicons/react/24/solid'

const IntroSection = () => {
    return (
        <section id="intro" className="w-full h-full bg-white flex items-center justify-center">
            <div className="flex-1 px-12 text-indigo-950 h-screen flex flex-col items-start justify-end pb-16">
                <h1 className="text-7xl font-semibold leading-tight tracking-wide mb-8">The <strong className="text-violet-400">gateway</strong> for new tech products, brands and categories</h1>
                <Link className="text-lg flex gap-3 items-center font-medium" href='#'>
                    <p>Scroll down</p>
                    <ArrowDownIcon className="h-5 w-5" />
                </Link>
            </div>
            <div className="flex-1 w-full">
                <video loop autoPlay muted className="h-[90vh] w-full">
                    <source src="/graphic_animation.mp4" type="video/mp4" />
                </video>
            </div>
        </section>
    )
}

export default IntroSection