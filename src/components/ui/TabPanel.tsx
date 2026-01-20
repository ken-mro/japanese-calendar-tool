"use client";

import { useState, ReactNode } from "react";

interface Tab {
    label: string;
    content: ReactNode;
}

interface TabPanelProps {
    tabs: Tab[];
    defaultActiveIndex?: number;
    contentClassName?: string;
}

export function TabPanel({
    tabs,
    defaultActiveIndex = 0,
    contentClassName,
}: TabPanelProps) {
    const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

    return (
        <div className="tab-panel" style={{ width: "100%" }}>
            <div className="tab-list" role="tablist">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={activeIndex === index}
                        aria-controls={`tabpanel-${index}`}
                        className={`tab-button ${activeIndex === index ? "active" : ""}`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                id={`tabpanel-${activeIndex}`}
                role="tabpanel"
                className={contentClassName}
                style={{ marginTop: "1rem" }}
            >
                {tabs[activeIndex].content}
            </div>
        </div>
    );
}
