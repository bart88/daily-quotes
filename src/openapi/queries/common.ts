// generated with @7nohe/openapi-react-query-codegen@1.4.1 

import { UseQueryResult } from "@tanstack/react-query";
import { CitationService, FeedService, MathService, MobileService, OfflineService, PageContentService, ReadingListsService, RecommendationService, TalkPagesService, TransformsService } from "../requests/services.gen";
export type PageContentServiceGetPageDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPage>>;
export type PageContentServiceGetPageQueryResult<TData = PageContentServiceGetPageDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageKey = "PageContentServiceGetPage";
export const UsePageContentServiceGetPageKeyFn = (queryKey?: Array<unknown>) => [usePageContentServiceGetPageKey, ...(queryKey ?? [])];
export type PageContentServiceGetPageTitleByTitleDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageTitleByTitle>>;
export type PageContentServiceGetPageTitleByTitleQueryResult<TData = PageContentServiceGetPageTitleByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageTitleByTitleKey = "PageContentServiceGetPageTitleByTitle";
export const UsePageContentServiceGetPageTitleByTitleKeyFn = ({ title }: {
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageTitleByTitleKey, ...(queryKey ?? [{ title }])];
export type PageContentServiceGetPageTitleByTitleByRevisionDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageTitleByTitleByRevision>>;
export type PageContentServiceGetPageTitleByTitleByRevisionQueryResult<TData = PageContentServiceGetPageTitleByTitleByRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageTitleByTitleByRevisionKey = "PageContentServiceGetPageTitleByTitleByRevision";
export const UsePageContentServiceGetPageTitleByTitleByRevisionKeyFn = ({ revision, title }: {
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageTitleByTitleByRevisionKey, ...(queryKey ?? [{ revision, title }])];
export type PageContentServiceGetPageHtmlByTitleDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageHtmlByTitle>>;
export type PageContentServiceGetPageHtmlByTitleQueryResult<TData = PageContentServiceGetPageHtmlByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageHtmlByTitleKey = "PageContentServiceGetPageHtmlByTitle";
export const UsePageContentServiceGetPageHtmlByTitleKeyFn = ({ acceptLanguage, redirect, stash, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  stash?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageHtmlByTitleKey, ...(queryKey ?? [{ acceptLanguage, redirect, stash, title }])];
export type PageContentServiceGetFormatRevisionDefaultResponse = Awaited<ReturnType<typeof PageContentService.getFormatRevision>>;
export type PageContentServiceGetFormatRevisionQueryResult<TData = PageContentServiceGetFormatRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetFormatRevisionKey = "PageContentServiceGetFormatRevision";
export const UsePageContentServiceGetFormatRevisionKeyFn = ({ acceptLanguage, redirect, revision, stash, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  revision: number;
  stash?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetFormatRevisionKey, ...(queryKey ?? [{ acceptLanguage, redirect, revision, stash, title }])];
export type PageContentServiceGetPageDataParsoidByTitleByRevisionByTidDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageDataParsoidByTitleByRevisionByTid>>;
export type PageContentServiceGetPageDataParsoidByTitleByRevisionByTidQueryResult<TData = PageContentServiceGetPageDataParsoidByTitleByRevisionByTidDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageDataParsoidByTitleByRevisionByTidKey = "PageContentServiceGetPageDataParsoidByTitleByRevisionByTid";
export const UsePageContentServiceGetPageDataParsoidByTitleByRevisionByTidKeyFn = ({ redirect, revision, tid, title }: {
  redirect?: boolean;
  revision: number;
  tid: string;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageDataParsoidByTitleByRevisionByTidKey, ...(queryKey ?? [{ redirect, revision, tid, title }])];
export type PageContentServiceGetPageLintByTitleDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageLintByTitle>>;
export type PageContentServiceGetPageLintByTitleQueryResult<TData = PageContentServiceGetPageLintByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageLintByTitleKey = "PageContentServiceGetPageLintByTitle";
export const UsePageContentServiceGetPageLintByTitleKeyFn = ({ title }: {
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageLintByTitleKey, ...(queryKey ?? [{ title }])];
export type PageContentServiceGetPageLintByTitleByRevisionDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageLintByTitleByRevision>>;
export type PageContentServiceGetPageLintByTitleByRevisionQueryResult<TData = PageContentServiceGetPageLintByTitleByRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageLintByTitleByRevisionKey = "PageContentServiceGetPageLintByTitleByRevision";
export const UsePageContentServiceGetPageLintByTitleByRevisionKeyFn = ({ revision, title }: {
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageLintByTitleByRevisionKey, ...(queryKey ?? [{ revision, title }])];
export type PageContentServiceGetPageSegmentsByTitleDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageSegmentsByTitle>>;
export type PageContentServiceGetPageSegmentsByTitleQueryResult<TData = PageContentServiceGetPageSegmentsByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageSegmentsByTitleKey = "PageContentServiceGetPageSegmentsByTitle";
export const UsePageContentServiceGetPageSegmentsByTitleKeyFn = ({ title }: {
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageSegmentsByTitleKey, ...(queryKey ?? [{ title }])];
export type PageContentServiceGetPageSegmentsByTitleByRevisionDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageSegmentsByTitleByRevision>>;
export type PageContentServiceGetPageSegmentsByTitleByRevisionQueryResult<TData = PageContentServiceGetPageSegmentsByTitleByRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageSegmentsByTitleByRevisionKey = "PageContentServiceGetPageSegmentsByTitleByRevision";
export const UsePageContentServiceGetPageSegmentsByTitleByRevisionKeyFn = ({ revision, title }: {
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageSegmentsByTitleByRevisionKey, ...(queryKey ?? [{ revision, title }])];
export type PageContentServiceGetPageSummaryByTitleDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageSummaryByTitle>>;
export type PageContentServiceGetPageSummaryByTitleQueryResult<TData = PageContentServiceGetPageSummaryByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageSummaryByTitleKey = "PageContentServiceGetPageSummaryByTitle";
export const UsePageContentServiceGetPageSummaryByTitleKeyFn = ({ acceptLanguage, redirect, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageSummaryByTitleKey, ...(queryKey ?? [{ acceptLanguage, redirect, title }])];
export type PageContentServiceGetContentMediaListDefaultResponse = Awaited<ReturnType<typeof PageContentService.getContentMediaList>>;
export type PageContentServiceGetContentMediaListQueryResult<TData = PageContentServiceGetContentMediaListDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetContentMediaListKey = "PageContentServiceGetContentMediaList";
export const UsePageContentServiceGetContentMediaListKeyFn = ({ redirect, title }: {
  redirect?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetContentMediaListKey, ...(queryKey ?? [{ redirect, title }])];
export type PageContentServiceGetContentWithRevisionMediaListDefaultResponse = Awaited<ReturnType<typeof PageContentService.getContentWithRevisionMediaList>>;
export type PageContentServiceGetContentWithRevisionMediaListQueryResult<TData = PageContentServiceGetContentWithRevisionMediaListDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetContentWithRevisionMediaListKey = "PageContentServiceGetContentWithRevisionMediaList";
export const UsePageContentServiceGetContentWithRevisionMediaListKeyFn = ({ redirect, revision, title }: {
  redirect?: boolean;
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetContentWithRevisionMediaListKey, ...(queryKey ?? [{ redirect, revision, title }])];
export type PageContentServiceGetContentMobileHtmlDefaultResponse = Awaited<ReturnType<typeof PageContentService.getContentMobileHtml>>;
export type PageContentServiceGetContentMobileHtmlQueryResult<TData = PageContentServiceGetContentMobileHtmlDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetContentMobileHtmlKey = "PageContentServiceGetContentMobileHtml";
export const UsePageContentServiceGetContentMobileHtmlKeyFn = ({ redirect, title }: {
  redirect?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetContentMobileHtmlKey, ...(queryKey ?? [{ redirect, title }])];
export type PageContentServiceGetContentWithRevisionMobileHtmlDefaultResponse = Awaited<ReturnType<typeof PageContentService.getContentWithRevisionMobileHtml>>;
export type PageContentServiceGetContentWithRevisionMobileHtmlQueryResult<TData = PageContentServiceGetContentWithRevisionMobileHtmlDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetContentWithRevisionMobileHtmlKey = "PageContentServiceGetContentWithRevisionMobileHtml";
export const UsePageContentServiceGetContentWithRevisionMobileHtmlKeyFn = ({ redirect, revision, title }: {
  redirect?: boolean;
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetContentWithRevisionMobileHtmlKey, ...(queryKey ?? [{ redirect, revision, title }])];
export type PageContentServiceGetPageMobileHtmlOfflineResourcesByTitleDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageMobileHtmlOfflineResourcesByTitle>>;
export type PageContentServiceGetPageMobileHtmlOfflineResourcesByTitleQueryResult<TData = PageContentServiceGetPageMobileHtmlOfflineResourcesByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleKey = "PageContentServiceGetPageMobileHtmlOfflineResourcesByTitle";
export const UsePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleKeyFn = ({ title }: {
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleKey, ...(queryKey ?? [{ title }])];
export type PageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageMobileHtmlOfflineResourcesByTitleByRevision>>;
export type PageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionQueryResult<TData = PageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionKey = "PageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevision";
export const UsePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionKeyFn = ({ revision, title }: {
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionKey, ...(queryKey ?? [{ revision, title }])];
export type PageContentServiceGetRelatedPagesDefaultResponse = Awaited<ReturnType<typeof PageContentService.getRelatedPages>>;
export type PageContentServiceGetRelatedPagesQueryResult<TData = PageContentServiceGetRelatedPagesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetRelatedPagesKey = "PageContentServiceGetRelatedPages";
export const UsePageContentServiceGetRelatedPagesKeyFn = ({ title }: {
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetRelatedPagesKey, ...(queryKey ?? [{ title }])];
export type PageContentServiceGetPageRandomByFormatDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPageRandomByFormat>>;
export type PageContentServiceGetPageRandomByFormatQueryResult<TData = PageContentServiceGetPageRandomByFormatDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPageRandomByFormatKey = "PageContentServiceGetPageRandomByFormat";
export const UsePageContentServiceGetPageRandomByFormatKeyFn = ({ format }: {
  format: "title" | "html" | "summary" | "related" | "mobile-sections" | "mobile-sections-lead";
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPageRandomByFormatKey, ...(queryKey ?? [{ format }])];
export type PageContentServiceGetPagePdfByTitleDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPagePdfByTitle>>;
export type PageContentServiceGetPagePdfByTitleQueryResult<TData = PageContentServiceGetPagePdfByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPagePdfByTitleKey = "PageContentServiceGetPagePdfByTitle";
export const UsePageContentServiceGetPagePdfByTitleKeyFn = ({ title }: {
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPagePdfByTitleKey, ...(queryKey ?? [{ title }])];
export type PageContentServiceGetPagePdfByTitleByFormatDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPagePdfByTitleByFormat>>;
export type PageContentServiceGetPagePdfByTitleByFormatQueryResult<TData = PageContentServiceGetPagePdfByTitleByFormatDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPagePdfByTitleByFormatKey = "PageContentServiceGetPagePdfByTitleByFormat";
export const UsePageContentServiceGetPagePdfByTitleByFormatKeyFn = ({ format, title }: {
  format: "a4" | "letter" | "legal";
  title: string;
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPagePdfByTitleByFormatKey, ...(queryKey ?? [{ format, title }])];
export type PageContentServiceGetPagePdfByTitleByFormatByTypeDefaultResponse = Awaited<ReturnType<typeof PageContentService.getPagePdfByTitleByFormatByType>>;
export type PageContentServiceGetPagePdfByTitleByFormatByTypeQueryResult<TData = PageContentServiceGetPagePdfByTitleByFormatByTypeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const usePageContentServiceGetPagePdfByTitleByFormatByTypeKey = "PageContentServiceGetPagePdfByTitleByFormatByType";
export const UsePageContentServiceGetPagePdfByTitleByFormatByTypeKeyFn = ({ format, title, type }: {
  format: "a4" | "letter" | "legal";
  title: string;
  type?: "mobile" | "desktop";
}, queryKey?: Array<unknown>) => [usePageContentServiceGetPagePdfByTitleByFormatByTypeKey, ...(queryKey ?? [{ format, title, type }])];
export type MobileServiceGetSectionsDefaultResponse = Awaited<ReturnType<typeof MobileService.getSections>>;
export type MobileServiceGetSectionsQueryResult<TData = MobileServiceGetSectionsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetSectionsKey = "MobileServiceGetSections";
export const UseMobileServiceGetSectionsKeyFn = ({ acceptLanguage, redirect, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [useMobileServiceGetSectionsKey, ...(queryKey ?? [{ acceptLanguage, redirect, title }])];
export type MobileServiceGetSectionsWithRevisionDefaultResponse = Awaited<ReturnType<typeof MobileService.getSectionsWithRevision>>;
export type MobileServiceGetSectionsWithRevisionQueryResult<TData = MobileServiceGetSectionsWithRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetSectionsWithRevisionKey = "MobileServiceGetSectionsWithRevision";
export const UseMobileServiceGetSectionsWithRevisionKeyFn = ({ acceptLanguage, redirect, revision, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [useMobileServiceGetSectionsWithRevisionKey, ...(queryKey ?? [{ acceptLanguage, redirect, revision, title }])];
export type MobileServiceGetSectionsLeadDefaultResponse = Awaited<ReturnType<typeof MobileService.getSectionsLead>>;
export type MobileServiceGetSectionsLeadQueryResult<TData = MobileServiceGetSectionsLeadDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetSectionsLeadKey = "MobileServiceGetSectionsLead";
export const UseMobileServiceGetSectionsLeadKeyFn = ({ acceptLanguage, redirect, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [useMobileServiceGetSectionsLeadKey, ...(queryKey ?? [{ acceptLanguage, redirect, title }])];
export type MobileServiceGetSectionsLeadWithRevisionDefaultResponse = Awaited<ReturnType<typeof MobileService.getSectionsLeadWithRevision>>;
export type MobileServiceGetSectionsLeadWithRevisionQueryResult<TData = MobileServiceGetSectionsLeadWithRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetSectionsLeadWithRevisionKey = "MobileServiceGetSectionsLeadWithRevision";
export const UseMobileServiceGetSectionsLeadWithRevisionKeyFn = ({ acceptLanguage, redirect, revision, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [useMobileServiceGetSectionsLeadWithRevisionKey, ...(queryKey ?? [{ acceptLanguage, redirect, revision, title }])];
export type MobileServiceGetSectionsRemainingDefaultResponse = Awaited<ReturnType<typeof MobileService.getSectionsRemaining>>;
export type MobileServiceGetSectionsRemainingQueryResult<TData = MobileServiceGetSectionsRemainingDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetSectionsRemainingKey = "MobileServiceGetSectionsRemaining";
export const UseMobileServiceGetSectionsRemainingKeyFn = ({ acceptLanguage, redirect, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [useMobileServiceGetSectionsRemainingKey, ...(queryKey ?? [{ acceptLanguage, redirect, title }])];
export type MobileServiceGetSectionsRemainingWithRevisionDefaultResponse = Awaited<ReturnType<typeof MobileService.getSectionsRemainingWithRevision>>;
export type MobileServiceGetSectionsRemainingWithRevisionQueryResult<TData = MobileServiceGetSectionsRemainingWithRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetSectionsRemainingWithRevisionKey = "MobileServiceGetSectionsRemainingWithRevision";
export const UseMobileServiceGetSectionsRemainingWithRevisionKeyFn = ({ acceptLanguage, redirect, revision, title }: {
  acceptLanguage?: string;
  redirect?: boolean;
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [useMobileServiceGetSectionsRemainingWithRevisionKey, ...(queryKey ?? [{ acceptLanguage, redirect, revision, title }])];
export type MobileServiceGetDataCssMobileByTypeDefaultResponse = Awaited<ReturnType<typeof MobileService.getDataCssMobileByType>>;
export type MobileServiceGetDataCssMobileByTypeQueryResult<TData = MobileServiceGetDataCssMobileByTypeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetDataCssMobileByTypeKey = "MobileServiceGetDataCssMobileByType";
export const UseMobileServiceGetDataCssMobileByTypeKeyFn = ({ type }: {
  type: "base" | "pagelib" | "pcs" | "site";
}, queryKey?: Array<unknown>) => [useMobileServiceGetDataCssMobileByTypeKey, ...(queryKey ?? [{ type }])];
export type MobileServiceGetDataJavascriptMobileByTypeDefaultResponse = Awaited<ReturnType<typeof MobileService.getDataJavascriptMobileByType>>;
export type MobileServiceGetDataJavascriptMobileByTypeQueryResult<TData = MobileServiceGetDataJavascriptMobileByTypeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetDataJavascriptMobileByTypeKey = "MobileServiceGetDataJavascriptMobileByType";
export const UseMobileServiceGetDataJavascriptMobileByTypeKeyFn = ({ type }: {
  type: "pagelib" | "pcs";
}, queryKey?: Array<unknown>) => [useMobileServiceGetDataJavascriptMobileByTypeKey, ...(queryKey ?? [{ type }])];
export type MobileServiceGetDataI18nByTypeDefaultResponse = Awaited<ReturnType<typeof MobileService.getDataI18nByType>>;
export type MobileServiceGetDataI18nByTypeQueryResult<TData = MobileServiceGetDataI18nByTypeDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMobileServiceGetDataI18nByTypeKey = "MobileServiceGetDataI18nByType";
export const UseMobileServiceGetDataI18nByTypeKeyFn = ({ type }: {
  type: "pcs";
}, queryKey?: Array<unknown>) => [useMobileServiceGetDataI18nByTypeKey, ...(queryKey ?? [{ type }])];
export type OfflineServiceGetPageMobileHtmlOfflineResourcesByTitleDefaultResponse = Awaited<ReturnType<typeof OfflineService.getPageMobileHtmlOfflineResourcesByTitle>>;
export type OfflineServiceGetPageMobileHtmlOfflineResourcesByTitleQueryResult<TData = OfflineServiceGetPageMobileHtmlOfflineResourcesByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleKey = "OfflineServiceGetPageMobileHtmlOfflineResourcesByTitle";
export const UseOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleKeyFn = ({ title }: {
  title: string;
}, queryKey?: Array<unknown>) => [useOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleKey, ...(queryKey ?? [{ title }])];
export type OfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionDefaultResponse = Awaited<ReturnType<typeof OfflineService.getPageMobileHtmlOfflineResourcesByTitleByRevision>>;
export type OfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionQueryResult<TData = OfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionKey = "OfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevision";
export const UseOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionKeyFn = ({ revision, title }: {
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [useOfflineServiceGetPageMobileHtmlOfflineResourcesByTitleByRevisionKey, ...(queryKey ?? [{ revision, title }])];
export type TalkPagesServiceGetPageTalkByTitleDefaultResponse = Awaited<ReturnType<typeof TalkPagesService.getPageTalkByTitle>>;
export type TalkPagesServiceGetPageTalkByTitleQueryResult<TData = TalkPagesServiceGetPageTalkByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTalkPagesServiceGetPageTalkByTitleKey = "TalkPagesServiceGetPageTalkByTitle";
export const UseTalkPagesServiceGetPageTalkByTitleKeyFn = ({ redirect, title }: {
  redirect?: boolean;
  title: string;
}, queryKey?: Array<unknown>) => [useTalkPagesServiceGetPageTalkByTitleKey, ...(queryKey ?? [{ redirect, title }])];
export type TalkPagesServiceGetPageTalkByTitleByRevisionDefaultResponse = Awaited<ReturnType<typeof TalkPagesService.getPageTalkByTitleByRevision>>;
export type TalkPagesServiceGetPageTalkByTitleByRevisionQueryResult<TData = TalkPagesServiceGetPageTalkByTitleByRevisionDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTalkPagesServiceGetPageTalkByTitleByRevisionKey = "TalkPagesServiceGetPageTalkByTitleByRevision";
export const UseTalkPagesServiceGetPageTalkByTitleByRevisionKeyFn = ({ redirect, revision, title }: {
  redirect?: boolean;
  revision: number;
  title: string;
}, queryKey?: Array<unknown>) => [useTalkPagesServiceGetPageTalkByTitleByRevisionKey, ...(queryKey ?? [{ redirect, revision, title }])];
export type FeedServiceAggregatedFeedDefaultResponse = Awaited<ReturnType<typeof FeedService.aggregatedFeed>>;
export type FeedServiceAggregatedFeedQueryResult<TData = FeedServiceAggregatedFeedDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFeedServiceAggregatedFeedKey = "FeedServiceAggregatedFeed";
export const UseFeedServiceAggregatedFeedKeyFn = ({ dd, mm, yyyy }: {
  dd: string;
  mm: string;
  yyyy: string;
}, queryKey?: Array<unknown>) => [useFeedServiceAggregatedFeedKey, ...(queryKey ?? [{ dd, mm, yyyy }])];
export type FeedServiceGetFeedAnnouncementsDefaultResponse = Awaited<ReturnType<typeof FeedService.getFeedAnnouncements>>;
export type FeedServiceGetFeedAnnouncementsQueryResult<TData = FeedServiceGetFeedAnnouncementsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFeedServiceGetFeedAnnouncementsKey = "FeedServiceGetFeedAnnouncements";
export const UseFeedServiceGetFeedAnnouncementsKeyFn = (queryKey?: Array<unknown>) => [useFeedServiceGetFeedAnnouncementsKey, ...(queryKey ?? [])];
export type FeedServiceOnThisDayDefaultResponse = Awaited<ReturnType<typeof FeedService.onThisDay>>;
export type FeedServiceOnThisDayQueryResult<TData = FeedServiceOnThisDayDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useFeedServiceOnThisDayKey = "FeedServiceOnThisDay";
export const UseFeedServiceOnThisDayKeyFn = ({ dd, mm, type }: {
  dd: string;
  mm: string;
  type: "all" | "selected" | "births" | "deaths" | "events" | "holidays";
}, queryKey?: Array<unknown>) => [useFeedServiceOnThisDayKey, ...(queryKey ?? [{ dd, mm, type }])];
export type TransformsServiceDoDictDefaultResponse = Awaited<ReturnType<typeof TransformsService.doDict>>;
export type TransformsServiceDoDictQueryResult<TData = TransformsServiceDoDictDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTransformsServiceDoDictKey = "TransformsServiceDoDict";
export const UseTransformsServiceDoDictKeyFn = ({ from, word }: {
  from: string;
  word: string;
}, queryKey?: Array<unknown>) => [useTransformsServiceDoDictKey, ...(queryKey ?? [{ from, word }])];
export type TransformsServiceDoDictProviderDefaultResponse = Awaited<ReturnType<typeof TransformsService.doDictProvider>>;
export type TransformsServiceDoDictProviderQueryResult<TData = TransformsServiceDoDictProviderDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useTransformsServiceDoDictProviderKey = "TransformsServiceDoDictProvider";
export const UseTransformsServiceDoDictProviderKeyFn = ({ from, provider, word }: {
  from: string;
  provider: "JsonDict" | "Dictd";
  word: string;
}, queryKey?: Array<unknown>) => [useTransformsServiceDoDictProviderKey, ...(queryKey ?? [{ from, provider, word }])];
export type MathServiceGetMediaMathFormulaByHashDefaultResponse = Awaited<ReturnType<typeof MathService.getMediaMathFormulaByHash>>;
export type MathServiceGetMediaMathFormulaByHashQueryResult<TData = MathServiceGetMediaMathFormulaByHashDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMathServiceGetMediaMathFormulaByHashKey = "MathServiceGetMediaMathFormulaByHash";
export const UseMathServiceGetMediaMathFormulaByHashKeyFn = ({ hash }: {
  hash: string;
}, queryKey?: Array<unknown>) => [useMathServiceGetMediaMathFormulaByHashKey, ...(queryKey ?? [{ hash }])];
export type MathServiceGetMediaMathRenderByFormatByHashDefaultResponse = Awaited<ReturnType<typeof MathService.getMediaMathRenderByFormatByHash>>;
export type MathServiceGetMediaMathRenderByFormatByHashQueryResult<TData = MathServiceGetMediaMathRenderByFormatByHashDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useMathServiceGetMediaMathRenderByFormatByHashKey = "MathServiceGetMediaMathRenderByFormatByHash";
export const UseMathServiceGetMediaMathRenderByFormatByHashKeyFn = ({ format, hash }: {
  format: "svg" | "mml" | "png";
  hash: string;
}, queryKey?: Array<unknown>) => [useMathServiceGetMediaMathRenderByFormatByHashKey, ...(queryKey ?? [{ format, hash }])];
export type CitationServiceGetCitationDefaultResponse = Awaited<ReturnType<typeof CitationService.getCitation>>;
export type CitationServiceGetCitationQueryResult<TData = CitationServiceGetCitationDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useCitationServiceGetCitationKey = "CitationServiceGetCitation";
export const UseCitationServiceGetCitationKeyFn = ({ acceptLanguage, format, query }: {
  acceptLanguage?: string;
  format: "mediawiki" | "mediawiki-basefields" | "zotero" | "bibtex" | "wikibase";
  query: string;
}, queryKey?: Array<unknown>) => [useCitationServiceGetCitationKey, ...(queryKey ?? [{ acceptLanguage, format, query }])];
export type ReadingListsServiceGetDataListsDefaultResponse = Awaited<ReturnType<typeof ReadingListsService.getDataLists>>;
export type ReadingListsServiceGetDataListsQueryResult<TData = ReadingListsServiceGetDataListsDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useReadingListsServiceGetDataListsKey = "ReadingListsServiceGetDataLists";
export const UseReadingListsServiceGetDataListsKeyFn = ({ next, sort }: {
  next?: string;
  sort?: "name" | "updated";
} = {}, queryKey?: Array<unknown>) => [useReadingListsServiceGetDataListsKey, ...(queryKey ?? [{ next, sort }])];
export type ReadingListsServiceGetListEntriesDefaultResponse = Awaited<ReturnType<typeof ReadingListsService.getListEntries>>;
export type ReadingListsServiceGetListEntriesQueryResult<TData = ReadingListsServiceGetListEntriesDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useReadingListsServiceGetListEntriesKey = "ReadingListsServiceGetListEntries";
export const UseReadingListsServiceGetListEntriesKeyFn = ({ id, next, sort }: {
  id: number;
  next?: string;
  sort?: "name" | "updated";
}, queryKey?: Array<unknown>) => [useReadingListsServiceGetListEntriesKey, ...(queryKey ?? [{ id, next, sort }])];
export type ReadingListsServiceGetDataListsPagesByProjectByTitleDefaultResponse = Awaited<ReturnType<typeof ReadingListsService.getDataListsPagesByProjectByTitle>>;
export type ReadingListsServiceGetDataListsPagesByProjectByTitleQueryResult<TData = ReadingListsServiceGetDataListsPagesByProjectByTitleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useReadingListsServiceGetDataListsPagesByProjectByTitleKey = "ReadingListsServiceGetDataListsPagesByProjectByTitle";
export const UseReadingListsServiceGetDataListsPagesByProjectByTitleKeyFn = ({ next, project, title }: {
  next?: string;
  project: string;
  title: string;
}, queryKey?: Array<unknown>) => [useReadingListsServiceGetDataListsPagesByProjectByTitleKey, ...(queryKey ?? [{ next, project, title }])];
export type ReadingListsServiceGetDataListsChangesSinceByDateDefaultResponse = Awaited<ReturnType<typeof ReadingListsService.getDataListsChangesSinceByDate>>;
export type ReadingListsServiceGetDataListsChangesSinceByDateQueryResult<TData = ReadingListsServiceGetDataListsChangesSinceByDateDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useReadingListsServiceGetDataListsChangesSinceByDateKey = "ReadingListsServiceGetDataListsChangesSinceByDate";
export const UseReadingListsServiceGetDataListsChangesSinceByDateKeyFn = ({ date, next }: {
  date: string;
  next?: string;
}, queryKey?: Array<unknown>) => [useReadingListsServiceGetDataListsChangesSinceByDateKey, ...(queryKey ?? [{ date, next }])];
export type RecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangDefaultResponse = Awaited<ReturnType<typeof RecommendationService.getDataRecommendationArticleCreationTranslationByFromLang>>;
export type RecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangQueryResult<TData = RecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangKey = "RecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLang";
export const UseRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangKeyFn = ({ count, fromLang }: {
  count?: number;
  fromLang: string;
}, queryKey?: Array<unknown>) => [useRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangKey, ...(queryKey ?? [{ count, fromLang }])];
export type RecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticleDefaultResponse = Awaited<ReturnType<typeof RecommendationService.getDataRecommendationArticleCreationTranslationByFromLangBySeedArticle>>;
export type RecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticleQueryResult<TData = RecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticleKey = "RecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticle";
export const UseRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticleKeyFn = ({ count, fromLang, seedArticle }: {
  count?: number;
  fromLang: string;
  seedArticle: string;
}, queryKey?: Array<unknown>) => [useRecommendationServiceGetDataRecommendationArticleCreationTranslationByFromLangBySeedArticleKey, ...(queryKey ?? [{ count, fromLang, seedArticle }])];
export type RecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticleDefaultResponse = Awaited<ReturnType<typeof RecommendationService.getDataRecommendationArticleCreationMorelikeBySeedArticle>>;
export type RecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticleQueryResult<TData = RecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticleDefaultResponse, TError = unknown> = UseQueryResult<TData, TError>;
export const useRecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticleKey = "RecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticle";
export const UseRecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticleKeyFn = ({ seedArticle }: {
  seedArticle: string;
}, queryKey?: Array<unknown>) => [useRecommendationServiceGetDataRecommendationArticleCreationMorelikeBySeedArticleKey, ...(queryKey ?? [{ seedArticle }])];
export type TransformsServicePostTransformHtmlToWikitextMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformHtmlToWikitext>>;
export type TransformsServicePostTransformHtmlToWikitextByTitleMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformHtmlToWikitextByTitle>>;
export type TransformsServicePostTransformHtmlToWikitextByTitleByRevisionMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformHtmlToWikitextByTitleByRevision>>;
export type TransformsServicePostTransformWikitextToHtmlMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformWikitextToHtml>>;
export type TransformsServicePostTransformWikitextToHtmlByTitleMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformWikitextToHtmlByTitle>>;
export type TransformsServicePostTransformWikitextToHtmlByTitleByRevisionMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformWikitextToHtmlByTitleByRevision>>;
export type TransformsServicePostTransformWikitextToLintMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformWikitextToLint>>;
export type TransformsServicePostTransformWikitextToLintByTitleMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformWikitextToLintByTitle>>;
export type TransformsServicePostTransformWikitextToLintByTitleByRevisionMutationResult = Awaited<ReturnType<typeof TransformsService.postTransformWikitextToLintByTitleByRevision>>;
export type TransformsServiceTransformWikitextToMobileHtmlMutationResult = Awaited<ReturnType<typeof TransformsService.transformWikitextToMobileHtml>>;
export type TransformsServiceDoMtMutationResult = Awaited<ReturnType<typeof TransformsService.doMt>>;
export type TransformsServiceDoMtProviderMutationResult = Awaited<ReturnType<typeof TransformsService.doMtProvider>>;
export type MathServicePostMediaMathCheckByTypeMutationResult = Awaited<ReturnType<typeof MathService.postMediaMathCheckByType>>;
export type ReadingListsServicePostDataListsSetupMutationResult = Awaited<ReturnType<typeof ReadingListsService.postDataListsSetup>>;
export type ReadingListsServicePostDataListsTeardownMutationResult = Awaited<ReturnType<typeof ReadingListsService.postDataListsTeardown>>;
export type ReadingListsServicePostDataListsMutationResult = Awaited<ReturnType<typeof ReadingListsService.postDataLists>>;
export type ReadingListsServicePostDataListsBatchMutationResult = Awaited<ReturnType<typeof ReadingListsService.postDataListsBatch>>;
export type ReadingListsServicePostDataListsByIdEntriesMutationResult = Awaited<ReturnType<typeof ReadingListsService.postDataListsByIdEntries>>;
export type ReadingListsServicePostDataListsByIdEntriesBatchMutationResult = Awaited<ReturnType<typeof ReadingListsService.postDataListsByIdEntriesBatch>>;
export type ReadingListsServicePutDataListsByIdMutationResult = Awaited<ReturnType<typeof ReadingListsService.putDataListsById>>;
export type ReadingListsServiceDeleteDataListsByIdMutationResult = Awaited<ReturnType<typeof ReadingListsService.deleteDataListsById>>;
export type ReadingListsServiceDeleteDataListsByIdEntriesByEntryIdMutationResult = Awaited<ReturnType<typeof ReadingListsService.deleteDataListsByIdEntriesByEntryId>>;
