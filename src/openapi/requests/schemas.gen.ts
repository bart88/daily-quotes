// This file is auto-generated by @hey-api/openapi-ts

export const $revisions = {
    description: 'The result format for revision listing',
    required: ['items'],
    type: 'object',
    properties: {
        items: {
            '$ref': '#/components/schemas/revisionIdentifier'
        }
    }
} as const;

export const $listing = {
    description: 'The result format for listings',
    required: ['items'],
    type: 'object',
    properties: {
        items: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        _links: {
            type: 'object',
            properties: {
                next: {
                    type: 'object',
                    properties: {
                        href: {
                            type: 'string',
                            description: 'Relative link to next result page.'
                        }
                    }
                }
            }
        }
    }
} as const;

export const $data_parsoid = {
    description: 'Result format for Parsoid data queries',
    required: ['counter', 'ids'],
    type: 'object',
    properties: {
        counter: {
            type: 'integer',
            format: 'int32'
        },
        ids: {
            type: 'object',
            properties: {}
        }
    }
} as const;

export const $revision = {
    description: 'Result format for revision items',
    required: ['count', 'items'],
    type: 'object',
    properties: {
        count: {
            type: 'integer',
            format: 'int32'
        },
        items: {
            '$ref': '#/components/schemas/revisionInfo'
        }
    }
} as const;

export const $revisionInfo = {
    type: 'object',
    description: 'Complete information about the revision',
    properties: {
        title: {
            type: 'string'
        },
        page_id: {
            type: 'integer',
            format: 'int32'
        },
        rev: {
            type: 'integer',
            format: 'int32'
        },
        tid: {
            type: 'string'
        },
        comment: {
            type: 'string'
        },
        restrictions: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        tags: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        user_id: {
            type: 'integer',
            format: 'int32'
        },
        user_text: {
            type: 'string'
        },
        timestamp: {
            type: 'string',
            format: 'date-time'
        },
        redirect: {
            type: 'boolean'
        },
        page_language: {
            type: 'string'
        }
    }
} as const;

export const $revisionIdentifier = {
    type: 'object',
    description: 'Unique revision identifier',
    properties: {
        revision: {
            type: 'integer',
            format: 'int32'
        },
        tid: {
            type: 'string'
        }
    }
} as const;

export const $titles_set = {
    type: 'object',
    properties: {
        canonical: {
            type: 'string',
            description: 'the DB key (non-prefixed), e.g. may have _ instead of spaces, best for making request URIs, still requires Percent-encoding'
        },
        normalized: {
            type: 'string',
            description: 'the normalized title (https://www.mediawiki.org/wiki/API:Query#Example_2:_Title_normalization), e.g. may have spaces instead of _'
        },
        display: {
            type: 'string',
            description: 'the title as it should be displayed to the user'
        }
    },
    required: ['canonical', 'normalized', 'display'],
    description: 'a good example of the differences can be seen in https://en.wikipedia.org/api/rest_v1/page/summary/IOS_13'
} as const;

export const $media_list = {
    type: 'object',
    properties: {
        revision: {
            type: 'string',
            description: 'the revision ID used to create the list'
        },
        tid: {
            type: 'string',
            description: 'the time uuid of the page rendering used to create the list'
        },
        items: {
            type: 'array',
            description: 'a list of media items',
            items: {
                '$ref': '#/components/schemas/media_item'
            }
        }
    },
    required: ['items', 'revision', 'tid']
} as const;

export const $media_item = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            description: 'The file page title'
        },
        type: {
            type: 'string',
            enum: ['image', 'video', 'audio']
        },
        section_id: {
            type: 'integer',
            description: 'section ID in which the item is found on the page'
        },
        showInGallery: {
            type: 'boolean',
            description: 'whether the client should show the file in an image gallery presentation'
        },
        caption: {
            type: 'object',
            properties: {
                html: {
                    type: 'string',
                    description: 'on-wiki caption for the media item, including all HTML markup'
                },
                text: {
                    type: 'string',
                    description: 'plain text of the on-wiki caption for the media item'
                }
            }
        },
        original: {
            type: 'object',
            description: 'reference to a Mathoid-rendered math formula image',
            properties: {
                source: {
                    type: 'string',
                    description: 'Mathoid image render URL'
                },
                mime: {
                    type: 'string',
                    description: 'the Mathoid image mime type'
                }
            }
        }
    },
    required: ['type', 'section_id', 'showInGallery']
} as const;

