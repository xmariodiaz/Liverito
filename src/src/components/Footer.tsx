import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800/80 backdrop-blur-sm bg-black-800 py-3 px-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <p className="text-sm hover:text-white text-gray-500">© {new Date().getFullYear()} xmariodiaz</p>
        
        <Link
          href="https://github.com/xmariodiaz/Liverito"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors"
        >
          <FiGithub className="text-lg" />
          GitHub
        </Link>
      </div>
    </footer>
  );
}