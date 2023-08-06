import { BenefitType } from '@/shared/types';
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon, } from "@heroicons/react/24/solid";

const BENEFITS: BenefitType[] = [{
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: 'State of the Art Facilities',
    description: 'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
}, {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: '100`s of Diverse Classes',
    description: 'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
}, {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'Expert and Pro Trainers',
    description: 'Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.',
}];

export default BENEFITS;