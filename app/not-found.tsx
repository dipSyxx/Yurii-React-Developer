import type { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'

export const metadata: Metadata = {
  title: 'Page not found | Yurii Linetskyi',
}

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="not-found-page">
        <div className="site-shell not-found-grid">
          <p className="mono-label">ERROR / 404</p>
          <div>
            <h1>This page is outside the build.</h1>
            <p>The address may have changed, or the page no longer exists.</p>
            <Link className="primary-action" href="/">
              Return to portfolio <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
