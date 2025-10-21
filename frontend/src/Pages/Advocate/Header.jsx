import { Bell, User } from 'lucide-react';

export default function Header({ activeView, navigationItems }) {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-black">
            {navigationItems.find(item => item.id === activeView)?.label || 'Dashboard'}
          </h1>
          <p className="text-sm text-gray-600">Welcome back, Advocate</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    </header>
  );
}
