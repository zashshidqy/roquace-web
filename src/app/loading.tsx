export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-roquace-black">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="relative w-16 h-16">
          <svg
            className="loading-spinner w-full h-full text-roquace-accent-blue animate-spin"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="31.4 31.4"
              className="opacity-25"
            />
            <path
              d="M12 2a10 10 0 0 1 10 10"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="loading-spinner"
            />
          </svg>
        </div>

        <div className="flex items-center gap-2 text-roquace-soft-gray/70">
          <span className="text-body-base">Loading</span>
          <span className="loading-dots">
            <span className="animate-bounce" style={{ animationDelay: '0ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '150ms' }}>.</span>
            <span className="animate-bounce" style={{ animationDelay: '300ms' }}>.</span>
          </span>
        </div>
      </div>
    </div>
  );
}