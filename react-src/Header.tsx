
import React from 'react';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
);

interface HeaderProps {
    setSidebarOpen: (open: boolean) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSidebarOpen, searchTerm, setSearchTerm }) => {
    return (
        <header className="flex justify-between items-center h-20 px-6 bg-surface border-b border-border flex-shrink-0">
            <div className="flex items-center">
                <button onClick={() => setSidebarOpen(true)} className="text-text-secondary focus:outline-none lg:hidden mr-4">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                 <div className="hidden lg:block relative w-full max-w-xs xl:max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon className="h-5 w-5 text-text-secondary" />
                    </div>
                    <input
                        type="search"
                        name="search"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="block w-full bg-background border border-border rounded-md py-2 pl-10 pr-3 text-sm placeholder-text-secondary focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        placeholder="Search projects, tasks, alerts..."
                    />
                </div>
            </div>

            <div className="flex items-center space-x-5">
                <button className="text-text-secondary focus:outline-none relative">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                        <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-danger text-white text-xs flex items-center justify-center">3</span>
                </button>

                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <div className="relative flex items-center justify-center h-10 w-10 rounded-full bg-primary overflow-hidden border-2 border-border">
                            <span className="font-bold text-white text-sm">KB</span>
                        </div>
                    </div>
                     <span className="hidden sm:block text-sm font-medium text-text-primary">Kareem Bullard</span>
                </div>
            </div>
        </header>
    );
};

export default Header;