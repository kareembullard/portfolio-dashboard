
import React, { useState, Fragment } from 'react';

// --- HELPER COMPONENTS (Now local to WikiPage) ---

const WikiSection: React.FC<{ title: string; level: 2 | 3; children: React.ReactNode }> = ({ title, level, children }) => {
    const Heading = `h${level}` as keyof JSX.IntrinsicElements;
    const headingClass = level === 2 ? "text-2xl font-bold text-text-primary mt-8 mb-4 pb-2 border-b border-border" : "text-xl font-semibold text-text-primary mt-6 mb-3";
    return (
        <section>
            <Heading className={headingClass}>{title}</Heading>
            <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed space-y-4">
                {children}
            </div>
        </section>
    );
};

const WikiTable: React.FC<{ headers: string[]; data: (string | JSX.Element)[][] }> = ({ headers, data }) => (
    <div className="overflow-x-auto my-4">
        <table className="min-w-full text-sm text-left bg-background rounded-lg">
            <thead className="bg-border/20">
                <tr>
                    {headers.map((header, i) => (
                        <th key={i} scope="col" className="px-4 py-3 font-semibold text-text-primary whitespace-nowrap">{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-b-0 hover:bg-border/10">
                        {row.map((cell, j) => (
                            <td key={j} className="px-4 py-3 align-top">{cell}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const CodeBlock: React.FC<{ children: string, lang?: string }> = ({ children, lang }) => (
    <div className="my-4">
        {lang && <span className="block text-xs text-text-secondary uppercase font-semibold -mb-2 ml-4">{lang}</span>}
        <pre className="bg-gray-900 p-4 rounded-md overflow-x-auto text-sm font-mono text-gray-300">
            <code>{children}</code>
        </pre>
    </div>
);

// --- CONTENT COMPONENTS ---

const contentData = {
    'master-blueprint': {
        title: 'Mastering Your Workflow: A Comprehensive Blueprint',
        subtitle: 'A guide for unrivaled productivity and well-being.',
        content: (
            <>
                <WikiSection title="Introduction: From Tangle to Triumph" level={2}>
                    <p>Have you ever stared at your to-do list, coffee in hand, and felt completely lost, despite meticulously tracking every task? The dream of a beautifully automated dashboard, connecting your daily efforts to your grandest ambitions, often feels just out of reach. If that story sounds familiar, you're in the right place. Our journey together will bridge that gap, transforming your workflow from a mere list into a dynamic, multi-layered productivity engine.</p>
                </WikiSection>
                <WikiSection title="Objectives for Your Workflow Mastery" level={2}>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Transform your existing Airtable base, or similar system, from a flat list of to-dos into a <strong>dynamic, multi-layered productivity engine</strong>.</li>
                        <li>Track your daily actions and automatically <strong>aggregate them into insightful weekly, monthly, and even yearly reviews</strong>.</li>
                        <li>Build a sophisticated, automated system that provides a <strong>clear, hierarchical view of your productivity</strong>.</li>
                        <li>Enhance your overall schedule by leveraging <strong>recurring tasks for consistency</strong>, prioritizing around <strong>critical deadlines</strong>, integrating <strong>personal well-being</strong>, and harnessing the power of <strong>automation and bots</strong>.</li>
                    </ul>
                </WikiSection>
                <WikiSection title="Key Takeaways for Your Productive Journey" level={2}>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Structured Productivity:</strong> Your system utilizes a clear, multi-phase operational framework that guides all activities from ideation to completion and beyond.</li>
                        <li><strong>Project-Driven Approach:</strong> Every significant endeavor is treated as a defined project with specific goals, often broken down into detailed sub-tasks and timelines.</li>
                        <li><strong>Automation and Technological Leverage:</strong> There's an extensive reliance on and ambition for AI, bots, and integrated software systems (like Airtable, Notion, TickTick, Obsidian) to enhance efficiency and streamline processes.</li>
                        <li><strong>Continuous Improvement:</strong> The workflow emphasizes reviewing, optimizing, and documenting processes to ensure constant refinement and growth.</li>
                        <li><strong>Holistic Development:</strong> Your system masterfully integrates business, career, personal health, education, and leisure pursuits into a unified, sustainable system.</li>
                    </ul>
                </WikiSection>
            </>
        )
    },
    'project-charter': {
        title: 'Project Charter: Unified Workflow and Strategic Initiatives',
        subtitle: 'The master blueprint for managing diverse personal and professional pursuits.',
        content: (
            <>
                <WikiSection title="Project Purpose" level={2}>
                    <p>The overarching purpose of this workflow is to systematically manage a diverse array of personal development, business, career, health, and creative pursuits by leveraging a structured, phase-based approach and advanced technological integrations. It aims to transform daily efforts into measurable progress towards grand ambitions, ensuring consistency, efficiency, and holistic well-being.</p>
                </WikiSection>
                <WikiSection title="High-Level Project Objectives" level={2}>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Structured Productivity:</strong> Implement a clear, multi-phase operational framework (Ideate, Scope, Research, Setup, Develop, Conduct, Review, Optimize, Control, Document, Educate, Resource, Network, Market, Finance, Leisure/Entertainment) to guide all activities.</li>
                        <li><strong>Project-Driven Approach:</strong> Manage defined projects with specific goals, detailed sub-tasks, and clear timelines.</li>
                        <li><strong>Automation and Technological Leverage:</strong> Extensively use and develop AI, bots, and integrated software systems (e.g., Airtable, Notion, TickTick, Obsidian) to enhance efficiency, reduce manual effort, and ensure data consistency.</li>
                        <li><strong>Continuous Improvement:</strong> Emphasize regular reviewing, optimizing, and documenting of processes for enhanced performance and quality.</li>
                        <li><strong>Holistic Development:</strong> Integrate and manage personal health, education, and leisure pursuits as integral parts of the overall system.</li>
                    </ul>
                </WikiSection>
                 <WikiSection title="Key Projects and Initiatives" level={2}>
                     <p>The workflow orchestrates numerous strategic initiatives, including:</p>
                     <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>Creative Resurgence Epic (RAPP-001):</strong> Ongoing weekly creative output.</li>
                        <li><strong>Gem Dropper's Content Creation and Sharing Initiative (GDCCSI) Project:</strong> Includes developing the first ebook, creating holiday posts, and launching a website/webstore.</li>
                        <li><strong>Sales - $5,000 worth of digital products by July 1, 2025:</strong> A direct sales objective.</li>
                        <li><strong>Setup Airtable for a Multi-Layered Productivity System:</strong> A major project to transform Airtable into a dynamic, automated productivity engine.</li>
                        <li><strong>Suno Export and Music Management (Suno-EXP-2025) Project:</strong> Focusing on organizing, processing, producing, editing, and sharing Suno-generated music.</li>
                        <li><strong>Professional Certifications:</strong> Proactive renewal of CompTIA A+ ce and Security+ ce certifications.</li>
                     </ul>
                 </WikiSection>
            </>
        )
    },
    'scope-statement': {
        title: 'Scope Statement: Unified Workflow and Strategic Initiatives',
        subtitle: 'Defining the boundaries and deliverables of the project.',
        content: (
             <>
                <WikiSection title="Project Purpose" level={2}>
                    <p>The overarching purpose of this workflow is to systematically manage a diverse array of personal development, business, career, health, and creative pursuits by leveraging a structured, phase-based approach and advanced technological integrations. It aims to transform daily efforts into measurable progress towards grand ambitions, ensuring consistency, efficiency, and holistic well-being.</p>
                </WikiSection>
                <WikiSection title="Project Deliverables" level={2}>
                    <p>The workflow is designed to produce a wide range of tangible and intangible outputs across its various initiatives:</p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                        <li><strong>New Applications and Customizations:</strong> Including a customized Routinery App and other self-built applications.</li>
                        <li><strong>Content and Publications:</strong> Such as the first Ebook and its associated content/task lists, memoir content, and a memoir app for voice input.</li>
                        <li><strong>Music Productions:</strong> Organized, edited, and shared Suno music creations, and a Suno data scraping tool.</li>
                        <li><strong>Automated Productivity Systems:</strong> A functional, automated Airtable multi-layered productivity system.</li>
                        <li><strong>Bots and Automations:</strong> Various bots including a Task Merging Bot, Batch Researching Bot, and Hashtag Bot for bulk task additions.</li>
                        <li><strong>Professional Credentials:</strong> Completed professional certifications, specifically the CompTIA A+ ce and Security+ ce renewals.</li>
                    </ul>
                </WikiSection>
                <WikiSection title="High-Level Constraints" level={2}>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Fixed Deadlines:</strong> Specific external deadlines, particularly for certifications and sales targets.</li>
                        <li><strong>Time Allocation:</strong> Estimated durations for tasks imply time-based constraints on available capacity.</li>
                        <li><strong>Resource Availability:</strong> Financial and other resources, such as AI credits, are finite.</li>
                    </ul>
                </WikiSection>
            </>
        )
    },
    'wbs': {
        title: 'Work Breakdown Structure (WBS)',
        subtitle: 'A hierarchical decomposition of the total scope of work.',
        content: (
            <>
                <WikiSection title="WBS Overview" level={2}>
                    <p>A Work Breakdown Structure (WBS) is a hierarchical decomposition of the total scope of work to be carried out by the project team to accomplish project objectives and create the required deliverables. It breaks down the work into smaller, more manageable components.</p>
                    <CodeBlock>
{`1.0 Unified Workflow and Strategic Initiatives
  1.1 Business Initiatives
    1.1.1 Gem Dropper's Content Creation (GDCCSI)
    1.1.2 Sales - $5,000 Digital Products
    1.1.3 Get in the Cannon Project
    1.1.4 Networking & Client Acquisition
    1.1.5 Freelance Prospecting
  1.2 Personal Development & Well-being
    1.2.1 Memoir Writing
    1.2.2 Creative Resurgence Epic
    1.2.3 Professional Certifications Renewal
    1.2.4 Health & Diet Management
  1.3 System Development & Maintenance
    1.3.1 Airtable Productivity System Setup
    1.3.2 Custom Productivity Apps Development
    1.3.3 Suno Export & Music Management
    1.3.4 Automation & Bot Development
  1.4 Financial Management
    1.4.1 Bankruptcy Process (CH7-BK-2025)
    1.4.2 Budget & Financial Control`}
                    </CodeBlock>
                </WikiSection>
                <WikiSection title="WBS Dictionary Example" level={2}>
                    <h3 className="text-lg font-semibold text-text-primary mt-4 mb-2">1.1.1 Gem Dropper's Content Creation and Sharing Initiative (GDCCSI)</h3>
                     <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Description:</strong> An ongoing high-value project focused on content creation and sharing. It involves developing and finalizing an ebook, considering holiday posts, and exploring Substack as an outlet for articles.</li>
                        <li><strong>Deliverables:</strong> First Ebook (CFE-2025) Project, finalized ebook task lists, potential holiday posts, and a launched website & webstore.</li>
                        <li><strong>Phase(s):</strong> Network, Conduct.</li>
                        <li><strong>Timeline/Frequency:</strong> Sub-tasks include finalizing ebook task lists by June 31, 2025.</li>
                     </ul>
                </WikiSection>
            </>
        )
    },
    'operational-phases': {
        title: 'Operational Phases Blueprint',
        subtitle: 'A comprehensive workflow from ideation to completion.',
        content: (
            <>
                 <WikiSection title="The 16 Phases" level={2}>
                    <p>The workflow blueprint categorizes tasks and projects into 16 distinct operational phases, guiding them from initial conception to ongoing maintenance and improvement.</p>
                    <WikiTable 
                        headers={["Phase", "Description"]}
                        data={[
                            ["Ideate", "Brainstorming, concept generation, and considering new ideas."],
                            ["Scope", "Defining the boundaries, goals, and initial plans for ideas."],
                            ["Research", "Gathering necessary information, exploring tools, and investigating topics."],
                            ["Setup", "Preparing the necessary infrastructure, tools, or initial configurations."],
                            ["Develop", "The creation and building phase for applications, content, or processes."],
                            ["Conduct", "The active execution phase where operations and projects are carried out."],
                            ["Review", "Evaluating existing items, processes, or performance."],
                            ["Optimize", "Improving the efficiency, performance, or quality of existing systems."],
                            ["Control", "Managing, monitoring, and ensuring adherence to plans."],
                            ["Document", "Creating and updating records, guides, and written materials."],
                            ["Educate", "Dedicated to learning, skill development, and knowledge acquisition."],
                            ["Resource", "Acquiring necessary items or resources."],
                            ["Network", "Building and maintaining connections, both professional and social."],
                            ["Market", "Concerned with promotion, sales, and outreach."],
                            ["Finance", "Managing financial aspects and budgeting."],
                            ["Leisure", "Covering personal activities, recreation, and entertainment."],
                        ]}
                    />
                </WikiSection>
            </>
        )
    },
    'project-timelines': {
        title: 'Project Timelines and Phase Overview',
        subtitle: 'A roadmap for each initiative with key dates and phases.',
        content: (
            <>
                <WikiSection title="Key Timelines and Frequencies" level={2}>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><strong>Conduct - Creative Resurgence Epic:</strong> Weekly on Saturdays and Sundays, 8 hours per instance, started July 24, 2025.</li>
                        <li><strong>Conduct - Get in the Cannon Project:</strong> Daily, every two days, skipping weekends, 8 hours, started July 24, 2025.</li>
                        <li><strong>Conduct - Networking & Client Acquisition:</strong> Daily, every two days, 8 hours, started July 24, 2025.</li>
                        <li><strong>Conduct - Sales - $5,000 by July 1, 2025:</strong> Goal was by July 1, 2025, with an entry date of July 24, 2025, suggesting ongoing review.</li>
                        <li><strong>CompTIA Certifications (A+ and Security+):</strong> Both have a renewal due date of February 1, 2026, indicating a long-term educational commitment.</li>
                        <li><strong>Write - Memoir:</strong> Daily, every three days, 8 hours, started July 24, 2025.</li>
                    </ul>
                </WikiSection>
            </>
        )
    },
};

const wikiTree = [
    { id: 'master-blueprint', title: 'Mastering Your Workflow', icon: '🚀', children: [] },
    { id: 'project-charter', title: 'Project Charter', icon: '📜', children: [] },
    { id: 'scope-statement', title: 'Scope Statement', icon: '🎯', children: [] },
    { id: 'wbs', title: 'Work Breakdown Structure', icon: '🏗️', children: [] },
    { id: 'operational-phases', title: 'Operational Phases', icon: '🌊', children: [] },
    { id: 'project-timelines', title: 'Project Timelines', icon: '🗓️', children: [] },
];

const FullContent: React.FC<{data: {title: string, subtitle: string, content: React.ReactNode}}> = ({data}) => (
    <>
        <h1 className="text-3xl font-extrabold text-text-primary mb-2">{data.title}</h1>
        <p className="text-lg text-text-secondary mb-6">{data.subtitle}</p>
        {data.content}
    </>
)

const contentMap: Record<string, React.ReactNode> = Object.entries(contentData).reduce((acc, [key, value]) => {
    acc[key] = <FullContent data={value} />;
    return acc;
}, {} as Record<string, React.ReactNode>);


// --- WIKI NAVIGATION COMPONENTS ---

const NavItem: React.FC<{
    item: any;
    activeTopic: string;
    onSelectTopic: (id: string) => void;
    level?: number;
}> = ({ item, activeTopic, onSelectTopic, level = 0 }) => {
    const isActive = activeTopic === item.id;

    return (
        <li>
            <a
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    onSelectTopic(item.id);
                }}
                className={`flex items-center p-2 rounded-md text-sm transition-colors ${
                    isActive ? 'bg-primary/20 text-primary font-semibold' : 'text-text-secondary hover:bg-border/20 hover:text-text-primary'
                }`}
                style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
            >
                <span className="mr-2">{item.icon}</span>
                <span>{item.title}</span>
            </a>
        </li>
    );
};

const WikiSidebar: React.FC<{
    activeTopic: string;
    onSelectTopic: (id: string) => void;
}> = ({ activeTopic, onSelectTopic }) => {
    return (
        <aside className="w-full md:w-72 flex-shrink-0 bg-surface md:bg-transparent p-4 md:p-0 rounded-lg md:rounded-none">
            <h2 className="text-lg font-bold text-text-primary mb-4 hidden md:block">Knowledge Base</h2>
            <nav>
                <ul className="space-y-1">
                    {wikiTree.map(item => (
                        <NavItem
                            key={item.id}
                            item={item}
                            activeTopic={activeTopic}
                            onSelectTopic={onSelectTopic}
                        />
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

// --- MAIN WIKI PAGE COMPONENT ---

const WikiPage: React.FC = () => {
    const [activeTopic, setActiveTopic] = useState('master-blueprint');

    const ActiveContent = contentMap[activeTopic] || <div>Not Found</div>;

    return (
        <div className="flex flex-col md:flex-row gap-8">
            <WikiSidebar
                activeTopic={activeTopic}
                onSelectTopic={setActiveTopic}
            />
            <main className="flex-1 bg-surface p-6 sm:p-8 rounded-lg min-w-0">
                {ActiveContent}
            </main>
        </div>
    );
};

export default WikiPage;
