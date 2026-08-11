
import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface SmartAssistantButtonProps {
    onClick: () => void;
}

const SmartAssistantButton: React.FC<SmartAssistantButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="fixed bottom-8 right-8 bg-primary dark:bg-primary-dark text-white rounded-full p-4 shadow-lg hover:bg-blue-700 dark:hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-transform transform hover:scale-110 z-20"
            aria-label="Open Smart Assistant"
        >
            <SparklesIcon className="h-8 w-8" />
        </button>
    );
};

export default SmartAssistantButton;
