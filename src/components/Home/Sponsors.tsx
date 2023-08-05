import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedbull from '@/assets/SponsorRedBull.png';

const Sponsors = () => {
    
    return (
        <div className="h-[150px w-full bg-primary-100 py]">
                    <div className="mx-auto w-5/6">
                        <ul className=" flex w-3/5 items-center justify-between gap-8 py-8">
                            <li><img src={SponsorRedbull} alt='Redbull sponsor`s logo' /></li>
                            <li><img src={SponsorFortune} alt='Fortune sponsor`s logo' /></li>
                            <li><img src={SponsorForbes} alt='Forbes sponsor`s logo' /></li>
                        </ul>
                    </div>
                </div>
    )
}
export default Sponsors;