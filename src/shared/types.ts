export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus',
}

export enum Page{
  Home = 'Home',
  Benefits = 'Benefits',
  OurClasses = 'Our Classes',
  ContactUs = 'Contact Us',
}

export type BenefitType = {
    icon: JSX.Element,
    title: string,
    description: string
}