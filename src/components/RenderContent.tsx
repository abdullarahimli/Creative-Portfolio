import React from 'react';
import Slider from "react-slick";

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

export const RenderContent: React.FC<{ block: ContentBlock; index: number }> = ({ block, index }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        customPaging: () => (
            <div
                style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#000000',
                    cursor: 'pointer',
                    display: 'inline-block',
                }}
            />
        ),
    };

    switch (block.type) {

        case 'paragraph':
            {
                const borderStyle = block.withBorder
                    ? { borderLeft: '4px solid #424242', borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', paddingLeft: '10px' }
                    : {};

                if (Array.isArray(block.content)) {
                    return (
                        <p key={index} style={{ marginTop: 0, marginBottom: '1.5rem', ...borderStyle }}>
                            {block.content.map((part, i) => {
                                switch (part.type) {
                                    case 'text':
                                        return <span key={i}>{part.text}</span>;

                                    case 'link':
                                        return (
                                            <a
                                                key={i}
                                                href={part.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    color: part.color || block.color || '#fec544',
                                                    textDecoration: 'underline',
                                                }}
                                            >
                                                {part.text}
                                            </a>
                                        );

                                    case 'highlight':
                                        return (
                                            <span
                                                key={i}
                                                style={{
                                                    backgroundColor: part.color || '#ffff00',
                                                    padding: '0 4px',
                                                    borderRadius: '2px',
                                                }}
                                            >
                                                {part.text}
                                            </span>
                                        );

                                    case 'underline':
                                        return <u key={i}>{part.text}</u>;

                                    case 'extrabold':
                                        return (
                                            <span key={i} style={{ fontWeight: 800 }}>
                                                {part.text}
                                            </span>
                                        );

                                    default:
                                        return null;
                                }
                            })}
                        </p>
                    );
                } else if (block.text) {
                    return (
                        <p key={index} style={{ marginTop: 0, marginBottom: '1.5rem', ...borderStyle }}>
                            {block.text}
                        </p>
                    );
                }
                return null;
            }

        case 'group':
            return (
                <div key={index} style={{ marginBottom: '20px' }}>
                    {block.contentItems?.map((item, i) => (
                        <RenderContent key={i} block={item} index={i} />
                    ))}
                </div>
            );

        case 'title':
            return <h1 key={index} style={{ marginBottom: '2.5rem' }}>{block.text}</h1>

        case 'subtitle':
            return <h3 key={index}>{block.text}</h3>;

        case 'image':
            return (
                <img
                    key={index}
                    src={block.src}
                    alt={block.alt || ''}
                    style={{ maxWidth: '100%', margin: '1rem 0' }}
                />
            );

        case 'video':
            return (
                <iframe
                    key={index}
                    src={block.src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ width: '100%', height: '400px', margin: '1rem 0' }}
                />
            );

        case 'link':
            return (
                <a
                    key={index}
                    href={block.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: block.color || 'blue',
                        textDecoration: 'underline',
                    }}
                >
                    {block.text}
                </a>
            );

        case 'br':
            return <br key={index} />;

        case 'list':
            return (
                <ul key={index} style={{ paddingLeft: '40px', margin: '1rem 0', listStyle: "disc" }}>
                    {block.items?.map((item, i) => (
                        <li key={i}>
                            <strong style={{ fontWeight: 800, color: 'white' }}>{item.bold}</strong>{' '}
                            {Array.isArray(item.text)
                                ? item.text.map((part, j) => {
                                    switch (part.type) {
                                        case 'underline':
                                            return <u key={j}>{part.text}</u>;

                                        case 'highlight':
                                            return (
                                                <span
                                                    key={j}
                                                    style={{
                                                        backgroundColor: part.color,
                                                        padding: '0 4px',
                                                        borderRadius: '2px',
                                                    }}
                                                >
                                                    {part.text}
                                                </span>
                                            );

                                        case 'extrabold':
                                            return (
                                                <span key={j} style={{ fontWeight: 800 }}>
                                                    {part.text}
                                                </span>
                                            );

                                        case 'link':
                                            return (
                                                <a
                                                    key={j}
                                                    href={part.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        color: part.color || 'blue',
                                                        textDecoration: 'underline',
                                                    }}
                                                >
                                                    {part.text}
                                                </a>
                                            );

                                        default:
                                            return <span key={j}>{part.text}</span>;
                                    }
                                })
                                : item.text}
                        </li>
                    ))}
                </ul>
            );

        case 'slider':
            if (!block.images || !Array.isArray(block.images)) {
                console.warn("Slider content has no valid images:", block);
                return null;
            }

            return (
                <div key={index} className="st-slider st-style1 mb-5">
                    <Slider {...settings} className="slick-wrapper">
                        {block.images.map((img, idx) => (
                            <div key={idx} className="slick-slide-in">
                                <img className="st-zoom-in" src={img} alt={`slide-${idx}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
            );

        default:
            return null;
    }
};

export default RenderContent;
