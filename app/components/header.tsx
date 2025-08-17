
// app/components/header.tsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-8 fixed w-full z-10">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/#home" className="text-2xl font-bold">
          My Page
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/#about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="hover:text-gray-400">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
