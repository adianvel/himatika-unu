export interface Post {
    id: string;
    slug?: string;
    title: string;
    content: string;
    excerpt?: string;
    thumbnail_url?: string;
    published_at: string;
    is_featured?: boolean;
    author?: string;
    category?: string;
}
