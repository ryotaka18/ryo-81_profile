import { Link } from 'react-router-dom';
import { Home, BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <Home className="w-5 h-5" />
            <span className="font-semibold">ryo-81</span>
          </Link>
          <Link to="/blog" className="flex items-center space-x-2 text-gray-800 hover:text-gray-600">
            <BookOpen className="w-5 h-5" />
            <span>Blog</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}