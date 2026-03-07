import { Link } from "wouter";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background text-primary grid place-items-center p-6">
      <section className="text-center">
        <h1 className="font-heading text-4xl font-semibold mb-4">404</h1>
        <p className="mb-6">Page not found.</p>
        <Link href="/" className="text-accent underline underline-offset-4">
          Return home
        </Link>
      </section>
    </main>
  );
}
