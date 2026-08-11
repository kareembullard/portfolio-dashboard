
import React, { Fragment } from 'react';

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>;
const FolderIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>;
const ChartPieIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>;
const DocumentCheckIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 00-3.15 0v1.5m3.15 0l.075 5.925m3.075.75V4.575a1.575 1.575 0 00-3.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 005.25-5.25v-2.909m-16.5.75h13.5" /></svg>;
const Cog6ToothIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-1.226.55-.22 1.156-.22 1.706 0 .55.22 1.02.684 1.11 1.226l.08.481c.41.247.807.533 1.17.868l.43-.252c.51-.3.974-.383 1.416-.296.44.086.81.334 1.08.668l.25.33c.27.35.35.79.24-1.205l-.18.695c.23.41.42.846.57 1.298l.68.18c.42.11.79.34.98.72l.23.49c.19.4.15.85-.1 1.21l-.25.33c-.27.334-.64.582-1.08.668-.44.086-.906.004-1.416-.296l-.43-.252c-.36-.212-.75-.45-1.17-.868l-.08.482c-.09.542-.56 1.007-1.11 1.226-.55.22-1.156-.22-1.706 0-.55-.22-1.02-.684-1.11-1.226l-.08-.481a11.05 11.05 0 01-1.17-.868l-.43.252c-.51.3-.974.383-1.416.296-.44-.086-.81-.334-1.08-.668l-.25-.33a.96.96 0 01-.24-1.205l.18-.695a11.05 11.05 0 01-.57-1.298l-.68-.18a.96.96 0 01-.98-.72l-.23-.49a.96.96 0 01.1-1.21l.25-.33c.27-.334.64-.582 1.08-.668.44-.086.906-.004 1.416.296l.43.252c.36.212.75.45 1.17.868l.08-.482zM12 15a3 3 0 100-6 3 3 0 000 6z" /></svg>;
const BookOpenIcon = (props: React.SVGProps<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
    activePage: string;
    setActivePage: (page: string) => void;
}

const NavLink: React.FC<{
    icon: React.ElementType;
    label: string;
    isActive: boolean;
    onClick: () => void;
}> = ({ icon: Icon, label, isActive, onClick }) => (
    <a
        href="#"
        onClick={(e) => { e.preventDefault(); onClick(); }}
        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
            isActive
                ? 'bg-primary text-white'
                : 'text-text-secondary hover:bg-surface hover:text-text-primary'
        }`}
    >
        <Icon className="h-6 w-6 mr-3" />
        {label}
    </a>
);


const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen, activePage, setActivePage }) => {

    const navItems = [
        { name: 'Dashboard', icon: HomeIcon },
        { name: 'Projects', icon: FolderIcon },
        { name: 'Financials', icon: ChartPieIcon },
        { name: 'Analytics', icon: DocumentCheckIcon },
        { name: 'Wiki', icon: BookOpenIcon },
        { name: 'Settings', icon: Cog6ToothIcon },
    ];
    
    const handleNavClick = (page: string) => {
        setActivePage(page);
        if (window.innerWidth < 1024) {
            setSidebarOpen(false);
        }
    };

    return (
        <>
            {/* Overlay for mobile */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden ${sidebarOpen ? 'block' : 'hidden'}`}
                onClick={() => setSidebarOpen(false)}
            ></div>

            <div
                className={`fixed top-0 left-0 h-full w-64 bg-surface border-r border-border p-4 z-30 transform transition-transform duration-300 ease-in-out ${
                    sidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 lg:static lg:h-auto`}
            >
                <div className="flex items-center justify-center h-16 mb-4">
                    <img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" alt="Logo" className="h-8 w-auto" />
                </div>
                <nav className="space-y-2">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            icon={item.icon}
                            label={item.name}
                            isActive={activePage === item.name}
                            onClick={() => handleNavClick(item.name)}
                        />
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
