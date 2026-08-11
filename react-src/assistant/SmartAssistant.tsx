
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/outline';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

interface SmartAssistantProps {
    isOpen: boolean;
    onClose: () => void;
    portfolioData: any;
}

const SmartAssistant: React.FC<SmartAssistantProps> = ({ isOpen, onClose, portfolioData }) => {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: "Hello! I'm your portfolio assistant. How can I help you analyze your data today?" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);
    
    if (!isOpen) return null;

    const handleSendMessage = async (prompt?: string) => {
        const currentInput = (prompt || inputValue).trim();
        if (!currentInput || isLoading) return;

        const userMessage: Message = { role: 'user', content: currentInput };
        setMessages(prev => [...prev, userMessage]);
        if (!prompt) {
           setInputValue('');
        }
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const dataContext = JSON.stringify(portfolioData);
            const systemInstruction = `You are an expert portfolio management assistant. Your task is to answer questions based on the provided JSON data about projects, financials, tasks, and alerts. Be concise, professional, and helpful in your responses. Format your answers clearly using markdown where appropriate (e.g., lists, bolding). Today's date is ${new Date().toISOString().split('T')[0]}. Here is the data: ${dataContext}`;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: userMessage.content,
                config: {
                    systemInstruction: systemInstruction,
                }
            });

            const assistantMessage: Message = { role: 'assistant', content: response.text };
            setMessages(prev => [...prev, assistantMessage]);

        } catch (err) {
            console.error("Gemini API error:", err);
            const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having trouble connecting to my brain right now. Please try again in a moment." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSendMessage();
    };
    
    const suggestedPrompts = [
        "Summarize the status of all active projects.",
        "Which projects are at risk or off track?",
        "What's the budget status for project AMLS-2025?",
        "List all high priority tasks."
    ];

    return (
        <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4 transition-opacity duration-300" onClick={onClose}>
            <div className="relative w-full max-w-2xl h-[80vh] max-h-[700px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-transform transform scale-95 duration-300 ease-in-out" 
                 style={{ transform: isOpen ? 'scale(1)' : 'scale(0.95)', opacity: isOpen ? 1 : 0 }}
                 onClick={e => e.stopPropagation()}>
                {/* Header */}
                <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
                    <div className="flex items-center space-x-2">
                        <SparklesIcon className="h-6 w-6 text-primary" />
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Smart Assistant</h2>
                    </div>
                    <button onClick={onClose} className="p-1 rounded-full text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-primary">
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </header>

                {/* Chat Area */}
                <main className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            {msg.role === 'assistant' && (
                                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                    <SparklesIcon className="h-5 w-5 text-primary" />
                                </div>
                            )}
                            <div className={`max-w-md md:max-w-lg px-4 py-3 rounded-2xl shadow-sm ${msg.role === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                                <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                         <div className="flex items-start gap-3 justify-start">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                                <SparklesIcon className="h-5 w-5 text-primary" />
                            </div>
                            <div className="max-w-md md:max-w-lg px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm">
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={chatEndRef} />
                </main>

                {/* Input Area */}
                <footer className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex-shrink-0">
                    {messages.length <= 1 && (
                        <div className="mb-3 grid grid-cols-1 md:grid-cols-2 gap-2">
                            {suggestedPrompts.map(prompt => (
                                <button key={prompt} onClick={() => handleSendMessage(prompt)} className="text-left text-sm p-2 rounded-lg bg-gray-50 hover:bg-gray-200 dark:bg-gray-700/50 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 truncate transition-colors">
                                    {prompt}
                                </button>
                            ))}
                        </div>
                    )}
                    <form onSubmit={handleFormSubmit} className="flex items-center space-x-3">
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask about your portfolio..."
                            className="w-full form-input bg-gray-100 dark:bg-gray-900/50 border-gray-200 dark:border-gray-600 rounded-full px-4 py-2 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                            disabled={isLoading}
                        />
                        <button type="submit" className="bg-primary rounded-full p-2.5 text-white disabled:bg-gray-400 dark:disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-blue-700 transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" disabled={isLoading || !inputValue.trim()}>
                            <PaperAirplaneIcon className="h-5 w-5" />
                        </button>
                    </form>
                </footer>
            </div>
        </div>
    );
};

export default SmartAssistant;
