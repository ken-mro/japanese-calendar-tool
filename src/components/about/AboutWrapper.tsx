"use client";

import { useI18n } from "@/lib/i18n/config";
import Link from "next/link";
import { ReactNode } from "react";
import Icon from "../icons/Icon";

import { LanguageSwitcher } from "../LanguageSwitcher";

interface AboutWrapperProps {
    title: string;
    icon?: ReactNode;
    children: ReactNode;
}

export function AboutWrapper({ title, icon, children }: AboutWrapperProps) {
    const { t } = useI18n();

    return (
        <div className="app-container">
            <header className="header">
                <div className="header-content">
                    <Link href="/" className="back-link">
                        ← {t("common.backToHome")}
                    </Link>
                    <div>
                        <LanguageSwitcher />
                    </div>
                </div>
            </header>

            <main className="main-content" style={{ marginTop: '2rem' }}>
                <div className="description-container" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                    <div className="description-header" style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '2rem',
                        borderBottom: '1px solid var(--card-border)',
                        paddingBottom: '1rem'
                    }}>
                        {icon && <div className="about-icon" style={{ width: '40px', height: '40px' }}>{icon}</div>}
                        <h1 style={{ fontSize: '1.8rem', margin: 0 }}>{title}</h1>
                    </div>

                    <div className="description-content">
                        {children}
                    </div>
                </div>
            </main>

            <footer className="footer">
                <p className="footer-copyright">
                    © {new Date().getFullYear()} Japanese Calendar Tool
                </p>
            </footer>
        </div>
    );
}
