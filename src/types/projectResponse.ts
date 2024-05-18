interface ProjectResponse {
    data: Data[] | null;
    meta: Meta | null;
}

interface Data {
    id: number;
    attributes: Attributes;
}

interface Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    name: string;
    description: string;
    content: Content[];
    techstack: Techstack[];
    preview: Preview;
}

interface Content {
    type: string;
    children: ContentChild[];
}

interface ContentChild {
    type: string;
    text: string;
}

interface Techstack {
    id: number;
    name: string;
    url: string;
    color: string;
}

interface Preview {
    data: PreviewData;
}

interface PreviewData {
    id: number;
    attributes: PreviewAttributes;
}

interface PreviewAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
}

interface Formats {
    thumbnail: FormatDetails;
    medium: FormatDetails;
    small: FormatDetails;
    large: FormatDetails;
}

interface FormatDetails {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: string | null;
    width: number;
    height: number;
    size: number;
    sizeInBytes: number;
    url: string;
}

interface Meta {
    pagination: Pagination;
}

interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
