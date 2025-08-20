export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-10 text-center">
      <p>&copy; {new Date().getFullYear()} NextMart. All rights reserved.</p>
      <p className="mt-2 text-sm text-gray-400">
        Built with ❤️ using Next.js 15 & NextAuth.js
      </p>
    </footer>
  );
}
