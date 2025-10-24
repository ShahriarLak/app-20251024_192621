export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="text-center">
        <div className="mb-4">
          <div className="h-12 w-12 mx-auto animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Loading...
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Please wait while we load the content
        </p>
      </div>
    </div>
  )
}