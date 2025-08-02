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