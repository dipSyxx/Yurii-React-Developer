'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Compass, FileText, FolderOpen, Workflow } from 'lucide-react'
import { profile } from '@/src/content/profile'

const files = [
  { id: 'profile', label: 'profile.md', icon: FileText },
  { id: 'approach', label: 'approach.md', icon: Workflow },
  { id: 'outside', label: 'outside.md', icon: Compass },
] as const

type FileId = (typeof files)[number]['id']

export function AboutWorkspace() {
  const [activeFile, setActiveFile] = useState<FileId>('profile')
  const reduceMotion = useReducedMotion()

  return (
    <div className="ref-workspace" data-reveal="viewport">
      <div className="ref-window-bar" aria-hidden="true">
        <span className="ref-window-dots"><i /><i /><i /></span>
        <span>ABOUT_ME/</span>
        <span>READ ONLY</span>
      </div>

      <div className="ref-workspace-body">
        <aside className="ref-file-tree">
          <p>DIRECTIONS</p>
          <span><FolderOpen size={14} aria-hidden="true" /> yurii/</span>
          <div role="group" aria-label="About files">
            {files.map((file, index) => {
              const Icon = file.icon
              return (
                <button
                  key={file.id}
                  type="button"
                  className={activeFile === file.id ? 'is-active' : undefined}
                  aria-pressed={activeFile === file.id}
                  onClick={() => setActiveFile(file.id)}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <Icon size={14} aria-hidden="true" />
                  <strong>{file.label}</strong>
                  <small>{activeFile === file.id ? 'OPEN' : 'VIEW'}</small>
                </button>
              )
            })}
          </div>
        </aside>

        <div className="ref-file-stage" aria-live="polite">
          <div className="ref-file-tab"><FileText size={13} aria-hidden="true" /> {files.find((file) => file.id === activeFile)?.label}</div>
          <span className="ref-file-frame" aria-hidden="true"><i /><i /><i /><i /></span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              className="ref-file-article"
              key={activeFile}
              initial={reduceMotion ? false : { opacity: 0, y: 12, clipPath: 'inset(0 0 18% 0)' }}
              animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeFile === 'profile' ? (
                <>
                  <p className="ref-file-path">{'// ABOUT / PROFILE'}</p>
                  <h3>Frontend first.<br />Product minded.</h3>
                  <p>{profile.about.intro}</p>
                  <p>{profile.about.description}</p>
                </>
              ) : null}

              {activeFile === 'approach' ? (
                <>
                  <p className="ref-file-path">{'// ABOUT / APPROACH'}</p>
                  <h3>Own the feature,<br />not only the screen.</h3>
                  <p>{profile.about.background}</p>
                  <dl className="ref-property-list">
                    <div><dt>01</dt><dd>Interface architecture</dd></div>
                    <div><dt>02</dt><dd>Product UX and system states</dd></div>
                    <div><dt>03</dt><dd>Reliable delivery and support</dd></div>
                  </dl>
                </>
              ) : null}

              {activeFile === 'outside' ? (
                <>
                  <p className="ref-file-path">{'// ABOUT / OUTSIDE'}</p>
                  <h3>A wider frame<br />than the IDE.</h3>
                  <ul className="ref-outside-grid">
                    {profile.outsideIde.map((item, index) => (
                      <li key={item}><span>{String(index + 1).padStart(2, '0')}</span>{item}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </motion.article>
          </AnimatePresence>
        </div>
      </div>

      <div className="ref-workspace-status" aria-hidden="true">
        <span>main*</span><span>03 FILES</span><span>UTF-8</span><span>MARKDOWN</span>
      </div>
    </div>
  )
}
