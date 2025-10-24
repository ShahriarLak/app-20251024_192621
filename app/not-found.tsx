import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-200 dark:text-gray-700">
          404
        </h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}