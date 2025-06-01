import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logoLiverito.png" 
            alt="Liverito Logo" 
            width={40} 
            height={40} 
            className="mr-2"
          />
          <span className="text-xl font-bold">Liverito.Com</span>
        </Link>
        
        <div className="flex space-x-4">
          <Link 
            href="/robotsx" 
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded transition"
          >
            Robots
          </Link>
          <Link 
            href="/orders" 
            className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded transition"
          >
            Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}