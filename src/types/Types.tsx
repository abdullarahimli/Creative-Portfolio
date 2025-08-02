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


// export interface Blog {
//     id: number;
//     mainImage: string;
//     shortTitle: string;
//     mainTitle: string;
//     author: string;
//     date: string;
//     imageTitle: string;
//     p1: string;
//     p2: string;
//     p3: string;
//     p4: string;
//     p5: string;
//     p6: string;
//     p7: string;
//     p8: string;
//     p8Continue: string;
//     p9: string;
//     img1: string;
//     img2: string;
//     img3: string;
//     img4: string;
//     img5: string;
//     title1: string;
//     title2: string;
//     title3: string;
//     title4: string;
//     title5: string;
//     title6: string;
//     strong1: string;
//     strong2: string;
//     strong3: string;
//     strong4: string;
//     strongHighlight1: string;
//     strong_p1: string;
//     strong_p2: string;
//     strong_p3: string;
//     strong_p4: string;
//     content: string;
//     tags: string[];
//     category: string;
// }
