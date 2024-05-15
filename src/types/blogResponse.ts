

interface BlogResponse {
    data: Blog[] | null;
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        }
    } | null;
}



interface Blog {
    id: string;
    attributes: {
        title: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        summary: string;
        content: {
            type: string;
            children: {
                type: string;
                text: string;
                bold?: boolean;
            }[];
        }[];
        slug: string;
        ai: boolean;
    };
}