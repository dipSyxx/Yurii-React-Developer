'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Download, Globe } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { coverLetter, type Language } from '@/src/content/cover-letter'
import { profile } from '@/src/content/profile'

export default function ApplicationPage() {
  const [language, setLanguage] = useState<Language>('en')
  const content = coverLetter[language]

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border no-print">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Button variant="ghost" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <div className="flex items-center bg-secondary rounded-full p-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  language === 'en'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('no')}
                className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  language === 'no'
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                NO
              </button>
            </div>

            <Button onClick={handlePrint}>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </header>

      {/* Cover Letter Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card border border-border rounded-2xl p-8 sm:p-12 shadow-lg"
          >
            {/* Letter Header */}
            <div className="mb-8 pb-8 border-b border-border">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h1 className="text-2xl font-bold gradient-text">{content.name}</h1>
                  <p className="text-muted-foreground">{profile.title}</p>
                </div>
                <div className="text-right text-sm text-muted-foreground space-y-1">
                  <p>{content.contactLine}</p>
                  <p>{profile.links.linkedin}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'nb-NO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            {/* Letter Body */}
            <div className="space-y-6">
              <p className="font-medium">{content.salutation}</p>
              
              {content.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-muted-foreground leading-relaxed text-pretty"
                >
                  {paragraph}
                </motion.p>
              ))}

              <div className="pt-6">
                <p className="font-medium">{content.closing}</p>
                <p className="mt-4 font-semibold gradient-text">{content.name}</p>
              </div>
            </div>

            {/* Letter Footer */}
            <div className="mt-12 pt-8 border-t border-border no-print">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" asChild>
                  <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={profile.links.cv} target="_blank" rel="noopener noreferrer">
                    View CV
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Language Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-center text-sm text-muted-foreground no-print"
        >
          <div className="flex items-center justify-center gap-2">
            <Globe className="h-4 w-4" />
            <span>
              {language === 'en' ? 'English version' : 'Norwegian version'} - Click the toggle above to switch
            </span>
          </div>
        </motion.div>
      </main>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
