import React, { useState } from "react";
import type { TabProps, TabsProps } from "../types/Types";

export const Tab: React.FC<TabProps> = ({ children }) => {
    return <div className="mt-4">{children}</div>;
};

export const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="w-full">
            <div className="flex border-b border-gray-700">
                {children.map((tab, index) => (
                    <div
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`cursor-pointer px-4 py-2 text-sm font-medium text-center transition-colors duration-200
              ${activeTab === index
                                ? "text-[#FEC544] border-b-2 border-[#FEC544]"
                                : "text-gray-400 border-b-2 border-transparent hover:text-white"
                            }
                            flex-1 basis-0
            `}
                    >
                        {tab.props.title}
                    </div>
                ))}
            </div>

            <div className="text-white">{children[activeTab]}</div>
        </div>
    );
};
