import { Page, SelectedPage } from '@/shared/types';
import Link from './Link'

type Props = {
    classNames: string,
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Links = ({ classNames, selectedPage, setSelectedPage }: Props) => {

    return (
        <ul className={classNames}>
            <li>
                <Link
                    page={Page.Home}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </li>
            <li>
                <Link
                    page={Page.Benefits}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </li>
            <li>
                <Link
                    page={Page.OurClasses}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </li>
            <li>
                <Link
                    page={Page.ContactUs}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                />
            </li>
        </ul>
    )
}

export default Links;