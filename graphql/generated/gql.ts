/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment AssetContainerFields on AssetContainer {\n  sys {\n    id\n  }\n  asset {\n    url\n    width\n    height\n    description\n  }\n}": typeof types.AssetContainerFieldsFragmentDoc,
    "fragment ButtonFields on Button {\n  sys {\n    id\n  }\n  text\n  type\n  link\n}": typeof types.ButtonFieldsFragmentDoc,
    "fragment CardFields on GridCard {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  description {\n    ...DescriptionFields\n  }\n  asset {\n    ...AssetContainerFields\n  }\n  badges\n  date\n  linksCollection(limit: 2) {\n    items {\n      ...ButtonFields\n    }\n  }\n}": typeof types.CardFieldsFragmentDoc,
    "fragment DescriptionFields on Description {\n  sys {\n    id\n  }\n  content {\n    json\n  }\n}": typeof types.DescriptionFieldsFragmentDoc,
    "fragment FooterFields on PageFooter {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  description {\n    ...DescriptionFields\n  }\n  subscriptionButton {\n    ...ButtonFields\n  }\n}": typeof types.FooterFieldsFragmentDoc,
    "fragment GridSectionFields on PageSection {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  text {\n    ...DescriptionFields\n  }\n  cardsCollection(limit: 6) {\n    items {\n      ...CardFields\n    }\n  }\n}": typeof types.GridSectionFieldsFragmentDoc,
    "fragment HeadingFields on Heading {\n  sys {\n    id\n  }\n  type\n  content\n}": typeof types.HeadingFieldsFragmentDoc,
    "fragment HeroFields on Hero {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  text\n  badge\n  background {\n    ...AssetContainerFields\n  }\n  linksCollection(limit: 2) {\n    items {\n      ...ButtonFields\n    }\n  }\n}": typeof types.HeroFieldsFragmentDoc,
    "fragment SeoFields on PageSeo {\n  sys {\n    id\n  }\n  metaTitle\n  metaDescription\n  imageAlts\n  allowIndexing\n  openGraphImage {\n    ...AssetContainerFields\n  }\n}": typeof types.SeoFieldsFragmentDoc,
    "query GetPageBySlug($slug: String!, $preview: Boolean = false) {\n  pageCollection(where: {slug: $slug}, limit: 1, preview: $preview) {\n    items {\n      sys {\n        id\n      }\n      slug\n      seo {\n        ...SeoFields\n      }\n      hero {\n        ...HeroFields\n      }\n      mainContentCollection(limit: 10) {\n        items {\n          __typename\n          ... on PageSection {\n            ...GridSectionFields\n          }\n        }\n      }\n      footer {\n        ...FooterFields\n      }\n    }\n  }\n}": typeof types.GetPageBySlugDocument,
};
const documents: Documents = {
    "fragment AssetContainerFields on AssetContainer {\n  sys {\n    id\n  }\n  asset {\n    url\n    width\n    height\n    description\n  }\n}": types.AssetContainerFieldsFragmentDoc,
    "fragment ButtonFields on Button {\n  sys {\n    id\n  }\n  text\n  type\n  link\n}": types.ButtonFieldsFragmentDoc,
    "fragment CardFields on GridCard {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  description {\n    ...DescriptionFields\n  }\n  asset {\n    ...AssetContainerFields\n  }\n  badges\n  date\n  linksCollection(limit: 2) {\n    items {\n      ...ButtonFields\n    }\n  }\n}": types.CardFieldsFragmentDoc,
    "fragment DescriptionFields on Description {\n  sys {\n    id\n  }\n  content {\n    json\n  }\n}": types.DescriptionFieldsFragmentDoc,
    "fragment FooterFields on PageFooter {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  description {\n    ...DescriptionFields\n  }\n  subscriptionButton {\n    ...ButtonFields\n  }\n}": types.FooterFieldsFragmentDoc,
    "fragment GridSectionFields on PageSection {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  text {\n    ...DescriptionFields\n  }\n  cardsCollection(limit: 6) {\n    items {\n      ...CardFields\n    }\n  }\n}": types.GridSectionFieldsFragmentDoc,
    "fragment HeadingFields on Heading {\n  sys {\n    id\n  }\n  type\n  content\n}": types.HeadingFieldsFragmentDoc,
    "fragment HeroFields on Hero {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  text\n  badge\n  background {\n    ...AssetContainerFields\n  }\n  linksCollection(limit: 2) {\n    items {\n      ...ButtonFields\n    }\n  }\n}": types.HeroFieldsFragmentDoc,
    "fragment SeoFields on PageSeo {\n  sys {\n    id\n  }\n  metaTitle\n  metaDescription\n  imageAlts\n  allowIndexing\n  openGraphImage {\n    ...AssetContainerFields\n  }\n}": types.SeoFieldsFragmentDoc,
    "query GetPageBySlug($slug: String!, $preview: Boolean = false) {\n  pageCollection(where: {slug: $slug}, limit: 1, preview: $preview) {\n    items {\n      sys {\n        id\n      }\n      slug\n      seo {\n        ...SeoFields\n      }\n      hero {\n        ...HeroFields\n      }\n      mainContentCollection(limit: 10) {\n        items {\n          __typename\n          ... on PageSection {\n            ...GridSectionFields\n          }\n        }\n      }\n      footer {\n        ...FooterFields\n      }\n    }\n  }\n}": types.GetPageBySlugDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment AssetContainerFields on AssetContainer {\n  sys {\n    id\n  }\n  asset {\n    url\n    width\n    height\n    description\n  }\n}"): (typeof documents)["fragment AssetContainerFields on AssetContainer {\n  sys {\n    id\n  }\n  asset {\n    url\n    width\n    height\n    description\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ButtonFields on Button {\n  sys {\n    id\n  }\n  text\n  type\n  link\n}"): (typeof documents)["fragment ButtonFields on Button {\n  sys {\n    id\n  }\n  text\n  type\n  link\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment CardFields on GridCard {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  description {\n    ...DescriptionFields\n  }\n  asset {\n    ...AssetContainerFields\n  }\n  badges\n  date\n  linksCollection(limit: 2) {\n    items {\n      ...ButtonFields\n    }\n  }\n}"): (typeof documents)["fragment CardFields on GridCard {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  description {\n    ...DescriptionFields\n  }\n  asset {\n    ...AssetContainerFields\n  }\n  badges\n  date\n  linksCollection(limit: 2) {\n    items {\n      ...ButtonFields\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment DescriptionFields on Description {\n  sys {\n    id\n  }\n  content {\n    json\n  }\n}"): (typeof documents)["fragment DescriptionFields on Description {\n  sys {\n    id\n  }\n  content {\n    json\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment FooterFields on PageFooter {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  description {\n    ...DescriptionFields\n  }\n  subscriptionButton {\n    ...ButtonFields\n  }\n}"): (typeof documents)["fragment FooterFields on PageFooter {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  description {\n    ...DescriptionFields\n  }\n  subscriptionButton {\n    ...ButtonFields\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GridSectionFields on PageSection {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  text {\n    ...DescriptionFields\n  }\n  cardsCollection(limit: 6) {\n    items {\n      ...CardFields\n    }\n  }\n}"): (typeof documents)["fragment GridSectionFields on PageSection {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  text {\n    ...DescriptionFields\n  }\n  cardsCollection(limit: 6) {\n    items {\n      ...CardFields\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeadingFields on Heading {\n  sys {\n    id\n  }\n  type\n  content\n}"): (typeof documents)["fragment HeadingFields on Heading {\n  sys {\n    id\n  }\n  type\n  content\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroFields on Hero {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  text\n  badge\n  background {\n    ...AssetContainerFields\n  }\n  linksCollection(limit: 2) {\n    items {\n      ...ButtonFields\n    }\n  }\n}"): (typeof documents)["fragment HeroFields on Hero {\n  sys {\n    id\n  }\n  title {\n    ...HeadingFields\n  }\n  text\n  badge\n  background {\n    ...AssetContainerFields\n  }\n  linksCollection(limit: 2) {\n    items {\n      ...ButtonFields\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SeoFields on PageSeo {\n  sys {\n    id\n  }\n  metaTitle\n  metaDescription\n  imageAlts\n  allowIndexing\n  openGraphImage {\n    ...AssetContainerFields\n  }\n}"): (typeof documents)["fragment SeoFields on PageSeo {\n  sys {\n    id\n  }\n  metaTitle\n  metaDescription\n  imageAlts\n  allowIndexing\n  openGraphImage {\n    ...AssetContainerFields\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetPageBySlug($slug: String!, $preview: Boolean = false) {\n  pageCollection(where: {slug: $slug}, limit: 1, preview: $preview) {\n    items {\n      sys {\n        id\n      }\n      slug\n      seo {\n        ...SeoFields\n      }\n      hero {\n        ...HeroFields\n      }\n      mainContentCollection(limit: 10) {\n        items {\n          __typename\n          ... on PageSection {\n            ...GridSectionFields\n          }\n        }\n      }\n      footer {\n        ...FooterFields\n      }\n    }\n  }\n}"): (typeof documents)["query GetPageBySlug($slug: String!, $preview: Boolean = false) {\n  pageCollection(where: {slug: $slug}, limit: 1, preview: $preview) {\n    items {\n      sys {\n        id\n      }\n      slug\n      seo {\n        ...SeoFields\n      }\n      hero {\n        ...HeroFields\n      }\n      mainContentCollection(limit: 10) {\n        items {\n          __typename\n          ... on PageSection {\n            ...GridSectionFields\n          }\n        }\n      }\n      footer {\n        ...FooterFields\n      }\n    }\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;