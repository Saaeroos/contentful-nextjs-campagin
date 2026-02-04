export interface ContentfulSys {
  id: string;
}

export interface ContentfulImage {
  url: string;
  width: number;
  height: number;
  description?: string;
}

export interface ContentfulRichText {
  json: any;
}

// Primitives
export interface IHeading {
  sys: ContentfulSys;
  identifier?: string;
  type: string; // 'h1' | 'h2' | 'h3' etc.
  content: string;
}

export interface IDescription {
  sys: ContentfulSys;
  identifier?: string;
  content: ContentfulRichText;
}

export interface IAssetContainer {
  sys: ContentfulSys;
  identifier?: string;
  asset: ContentfulImage;
}

export interface IButton {
  sys: ContentfulSys;
  identifier?: string;
  text: string;
  type?: string; // variant
  link: string;
}

// SEO
export interface ISeo {
  sys: ContentfulSys;
  metaTitle: string;
  metaDescription?: string;
  imageAlts?: string;
  allowIndexing: boolean;
}

// Sections
export interface IHero {
  __typename: 'PageHero';
  sys: ContentfulSys;
  identifier?: string;
  title?: IHeading;
  text?: string; // Long text
  background?: IAssetContainer;
  badge?: string;
  linksCollection: {
    items: IButton[];
  };
}

export interface ICard {
  sys: ContentfulSys;
  identifier?: string;
  title?: IHeading;
  description?: IDescription;
  asset?: IAssetContainer;
  badges?: string[];
  date?: string;
  linksCollection: {
    items: IButton[];
  };
}

export interface IGridSection {
  __typename: 'PageSection';
  sys: ContentfulSys;
  identifier?: string;
  title?: IHeading;
  text?: IDescription;
  cardsCollection: {
    items: ICard[];
  };
}

export interface IFooter {
  __typename: 'PageFooter';
  sys: ContentfulSys;
  identifier?: string;
  title?: IHeading;
  description?: IDescription;
  subscriptionButton?: IButton;
}

export type PageSection = IHero | IGridSection | IFooter;

export interface IPage {
  sys: ContentfulSys;
  identifier?: string;
  slug: string;
  seo?: ISeo;
  hero?: IHero;
  mainContentCollection: {
    items: PageSection[];
  };
  footer?: IFooter;
}
