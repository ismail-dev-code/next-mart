import DashboardOverview from '@/components/DashboardOverview';
import Sidebar from '@/components/Sidebar';

export default async function DashboardLayout({ children }) {
    return (
        <div className="min-h-screen bg-slate-900 dark:bg-gray-800 text-gray-900 dark:text-white">
            <DashboardOverview />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <Sidebar />
                    {/* Main Content */}
                    <div className="flex-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
