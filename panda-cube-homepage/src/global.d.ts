export {};

declare global {
  type HeaderItemType = {
    name: string;
    href: string;
  };
  type SocialPlatformsType = {
    name: string;
    link: string;
    icon: string;
    alt: string;
  }[];
  type LanguageDropdownItemType = {
    name: string;
    icon: string;
    key: string;
  };
  type OUR_VALUES_ITEMS = {
    heading: string;
    description: string;
    icon: string;
  };
  type HeroSectionCardType = {
    title: string;
    description: string;
    icon: string;
  };
}
