import type { ReactNode } from "react";

export interface ProgressBarProps {
    title: string,
    percentage: number
}

declare global {
    interface JQueryRipplesOptions {
        resolution?: number;
        dropRadius?: number;
        perturbance?: number;
    }

    interface JQuery {
        ripples(options?: JQueryRipplesOptions): JQuery;
        ripples(method: 'destroy'): JQuery;
    }
}

export type TabProps = {
    title: string;
    children: ReactNode;
};

export type TabsProps = {
    children: React.ReactElement<TabProps>[];
};

export interface CommentType {
    id: string;
    author?: string;
    email?: string;
    website?: string;
    comment?: string;
    createdAt?: any;
}

export interface ListTextPart {
    type: 'underline' | 'highlight' | 'link' | 'text' | 'extrabold';
    text: string;
    color?: string;
    href?: string;
}

export interface ListItem {
    bold: string;
    text: string | ListTextPart[];
}

export interface ContentBlock {
    type:
    | 'text'
    | 'title'
    | 'paragraph'
    | 'subtitle'
    | 'image'
    | 'video'
    | 'link'
    | 'br'
    | 'list'
    | 'slider'
    | 'group';
    text?: string;
    src?: string;
    alt?: string;
    href?: string;
    items?: ListItem[];
    images?: string[];
    className?: string;
    content?: ListTextPart[];
    color?: string;
    withBorder?: boolean;
    contentItems?: ContentBlock[];
}