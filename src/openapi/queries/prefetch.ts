// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { type QueryClient } from "@tanstack/react-query";
import { CitationService, FeedService, MathService, MobileService, OfflineService, PageContentService, ReadingListsService, RecommendationService, TalkPagesService, TransformsService } from "../requests/services.gen";
import * as Common from "./common";
/**
* List page-related API entry points.
* Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
*
* @returns listing A list of page-related API end points.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPage = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageKeyFn(), queryFn: () => PageContentService.getPage() });
/**
* Get revision metadata for a title.
* Returns the revision metadata for the given title. If a revision ID is provided,
* metadata for that revision is returned, otherwise the latest revision ID is assumed.
*
* Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @returns revision The latest revision metadata for the provided title.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageTitleByTitle = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageTitleByTitleKeyFn({ title }), queryFn: () => PageContentService.getPageTitleByTitle({ title }) });
/**
* Get revision metadata for a title.
* Returns the revision metadata for the given title. If a revision ID is provided,
* metadata for that revision is returned, otherwise the latest revision ID is assumed.
*
* Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision The revision id
* @returns revision The latest revision metadata for the provided title.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageTitleByTitleByRevision = (queryClient: QueryClient, { revision, title }: {
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageTitleByTitleByRevisionKeyFn({ revision, title }), queryFn: () => PageContentService.getPageTitleByTitleByRevision({ revision, title }) });
/**
* Get latest HTML for a title.
* Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.stash Whether to temporary stash data-parsoid in order to support transforming the
* modified content later. If this parameter is set, requests are rate-limited on
* a per-client basis (max 5 requests per second per client)
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns unknown The latest HTML for the given page title.
*
* See [the MediaWiki DOM
* spec](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec) for a
* description of the MediaWiki-specific semantic markup in this HTML.
* Note that additional metadata is available in the HTML head.
*
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageHtmlByTitle = (queryClient: QueryClient, { acceptLanguage, redirect, stash, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  stash?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageHtmlByTitleKeyFn({ acceptLanguage, redirect, stash, title }), queryFn: () => PageContentService.getPageHtmlByTitle({ acceptLanguage, redirect, stash, title }) });
/**
* Get HTML for a specific title/revision & optionally timeuuid.
* Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision The revision
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.stash Whether to temporary stash data-parsoid in order to support transforming the
* modified content later. If this parameter is set, requests are rate-limited on
* a per-client basis (max 5 requests per second per client)
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns unknown The html for the given page, revision and tid.
*
* See [the MediaWiki DOM
* spec](https://www.mediawiki.org/wiki/Parsoid/MediaWiki_DOM_spec) for a
* description of the MediaWiki-specific semantic markup in this HTML.
* Note that additional metadata is available in the HTML head.
*
* This HTML can be edited using arbitrary HTML tools. The modified HTML
* can be converted back to wikitext using the
* [/transform/html/to/wikitext{/title}{/revision}](#!/Transforms/transform_html_to_wikitext__title___revision__post)
* entry point.
*
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetFormatRevision = (queryClient: QueryClient, { acceptLanguage, redirect, revision, stash, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  revision: number;
  stash?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetFormatRevisionKeyFn({ acceptLanguage, redirect, revision, stash, title }), queryFn: () => PageContentService.getFormatRevision({ acceptLanguage, redirect, revision, stash, title }) });
/**
* Get data-parsoid metadata for a specific title/revision/tid.
* Data-parsoid is metadata used by
* [Parsoid](https://www.mediawiki.org/wiki/Parsoid) to support clean
* round-tripping conversions between HTML and Wikitext. Among other
* things, it contains the original Wikitext offsets of each HTML
* element, keyed by element ID. The format is unstable.
*
* The metadata in data-parsoid is specific to a specific HTML render.
* For this reason, you need to supply the exact `revision` and `tid` as
* provided in the `ETag` header of the HTML response.
*
* Stability: [Stable](https://www.mediawiki.org/wiki/API_versioning#Stable)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision The revision
* @param data.tid The revision's time ID
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @returns data_parsoid The latest Parsoid data for the given page
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageDataParsoidByTitleByRevisionByTid = (queryClient: QueryClient, { redirect, revision, tid, title }: {
  redirect?: boolean;
  revision: number;
  tid: string;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageDataParsoidByTitleByRevisionByTidKeyFn({ redirect, revision, tid, title }), queryFn: () => PageContentService.getPageDataParsoidByTitleByRevisionByTid({ redirect, revision, tid, title }) });
/**
* Get the linter errors for a specific title/revision.
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @returns unknown The lint errors for the given page and optionally revision.
*
* See [the Linter extension docs](https://www.mediawiki.org/wiki/Extension:Linter) for more
* details.
*
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageLintByTitle = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageLintByTitleKeyFn({ title }), queryFn: () => PageContentService.getPageLintByTitle({ title }) });
/**
* Get the linter errors for a specific title/revision.
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision The revision
* @returns unknown The lint errors for the given page and optionally revision.
*
* See [the Linter extension docs](https://www.mediawiki.org/wiki/Extension:Linter) for more
* details.
*
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageLintByTitleByRevision = (queryClient: QueryClient, { revision, title }: {
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageLintByTitleByRevisionKeyFn({ revision, title }), queryFn: () => PageContentService.getPageLintByTitleByRevision({ revision, title }) });
/**
* Fetches a segmented page to be used in machine translation
* Use this end point to fetch the segmented content of a page. Clients should
* use the returned content in conjunction with the [language transform
* API](https://wikimedia.org/api/rest_v1/#!/Transform).
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @returns unknown The segmented page for the given title and revision
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageSegmentsByTitle = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageSegmentsByTitleKeyFn({ title }), queryFn: () => PageContentService.getPageSegmentsByTitle({ title }) });
/**
* Fetches a segmented page to be used in machine translation
* Use this end point to fetch the segmented content of a page. Clients should
* use the returned content in conjunction with the [language transform
* API](https://wikimedia.org/api/rest_v1/#!/Transform).
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision The revision id
* @returns unknown The segmented page for the given title and revision
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageSegmentsByTitleByRevision = (queryClient: QueryClient, { revision, title }: {
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageSegmentsByTitleByRevisionKeyFn({ revision, title }), queryFn: () => PageContentService.getPageSegmentsByTitleByRevision({ revision, title }) });
/**
* Get basic metadata and simplified article introduction.
* The summary response includes an extract of the first paragraph of the page in plain text
* and HTML as well as the type of page. This is useful for page previews (fka. Hovercards,
* aka. Popups) on the web and link previews in the apps.
*
* Stability: [stable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Stable)
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns summary The summary for the given page
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageSummaryByTitle = (queryClient: QueryClient, { acceptLanguage, redirect, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageSummaryByTitleKeyFn({ acceptLanguage, redirect, title }), queryFn: () => PageContentService.getPageSummaryByTitle({ acceptLanguage, redirect, title }) });
/**
* Get list of media files used on a page.
* Gets the list of media items (images, audio, and video) in the order in which they appear on a
* given wiki page.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @returns media_list JSON containing metadata of media items appearing on the given page.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetContentMediaList = (queryClient: QueryClient, { redirect, title }: {
  redirect?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetContentMediaListKeyFn({ redirect, title }), queryFn: () => PageContentService.getContentMediaList({ redirect, title }) });
/**
* Get list of media files used on a page.
* Gets the list of media items (images, audio, and video) in the order in which they appear on a
* given wiki page.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.
*
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @returns media_list JSON containing metadata of media items appearing on the given page.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetContentWithRevisionMediaList = (queryClient: QueryClient, { redirect, revision, title }: {
  redirect?: boolean;
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetContentWithRevisionMediaListKeyFn({ redirect, revision, title }), queryFn: () => PageContentService.getContentWithRevisionMediaList({ redirect, revision, title }) });
/**
* Get page content HTML optimized for mobile consumption.
* Gets the content HTML optimized for mobile consumption for the given page. This content
* is derived from Parsoid HTML (see `/page/html/{title}` endpoint).
* The difference to Parsoid HTML is roughly:
* * Some elements and attributes not needed for the reading case are removed.
* * LeadIntroductionTransform: The introductory paragraph is moved before an infobox.
* * RedLinks: Red links are flattened (=turned into span elements).
* * WidenImage: images that should be displayed in gallery are widened.
* * Section headings are slightly changed by wrapping the headings inside a div and adding
* a span element inside the new div for the edit buttons.
* * Additional classes are added to img elements to fix issues with non-white backgrounds.
* See Theme support below for instructions on how to enable that.
* * Pagelib CSS files needed to display the content are referenced.
* * LazyLoadTransform: server-side portion/prep for lazy loading of images.
* * CollapseTable: server-side portion/prep for collapsing tables.
*
* What's not included? What parts of the PageLibrary does a client still have to do?
* * Theme support: Themes can be turned on by adding a theme class to the root <html> tag.
* Possible class names are:
* * `pagelib_theme_default`
* * `pagelib_theme_dark`
* * `pagelib_theme_black`
* * `pagelib_theme_sepia`
*
* The pagelib JS has functionality to do that: ThemeTransform.setTheme(document, theme).
* * Dim images: DimImagesTransform.dim(window, enable)
* * PlatformTransform.classify(window) to trigger Android and iOS app specific CSS rules
* * LazyLoadTransformer: client side companion of LazyLoadTransform (note the extra *er*
* here)
* * FooterTransformer: seems to be more UI than content, requires I18N, too
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @returns string mobile-optimized HTML of the given page.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetContentMobileHtml = (queryClient: QueryClient, { redirect, title }: {
  redirect?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetContentMobileHtmlKeyFn({ redirect, title }), queryFn: () => PageContentService.getContentMobileHtml({ redirect, title }) });
/**
* Get page content HTML optimized for mobile consumption.
* Gets the content HTML optimized for mobile consumption for the given page. This content
* is derived from Parsoid HTML (see `/page/html/{title}` endpoint).
* The difference to Parsoid HTML is roughly:
* * Some elements and attributes not needed for the reading case are removed.
* * LeadIntroductionTransform: The introductory paragraph is moved before an infobox.
* * RedLinks: Red links are flattened (=turned into span elements).
* * WidenImage: images that should be displayed in gallery are widened.
* * Section headings are slightly changed by wrapping the headings inside a div and adding
* a span element inside the new div for the edit buttons.
* * Additional classes are added to img elements to fix issues with non-white backgrounds.
* See Theme support below for instructions on how to enable that.
* * Pagelib CSS files needed to display the content are referenced.
* * LazyLoadTransform: server-side portion/prep for lazy loading of images.
* * CollapseTable: server-side portion/prep for collapsing tables.
*
* What's not included? What parts of the PageLibrary does a client still have to do?
* * Theme support: Themes can be turned on by adding a theme class to the root <html> tag.
* Possible class names are:
* * `pagelib_theme_default`
* * `pagelib_theme_dark`
* * `pagelib_theme_black`
* * `pagelib_theme_sepia`
*
* The pagelib JS has functionality to do that: ThemeTransform.setTheme(document, theme).
* * Dim images: DimImagesTransform.dim(window, enable)
* * PlatformTransform.classify(window) to trigger Android and iOS app specific CSS rules
* * LazyLoadTransformer: client side companion of LazyLoadTransform (note the extra *er*
* here)
* * FooterTransformer: seems to be more UI than content, requires I18N, too
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.
*
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @returns string mobile-optimized HTML of the given page.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetContentWithRevisionMobileHtml = (queryClient: QueryClient, { redirect, revision, title }: {
  redirect?: boolean;
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetContentWithRevisionMobileHtmlKeyFn({ redirect, revision, title }), queryFn: () => PageContentService.getContentWithRevisionMobileHtml({ redirect, revision, title }) });
/**
* Get styles and scripts for offline consumption of mobile-html-formatted pages
* Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @returns string links to scripts and styles to accompany the mobile-html of the page for offline consumption
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageMobileHtmlOfflineResourcesByTitle = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleKeyFn({ title }), queryFn: () => PageContentService.getPageMobileHtmlOfflineResourcesByTitle({ title }) });
/**
* Get styles and scripts for offline consumption of mobile-html-formatted pages
* Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.
*
* @returns string links to scripts and styles to accompany the mobile-html of the page for offline consumption
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevision = (queryClient: QueryClient, { revision, title }: {
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionKeyFn({ revision, title }), queryFn: () => PageContentService.getPageMobileHtmlOfflineResourcesByTitleByRevision({ revision, title }) });
/**
* Get pages related to the given title
* Returns summaries for 20 pages related to the given page. Summaries include
* page title, namespace and id along with short text description of the page
* and a thumbnail.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @returns related The related pages
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetRelatedPages = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetRelatedPagesKeyFn({ title }), queryFn: () => PageContentService.getRelatedPages({ title }) });
/**
* Get content for a random page
* Redirects the client to the URI for the desired format for a random page title.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.format The desired return format
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPageRandomByFormat = (queryClient: QueryClient, { format }: {
  format: "title" | "html" | "summary" | "related" | "mobile-sections" | "mobile-sections-lead";
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPageRandomByFormatKeyFn({ format }), queryFn: () => PageContentService.getPageRandomByFormat({ format }) });
/**
* Get a page as PDF
* Renders the page content as PDF. Format and type are optional parameters and
* the default values are "a4" for format and "desktop" for type.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @returns string The PDF render of an article
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPagePdfByTitle = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPagePdfByTitleKeyFn({ title }), queryFn: () => PageContentService.getPagePdfByTitle({ title }) });
/**
* Get a page as PDF
* Renders the page content as PDF. Format and type are optional parameters and
* the default values are "a4" for format and "desktop" for type.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.format PDF format
* @returns string The PDF render of an article
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPagePdfByTitleByFormat = (queryClient: QueryClient, { format, title }: {
  format: "a4" | "letter" | "legal";
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPagePdfByTitleByFormatKeyFn({ format, title }), queryFn: () => PageContentService.getPagePdfByTitleByFormat({ format, title }) });
/**
* Get a page as PDF
* Renders the page content as PDF. Format and type are optional parameters and
* the default values are "a4" for format and "desktop" for type.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.format PDF format
* @param data.type PDF type - `mobile` (optimized for reading on mobile devices) or `desktop` (regular PDF). `desktop` is the default render mode and it will used if param `type` is not passed
* @returns string The PDF render of an article
* @returns problem Error
* @throws ApiError
*/
export const prefetchUsePageContentServiceGetPagePdfByTitleByFormatByType = (queryClient: QueryClient, { format, title, type }: {
  format: "a4" | "letter" | "legal";
  title: string;
  type?: "mobile" | "desktop";
}) => queryClient.prefetchQuery({ queryKey: Common.UsePageContentServiceGetPagePdfByTitleByFormatByTypeKeyFn({ format, title, type }), queryFn: () => PageContentService.getPagePdfByTitleByFormatByType({ format, title, type }) });
/**
* Get mobile-optimized HTML sections for a title.
* Retrieve the latest HTML for a page title optimised for viewing with
* native mobile applications. Note that the output is split by sections.
*
* Stability: [deprecated](https://www.mediawiki.org/wiki/API_versioning#Deprecated)
*
* [Here](https://lists.wikimedia.org/hyperkitty/list/mediawiki-api-announce@lists.wikimedia.org/thread/ZBYSZ4VQYIVZFOCEUNCL3ZSSIEECBK6H/) you can find
* more information about the endpoint deprecation.
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns unknown JSON containing HTML sections and metadata for the given page title.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetSections = (queryClient: QueryClient, { acceptLanguage, redirect, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetSectionsKeyFn({ acceptLanguage, redirect, title }), queryFn: () => MobileService.getSections({ acceptLanguage, redirect, title }) });
/**
* Get mobile-optimized HTML sections for a title.
* Retrieve the latest HTML for a page title optimised for viewing with
* native mobile applications. Note that the output is split by sections.
*
* Stability: [deprecated](https://www.mediawiki.org/wiki/API_versioning#Deprecated)
*
* [Here](https://lists.wikimedia.org/hyperkitty/list/mediawiki-api-announce@lists.wikimedia.org/thread/ZBYSZ4VQYIVZFOCEUNCL3ZSSIEECBK6H/) you can find
* more information about the endpoint deprecation.
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.
*
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns unknown JSON containing HTML sections and metadata for the given page title.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetSectionsWithRevision = (queryClient: QueryClient, { acceptLanguage, redirect, revision, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetSectionsWithRevisionKeyFn({ acceptLanguage, redirect, revision, title }), queryFn: () => MobileService.getSectionsWithRevision({ acceptLanguage, redirect, revision, title }) });
/**
* Get mobile-optimized HTML lead section and metadata for a title.
* Retrieve the lead section of the latest HTML for a page title optimised
* for viewing with native mobile applications.
*
* Stability: [deprecated](https://www.mediawiki.org/wiki/API_versioning#Deprecated)
*
* [Here](https://lists.wikimedia.org/hyperkitty/list/mediawiki-api-announce@lists.wikimedia.org/thread/ZBYSZ4VQYIVZFOCEUNCL3ZSSIEECBK6H/) you can find
* more information about the endpoint deprecation.
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns unknown The HTML for the given page title.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetSectionsLead = (queryClient: QueryClient, { acceptLanguage, redirect, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetSectionsLeadKeyFn({ acceptLanguage, redirect, title }), queryFn: () => MobileService.getSectionsLead({ acceptLanguage, redirect, title }) });
/**
* Get mobile-optimized HTML lead section and metadata for a title.
* Retrieve the lead section of the latest HTML for a page title optimised
* for viewing with native mobile applications.
*
* Stability: [deprecated](https://www.mediawiki.org/wiki/API_versioning#Deprecated)
*
* [Here](https://lists.wikimedia.org/hyperkitty/list/mediawiki-api-announce@lists.wikimedia.org/thread/ZBYSZ4VQYIVZFOCEUNCL3ZSSIEECBK6H/) you can find
* more information about the endpoint deprecation.
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.
*
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns unknown The HTML for the given page title.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetSectionsLeadWithRevision = (queryClient: QueryClient, { acceptLanguage, redirect, revision, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetSectionsLeadWithRevisionKeyFn({ acceptLanguage, redirect, revision, title }), queryFn: () => MobileService.getSectionsLeadWithRevision({ acceptLanguage, redirect, revision, title }) });
/**
* Get non-lead mobile-optimized HTML sections for a title.
* Retrieve the remainder of the latest HTML (without the lead section) for
* a page title optimised for viewing with native mobile applications,
* provided as a JSON object containing the sections.
*
* Stability: [deprecated](https://www.mediawiki.org/wiki/API_versioning#Deprecated)
*
* [Here](https://lists.wikimedia.org/hyperkitty/list/mediawiki-api-announce@lists.wikimedia.org/thread/ZBYSZ4VQYIVZFOCEUNCL3ZSSIEECBK6H/) you can find
* more information about the endpoint deprecation.
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns unknown JSON wrapping HTML sections for the given page title.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetSectionsRemaining = (queryClient: QueryClient, { acceptLanguage, redirect, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetSectionsRemainingKeyFn({ acceptLanguage, redirect, title }), queryFn: () => MobileService.getSectionsRemaining({ acceptLanguage, redirect, title }) });
/**
* Get non-lead mobile-optimized HTML sections for a title.
* Retrieve the remainder of the latest HTML (without the lead section) for
* a page title optimised for viewing with native mobile applications,
* provided as a JSON object containing the sections.
*
* Stability: [deprecated](https://www.mediawiki.org/wiki/API_versioning#Deprecated)
*
* [Here](https://lists.wikimedia.org/hyperkitty/list/mediawiki-api-announce@lists.wikimedia.org/thread/ZBYSZ4VQYIVZFOCEUNCL3ZSSIEECBK6H/) you can find
* more information about the endpoint deprecation.
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.
*
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @param data.acceptLanguage The desired language variant code for wikis where LanguageConverter is enabled. Example: `sr-el` for Latin transcription of the Serbian language.
*
* @returns unknown JSON wrapping HTML sections for the given page title.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetSectionsRemainingWithRevision = (queryClient: QueryClient, { acceptLanguage, redirect, revision, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetSectionsRemainingWithRevisionKeyFn({ acceptLanguage, redirect, revision, title }), queryFn: () => MobileService.getSectionsRemainingWithRevision({ acceptLanguage, redirect, revision, title }) });
/**
* Get CSS for mobile apps.
* Gets common CSS mobile apps need to properly display pages using Page Content Service.
* In most cases all of the types are needed (preferably in this order):
* * base (Common mobile CSS from ResourceLoader)
* * site (Site-specific, mobile CSS from ResourceLoader, as defined in MediaWiki\:Mobile.css)
* * pcs (CSS for the Page Content Service)
*
* The `base` and `pcs` responses are the same regardless of what domain is used.
* For these we suggest meta.wikimedia.org.
*
* You can still pass pagelib for type, but this is a legacy version of the CSS for
* existing app clients.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.type The desired CSS bundle
* @returns unknown Success
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetDataCssMobileByType = (queryClient: QueryClient, { type }: {
  type: "base" | "pagelib" | "pcs" | "site";
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetDataCssMobileByTypeKeyFn({ type }), queryFn: () => MobileService.getDataCssMobileByType({ type }) });
/**
* Get JavaScript for mobileapps
* Gets the JavaScript bundle so that clients can have
* convenient access to that for consuming the page HTML.
* Amongst other things,
* * it allows to detect the platform and through that enable platform specific CSS rules,
* * has code to lazy load images on the page,
* * code for collapsing and expanding tables.
*
* Valid types are pagelib or pcs. Passing pcs will return the JavaScript for the
* Page Content Service. Passing pagelib will return a deprecated legacy version
* of the wikimedia-page-library JavaScript to support existing app clients.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Unstable)
*
* Please follow [wikitech-l](https://lists.wikimedia.org/mailman/listinfo/wikitech-l) or [mediawiki-api-announce](https://lists.wikimedia.org/mailman/listinfo/mediawiki-api-announce) for announcements of breaking changes.
*
* @param data The data for the request.
* @param data.type The desired JavaScript bundle
* @returns unknown Success
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetDataJavascriptMobileByType = (queryClient: QueryClient, { type }: {
  type: "pagelib" | "pcs";
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetDataJavascriptMobileByTypeKeyFn({ type }), queryFn: () => MobileService.getDataJavascriptMobileByType({ type }) });
/**
* Get internationalization info
* Gets internationalization information for the given site. Currently the only
* supported type is pcs for the Page Content Service.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.type The desired internationalization bundle
* @returns unknown Success
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMobileServiceGetDataI18nByType = (queryClient: QueryClient, { type }: {
  type: "pcs";
}) => queryClient.prefetchQuery({ queryKey: Common.UseMobileServiceGetDataI18nByTypeKeyFn({ type }), queryFn: () => MobileService.getDataI18nByType({ type }) });
/**
* Get styles and scripts for offline consumption of mobile-html-formatted pages
* Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @returns string links to scripts and styles to accompany the mobile-html of the page for offline consumption
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseOfflineServiceGetPageMobileHtmlOfflineResourcesByTitle = (queryClient: QueryClient, { title }: {
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleKeyFn({ title }), queryFn: () => OfflineService.getPageMobileHtmlOfflineResourcesByTitle({ title }) });
/**
* Get styles and scripts for offline consumption of mobile-html-formatted pages
* Provides links to scripts and styles needed for viewing mobile-html-formatted pages offline.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.
*
* @returns string links to scripts and styles to accompany the mobile-html of the page for offline consumption
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevision = (queryClient: QueryClient, { revision, title }: {
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionKeyFn({ revision, title }), queryFn: () => OfflineService.getPageMobileHtmlOfflineResourcesByTitleByRevision({ revision, title }) });
/**
* Get structured talk page contents
* Gets structured talk page contents for the provided title.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @returns string structured talk page JSON.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseTalkPagesServiceGetPageTalkByTitle = (queryClient: QueryClient, { redirect, title }: {
  redirect?: boolean;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTalkPagesServiceGetPageTalkByTitleKeyFn({ redirect, title }), queryFn: () => TalkPagesService.getPageTalkByTitle({ redirect, title }) });
/**
* Get structured talk page contents
* Gets structured talk page contents for the provided title.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/Wikimedia_Product/Wikimedia_Product_Infrastructure_team/API_endpoint_stability_policy#Experimental)
*
* @param data The data for the request.
* @param data.title Page title. Use underscores instead of spaces. Use percent-encoding. Example: `Main_Page`.
* @param data.revision Optional page revision. Note that older revisions are not stored, so request latency with the revision would be higher.
*
* @param data.redirect Requests for [redirect pages](https://www.mediawiki.org/wiki/Help:Redirects) return HTTP 302 with a redirect target in `Location` header and content in the body.
* To get a 200 response instead, supply `false` to the `redirect` parameter.
*
* @returns string structured talk page JSON.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseTalkPagesServiceGetPageTalkByTitleByRevision = (queryClient: QueryClient, { redirect, revision, title }: {
  redirect?: boolean;
  revision: number;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTalkPagesServiceGetPageTalkByTitleByRevisionKeyFn({ redirect, revision, title }), queryFn: () => TalkPagesService.getPageTalkByTitleByRevision({ redirect, revision, title }) });
/**
* Aggregated featured content
* Provides the aggregated feed content for the given date. The endpoint returns
* the featured article of the day, most read articles for the previous day, news
* content and the featured image and video of the day.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.yyyy Year the aggregated content is requested for
* @param data.mm Month the aggregated content is requested for, 0-padded
* @param data.dd Day of the month the aggregated content is requested for, 0-padded
* @returns feed JSON containing all of the featured content
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseFeedServiceAggregatedFeed = (queryClient: QueryClient, { dd, mm, yyyy }: {
  dd: string;
  mm: string;
  yyyy: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseFeedServiceAggregatedFeedKeyFn({ dd, mm, yyyy }), queryFn: () => FeedService.aggregatedFeed({ dd, mm, yyyy }) });
/**
* Current announcements to display
* Gets announcements for display in the official Wikipedia iOS and Android apps.
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @returns announcementsResponse Announcements for the given Wiki
* @throws ApiError
*/
export const prefetchUseFeedServiceGetFeedAnnouncements = (queryClient: QueryClient) => queryClient.prefetchQuery({ queryKey: Common.UseFeedServiceGetFeedAnnouncementsKeyFn(), queryFn: () => FeedService.getFeedAnnouncements() });
/**
* Events on this day
* Provides events that historically happened on the provided day and month.
* Supported types of events are:
* - All: all of the following
* - Selected: a list of a few selected anniversaries which occur on the provided day and month; often the entries are curated for the current year
* - Births: a list of birthdays which happened on the provided day and month
* - Deaths: a list of deaths which happened on the provided day and month
* - Holidays: a list of fixed holidays celebrated on the provided day and month
* - Events: a list of significant events which happened on the provided day and month and which are not covered by the other types yet
*
* Stability: [experimental](https://www.mediawiki.org/wiki/API_versioning#Experimental)
*
* @param data The data for the request.
* @param data.type Type of events
* @param data.mm Month events are requested for, 0-padded
* @param data.dd Day of the month events are requested for, 0-padded
* @returns onthisdayResponse JSON containing all of the featured content
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseFeedServiceOnThisDay = (queryClient: QueryClient, { dd, mm, type }: {
  dd: string;
  mm: string;
  type: "all" | "selected" | "births" | "deaths" | "events" | "holidays";
}) => queryClient.prefetchQuery({ queryKey: Common.UseFeedServiceOnThisDayKeyFn({ dd, mm, type }), queryFn: () => FeedService.onThisDay({ dd, mm, type }) });
/**
* Fetch the dictionary meaning of a word
* Fetches the dictionary meaning of a word from a language and displays
* it in the target language.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.from The source language code
* @param data.word The word to lookup
* @returns cx_dict the dictionary translation for the given word
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseTransformsServiceDoDict = (queryClient: QueryClient, { from, word }: {
  from: string;
  word: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTransformsServiceDoDictKeyFn({ from, word }), queryFn: () => TransformsService.doDict({ from, word }) });
/**
* Fetch the dictionary meaning of a word
* Fetches the dictionary meaning of a word from a language and displays
* it in the target language.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.from The source language code
* @param data.word The word to lookup
* @param data.provider The dictionary provider id
* @returns cx_dict the dictionary translation for the given word
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseTransformsServiceDoDictProvider = (queryClient: QueryClient, { from, provider, word }: {
  from: string;
  provider: "JsonDict" | "Dictd";
  word: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseTransformsServiceDoDictProviderKeyFn({ from, provider, word }), queryFn: () => TransformsService.doDictProvider({ from, provider, word }) });
/**
* Get a previously-stored formula
* Returns the previously-stored formula via `/media/math/check/{type}` for
* the given hash.
*
* Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
*
* @param data The data for the request.
* @param data.hash The hash string of the previous POST data
* @returns unknown Information about the checked formula
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMathServiceGetMediaMathFormulaByHash = (queryClient: QueryClient, { hash }: {
  hash: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMathServiceGetMediaMathFormulaByHashKeyFn({ hash }), queryFn: () => MathService.getMediaMathFormulaByHash({ hash }) });
/**
* Get rendered formula in the given format.
* Given a request hash, renders a TeX formula into its mathematic
* representation in the given format. When a request is issued to the
* `/media/math/check/{format}` POST endpoint, the response contains the
* `x-resource-location` header denoting the hash ID of the POST data. Once
* obtained, this endpoint has to be used to obtain the actual render.
*
* Stability: [stable](https://www.mediawiki.org/wiki/API_versioning#Stable).
*
* @param data The data for the request.
* @param data.format The output format; can be svg or mml
* @param data.hash The hash string of the previous POST data
* @returns string The rendered formula
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseMathServiceGetMediaMathRenderByFormatByHash = (queryClient: QueryClient, { format, hash }: {
  format: "svg" | "mml" | "png";
  hash: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseMathServiceGetMediaMathRenderByFormatByHashKeyFn({ format, hash }), queryFn: () => MathService.getMediaMathRenderByFormatByHash({ format, hash }) });
/**
* Get citation data given an article identifier.
* Generates citation data given a URL, DOI, PMID, or PMCID.
*
* Automated requests can be made at a rate of 1 request per second (rps).
*
* See more at [Citoid service documentation](https://www.mediawiki.org/wiki/Citoid)
*
* The citation data can be requested in one of the following formats:
* - `mediawiki`: format designed for MediaWiki to be used with `templateData`.
* Uses [Zotero field names](https://aurimasv.github.io/z2csl/typeMap.xml).
* - `mediawiki-basefields`: `mediawiki` format with Zotero `basefield` field names.
* - `zotero`: format used by [Zotero](https://www.zotero.org/).
* - `bibtex`: format used in conjunction with LaTeX documents.
* See [bibtex.org](http://www.bibtex.org/).
* - `wikibase`: format designed for [Wikibase](https://www.mediawiki.org/wiki/Extension:Wikibase_Repository).
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.format The format to use for the resulting citation data
* @param data.query URL of an article, DOI, PMCID or PMID in the URL-encoded format. Note that on the Swagger-UI doc page you don't need to URI-encode the parameter manually, it will be done by the docs engine.
*
* @param data.acceptLanguage For some articles the result depends on the `Accept-Language` header, so provide it if localized content is required.
*
* @returns result The citation data in the requested format
* @throws ApiError
*/
export const prefetchUseCitationServiceGetCitation = (queryClient: QueryClient, { acceptLanguage, format, query }: {
  acceptLanguage?: string;
  format: "mediawiki" | "mediawiki-basefields" | "zotero" | "bibtex" | "wikibase";
  query: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseCitationServiceGetCitationKeyFn({ acceptLanguage, format, query }), queryFn: () => CitationService.getCitation({ acceptLanguage, format, query }) });