export const $related = {
    type: 'object',
    properties: {
        pages: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/summary'
            }
        }
    }
} as const;

export const $problem = {
    required: ['type'],
    type: 'object',
    properties: {
        type: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        detail: {
            type: 'string'
        },
        instance: {
            type: 'string'
        }
    }
} as const;

export const $originalimage = {
    type: 'object',
    properties: {
        source: {
            type: 'string',
            description: 'Original image URI'
        },
        width: {
            type: 'integer',
            description: 'Original image width'
        },
        height: {
            type: 'integer',
            description: 'Original image height'
        }
    },
    required: ['height', 'source', 'width']
} as const;

export const $thumbnail = {
    type: 'object',
    properties: {
        source: {
            type: 'string',
            description: 'Thumbnail image URI'
        },
        width: {
            type: 'integer',
            description: 'Thumbnail width'
        },
        height: {
            type: 'integer',
            description: 'Thumnail height'
        }
    },
    required: ['height', 'source', 'width']
} as const;

export const $summary = {
    type: 'object',
    properties: {
        titles: {
            '$ref': '#/components/schemas/titles_set'
        },
        title: {
            deprecated: true,
            type: 'string',
            description: `The page title.
Deprecated: Use \`titles.normalized\` instead.
`
        },
        displaytitle: {
            deprecated: true,
            type: 'string',
            description: `The page title how it should be shown to the user.
Deprecated: Use \`titles.display\` instead.
`
        },
        pageid: {
            type: 'integer',
            description: 'The page ID'
        },
        extract: {
            type: 'string',
            description: 'First several sentences of an article in plain text'
        },
        extract_html: {
            type: 'string',
            description: 'First several sentences of an article in simple HTML format'
        },
        thumbnail: {
            '$ref': '#/components/schemas/thumbnail'
        },
        originalimage: {
            '$ref': '#/components/schemas/originalimage'
        },
        lang: {
            type: 'string',
            description: 'The page language code',
            example: 'en'
        },
        dir: {
            type: 'string',
            description: 'The page language direction code',
            example: 'ltr'
        },
        timestamp: {
            type: 'string',
            description: 'The time when the page was last edited in the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format',
            example: {}
        },
        description: {
            type: 'string',
            description: 'Wikidata description for the page',
            example: 'American poet'
        },
        coordinates: {
            type: 'object',
            description: 'The coordinates of the item',
            properties: {
                lat: {
                    type: 'number',
                    description: 'The latitude'
                },
                lon: {
                    type: 'number',
                    description: 'The longitude'
                }
            },
            required: ['lat', 'lon']
        }
    },
    required: ['dir', 'extract', 'lang', 'titles']
} as const;

export const $cx_mt = {
    type: 'object',
    properties: {
        contents: {
            type: 'string',
            description: 'the translated content'
        }
    }
} as const;

export const $cx_dict = {
    type: 'object',
    properties: {
        source: {
            type: 'string',
            description: 'the original word to look up'
        },
        translations: {
            type: 'array',
            description: 'the translations found',
            items: {
                type: 'object',
                properties: {
                    phrase: {
                        type: 'string',
                        description: 'the translated phrase'
                    },
                    info: {
                        type: 'string',
                        description: 'extra information about the phrase'
                    },
                    sources: {
                        type: 'string',
                        description: 'the source dictionary used for the translation'
                    }
                }
            }
        }
    }
} as const;

