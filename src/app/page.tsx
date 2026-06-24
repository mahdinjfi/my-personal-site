export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-blue-500" style={{ fontFamily: 'var(--font-poppins)' }}>
        Project Initialized Successfully!
      </h1>
      <p className="mt-4 text-lg" style={{ color: 'var(--text-secondary)' }}>
        Ready to build the portfolio.
      </p>
    </main>
  );
}