/**
* Get all lists of the current user.
* Returns metadata describing the lists of the current user. Might be truncated and include
* a continuation token.
*
* Request must be authenticated with a MediaWiki session cookie.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.next Continuation parameter from previous request
* @param data.sort Sort order
* - `name`: by name, ascending;
* - `updated`: by last modification date, descending.
*
* @returns unknown An array of list metadata.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseReadingListsServiceGetDataLists = (queryClient: QueryClient, { next, sort }: {
  next?: string;
  sort?: "name" | "updated";
} = {}) => queryClient.prefetchQuery({ queryKey: Common.UseReadingListsServiceGetDataListsKeyFn({ next, sort }), queryFn: () => ReadingListsService.getDataLists({ next, sort }) });
/**
* Get all entries of a given list.
* Returns pages contained by the given list. Might be truncated and include
* a continuation token.
*
* List must belong to current user and request must be authenticated with
* a MediaWiki session cookie.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.id
* @param data.next Continuation parameter from previous request
* @param data.sort Sort order
* - `name`: by page title, ascending;
* - `updated`: by last modification date, descending.
*
* @returns unknown An array of list entries.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseReadingListsServiceGetListEntries = (queryClient: QueryClient, { id, next, sort }: {
  id: number;
  next?: string;
  sort?: "name" | "updated";
}) => queryClient.prefetchQuery({ queryKey: Common.UseReadingListsServiceGetListEntriesKeyFn({ id, next, sort }), queryFn: () => ReadingListsService.getListEntries({ id, next, sort }) });
/**
* Get lists of the current user which contain a given page.
* Request must be authenticated with a MediaWiki session cookie.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.project
* @param data.title
* @param data.next Continuation parameter from previous request
* @returns unknown An array of list metadata.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseReadingListsServiceGetDataListsPagesByProjectByTitle = (queryClient: QueryClient, { next, project, title }: {
  next?: string;
  project: string;
  title: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseReadingListsServiceGetDataListsPagesByProjectByTitleKeyFn({ next, project, title }), queryFn: () => ReadingListsService.getDataListsPagesByProjectByTitle({ next, project, title }) });
/**
* Get recent changes to the lists
* Returns metadata describing lists and entries which have changed. Might be truncated
* and include a continuation token.
*
* Request must be authenticated with a MediaWiki session cookie.
*
* For safe synchronization, the date parameter should be taken from the `continue-from`
* field of a previous `GET /lists/` or `GET /lists/changes/since/{date}` request. This will
* ensure that no changes are skipped, at the cost of sometimes receiving the same change
* multitple times. Clients should handle changes in an idempotent way.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.date Cutoff date (in ISO 8601). To ensure reliable synchronization, the API
* might return changes which are slightly older than the cutoff date.
*
* @param data.next Continuation parameter from previous request
* @returns unknown An array of list and entry metadata.
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseReadingListsServiceGetDataListsChangesSinceByDate = (queryClient: QueryClient, { date, next }: {
  date: string;
  next?: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseReadingListsServiceGetDataListsChangesSinceByDateKeyFn({ date, next }), queryFn: () => ReadingListsService.getDataListsChangesSinceByDate({ date, next }) });
/**
* Recommend articles for translation.
* Recommends articles to be translated from the source
* to the domain language.
*
* See more at [Recommendation API documentation](https://meta.wikimedia.org/wiki/Recommendation_API)
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.fromLang The source language code
* @param data.count The max number of articles to return
* @returns recommendation_result the list of articles recommended for translation
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLang = (queryClient: QueryClient, { count, fromLang }: {
  count?: number;
  fromLang: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangKeyFn({ count, fromLang }), queryFn: () => RecommendationService.getDataRecommendationArticleCreationTranslationByFromLang({ count, fromLang }) });
/**
* Recommend articles for translation.
* Recommends articles to be translated from the source
* to the domain language.
*
* See more at [Recommendation API documentation](https://meta.wikimedia.org/wiki/Recommendation_API)
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.fromLang The source language code
* @param data.seedArticle The article to use as a search seed
* @param data.count The max number of articles to return
* @returns recommendation_result the list of articles recommended for translation
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticle = (queryClient: QueryClient, { count, fromLang, seedArticle }: {
  count?: number;
  fromLang: string;
  seedArticle: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticleKeyFn({ count, fromLang, seedArticle }), queryFn: () => RecommendationService.getDataRecommendationArticleCreationTranslationByFromLangBySeedArticle({ count, fromLang, seedArticle }) });
/**
* Recommend missing articles
* Recommends articles similar to the seed article but are missing
* from the domain language Wikipedia.
*
* Stability: [unstable](https://www.mediawiki.org/wiki/API_versioning#Unstable)
*
* @param data The data for the request.
* @param data.seedArticle The article title used to search similar but missing articles
* @returns morelike_result the prioritized list of Wikidata IDs recommended for creation as Wikipedia articles
* @returns problem Error
* @throws ApiError
*/
export const prefetchUseRecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticle = (queryClient: QueryClient, { seedArticle }: {
  seedArticle: string;
}) => queryClient.prefetchQuery({ queryKey: Common.UseRecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticleKeyFn({ seedArticle }), queryFn: () => RecommendationService.getDataRecommendationArticleCreationMorelikeBySeedArticle({ seedArticle }) });