export const $mostread_article = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            description: 'Article title in a form of DB key'
        },
        normalizedtitle: {
            type: 'string',
            description: 'Article title as it should be presented to the user'
        },
        views: {
            type: 'integer',
            description: 'Number of views on the requested day'
        },
        rank: {
            type: 'integer',
            description: 'Position in the list of most viewed articles'
        },
        thumbnail: {
            '$ref': '#/components/schemas/thumbnail'
        },
        description: {
            type: 'string',
            description: 'Wikidata description of the article'
        },
        extract: {
            type: 'string',
            description: 'First several sentences of an article in plain text'
        }
    },
    required: ['title', 'normalizedtitle', 'views', 'rank']
} as const;

export const $mostread = {
    type: 'object',
    properties: {
        date: {
            type: 'string',
            description: 'The date which the data correspond to'
        },
        articles: {
            type: 'array',
            description: 'Array of most popular articles',
            items: {
                '$ref': '#/components/schemas/mostread_article'
            }
        }
    },
    required: ['date', 'articles']
} as const;

export const $news_item = {
    type: 'object',
    properties: {
        story: {
            type: 'string',
            description: 'A cover story for the news item'
        },
        links: {
            type: 'array',
            description: 'A collection of articles related to the news item',
            items: {
                '$ref': '#/components/schemas/summary'
            }
        }
    },
    required: ['story', 'links']
} as const;

export const $news = {
    type: 'array',
    items: {
        '$ref': '#/components/schemas/news_item'
    }
} as const;

export const $image_description = {
    type: 'object',
    properties: {
        text: {
            type: 'string',
            description: 'Text of the description'
        },
        lang: {
            type: 'string',
            description: 'Language code of the description'
        }
    },
    required: ['text', 'lang']
} as const;

export const $image = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            description: 'Image title'
        },
        thumbnail: {
            '$ref': '#/components/schemas/thumbnail'
        },
        image: {
            '$ref': '#/components/schemas/thumbnail'
        },
        description: {
            '$ref': '#/components/schemas/image_description'
        }
    },
    required: ['title', 'thumbnail', 'image']
} as const;

export const $onthisday = {
    type: 'array',
    items: {
        type: 'object',
        properties: {
            text: {
                type: 'string',
                description: 'Short description of the event'
            },
            pages: {
                type: 'array',
                description: 'List of pages related to the event',
                items: {
                    '$ref': '#/components/schemas/summary'
                }
            }
        }
    }
} as const;

export const $feed = {
    type: 'object',
    description: 'Aggregated feed content for a given date',
    properties: {
        tfa: {
            '$ref': '#/components/schemas/summary'
        },
        mostread: {
            '$ref': '#/components/schemas/mostread'
        },
        news: {
            '$ref': '#/components/schemas/news'
        },
        image: {
            '$ref': '#/components/schemas/image'
        },
        onthisday: {
            '$ref': '#/components/schemas/onthisday'
        }
    }
} as const;

export const $action = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
            description: 'The title to display on the button that performs the action'
        },
        url: {
            type: 'string',
            description: 'The URL to navigate to when the button is pressed'
        }
    },
    required: ['title', 'url']
} as const;

export const $announcement = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            description: 'Unique ID of the announcement'
        },
        type: {
            type: 'string',
            description: 'The type of announcement. Possible values are "survey" or "fundraising"'
        },
        start_time: {
            type: 'string',
            description: 'The date to begin showing the announcement'
        },
        end_time: {
            type: 'string',
            description: 'The date to stop showing the announcement'
        },
        platforms: {
            type: 'array',
            items: {
                type: 'string'
            },
            description: 'An array of platforms to display the announcement. Possible values are "iOSApp" or "AndroidApp"'
        },
        text: {
            type: 'string',
            description: 'The text of the announcement'
        },
        image: {
            type: 'string',
            description: 'The URL of the image for the announcement'
        },
        action: {
            '$ref': '#/components/schemas/action'
        },
        caption_HTML: {
            type: 'string',
            description: 'HTML to display below the announcement. Usually a privacy statment and link to a policy'
        },
        countries: {
            type: 'array',
            items: {
                type: 'string'
            },
            description: `An array of country codes in which to display the announcement.
Clients should derive the country from 'GeoIP' portion of the Set-Cookie header
`
        }
    },
    required: ['id', 'type', 'start_time', 'end_time', 'platforms', 'text', 'countries']
} as const;

