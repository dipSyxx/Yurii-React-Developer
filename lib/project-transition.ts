const frameName = 'project-preview'
const routeWaitMs = 300

function waitForCaseFrame(projectId: string) {
  const selector = `[data-case-frame="${CSS.escape(projectId)}"]`

  return new Promise<HTMLElement | null>((resolve) => {
    const finish = (frame: HTMLElement | null) => {
      observer.disconnect()
      window.clearTimeout(timer)
      resolve(frame)
    }

    const observer = new MutationObserver(check)
    const timer = window.setTimeout(() => finish(null), routeWaitMs)

    function check() {
      const frame = document.querySelector<HTMLElement>(selector)
      if (frame) finish(frame)
    }

    observer.observe(document.body, { childList: true, subtree: true })
    check()
  })
}

export function isProjectFrameVisible(frame: HTMLElement) {
  const { top, bottom, left, right } = frame.getBoundingClientRect()
  return top < window.innerHeight && bottom > 0 && left < window.innerWidth && right > 0
}

export function transitionToProject(frame: HTMLElement, projectId: string, navigate: () => void) {
  const root = document.documentElement
  let destination: HTMLElement | null = null

  root.dataset.projectTransition = ''
  frame.style.viewTransitionName = frameName

  const transition = document.startViewTransition(async () => {
    navigate()
    destination = await waitForCaseFrame(projectId)

    if (!destination) {
      transition.skipTransition()
      return
    }

    // Capture the case at its entry position, before the router's scroll effect runs.
    window.scrollTo({ top: 0, behavior: 'instant' })
    if (!isProjectFrameVisible(destination)) {
      transition.skipTransition()
      return
    }

    frame.style.removeProperty('view-transition-name')
    destination.style.viewTransitionName = frameName
  })

  const clear = () => {
    frame.style.removeProperty('view-transition-name')
    destination?.style.removeProperty('view-transition-name')
    delete root.dataset.projectTransition
  }

  // The browser can skip snapshots while still committing the navigation.
  void transition.ready.catch(() => undefined)
  void transition.finished.then(clear, clear)
}