export const $announcementsResponse = {
    type: 'object',
    properties: {
        announce: {
            type: 'array',
            items: {
                '$ref': '#/components/schemas/announcement'
            }
        }
    },
    required: ['announce']
} as const;

export const $onthisdayResponse = {
    type: 'object',
    description: 'Lists of events which happened on the provided day and month',
    properties: {
        births: {
            '$ref': '#/components/schemas/onthisday'
        },
        deaths: {
            '$ref': '#/components/schemas/onthisday'
        },
        events: {
            '$ref': '#/components/schemas/onthisday'
        },
        holidays: {
            '$ref': '#/components/schemas/onthisday'
        },
        selected: {
            '$ref': '#/components/schemas/onthisday'
        }
    }
} as const;

export const $result = {
    required: ['title', 'url', 'itemType'],
    type: 'object',
    properties: {
        itemType: {
            type: 'string'
        },
        title: {
            type: 'string'
        },
        url: {
            type: 'string'
        }
    }
} as const;

export const $list_read = {
    title: 'list',
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 42
        },
        name: {
            type: 'string',
            example: 'Planets'
        },
        description: {
            type: 'string',
            example: 'Planets of the Solar System'
        },
        created: {
            type: 'string',
            format: 'date-time',
            description: 'Creation date (in ISO 8601)'
        },
        updated: {
            type: 'string',
            format: 'date-time',
            description: 'Last modification date (in ISO 8601)'
        }
    },
    required: ['id', 'name', 'created', 'updated']
} as const;

export const $list_write = {
    title: 'list',
    type: 'object',
    properties: {
        name: {
            type: 'string',
            example: 'Planets'
        },
        description: {
            type: 'string',
            example: 'Planets of the Solar System'
        }
    },
    required: ['name']
} as const;

export const $list_entry_read = {
    title: 'list_entry',
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            example: 64
        },
        project: {
            type: 'string',
            description: 'Domain of the wiki containing the page.',
            example: 'https://en.wikipedia.org'
        },
        title: {
            type: 'string',
            description: 'Title of the page containing the page, in database format.',
            example: 'Barack_Obama'
        },
        created: {
            type: 'string',
            format: 'date-time',
            description: 'Creation date (in ISO 8601)'
        },
        updated: {
            type: 'string',
            format: 'date-time',
            description: 'Last modification date (in ISO 8601)'
        }
    }
} as const;

export const $list_entry_write = {
    type: 'object',
    properties: {
        project: {
            type: 'string',
            description: 'Domain of the wiki containing the page.',
            example: 'https://en.wikipedia.org'
        },
        title: {
            type: 'string',
            description: 'Title of the page containing the page, in database format.',
            example: 'Barack_Obama'
        }
    },
    required: ['project', 'title']
} as const;

export const $recommendation_result = {
    type: 'object',
    properties: {
        count: {
            type: 'integer',
            description: 'the number of recommendations returned'
        },
        items: {
            type: 'array',
            description: 'the list of articles recommended for translation',
            items: {
                type: 'object',
                properties: {
                    wikidata_id: {
                        type: 'string',
                        description: 'wikidata id for the item'
                    },
                    title: {
                        type: 'string',
                        description: 'title of the article in the source language'
                    },
                    sitelink_count: {
                        type: 'integer',
                        description: 'count of sites the wikidata item is linked to'
                    }
                }
            }
        }
    }
} as const;

export const $morelike_result = {
    type: 'array',
    description: 'the prioritized list of Wikidata IDs recommended for creation as Wikipedia articles',
    items: {
        type: 'object',
        properties: {
            wikidata_id: {
                type: 'string',
                description: 'Wikidata ID for the item'
            },
            score: {
                type: 'number',
                description: 'Score of the recommendation. The higher the score, the more important the recommendation is.'
            },
            source_language: {
                type: 'string',
                description: 'Source of the recommendation -- which wiki is recommending the current article.'
            }
        }
    }
} as const;