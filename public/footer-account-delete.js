(() => {
  const LOCAL_LOGO = '/core4x-icon-512.png?v=20260916-2'
  const REMOTE_LOGO = 'https://app.core4xapp.com/icon-512.png'

  const syncBrandLogo = () => {
    let changed = false
    document.querySelectorAll('img').forEach((img) => {
      if (img.src === REMOTE_LOGO || img.getAttribute('src') === REMOTE_LOGO) {
        img.src = LOCAL_LOGO
        changed = true
      }
    })
    return changed
  }

  const addAccountDeletionLink = () => {
    const footer = document.querySelector('footer')
    if (!footer || footer.querySelector('a[href="/account-deletion.html"]')) return false

    const impressum = Array.from(footer.querySelectorAll('button')).find(
      (el) => el.textContent?.trim() === 'Impressum'
    )

    if (!impressum || !impressum.parentElement) return false

    const link = document.createElement('a')
    link.href = '/account-deletion.html'
    link.textContent = 'Konto löschen'
    link.className = 'text-xs font-semibold text-black/40 hover:text-black'
    impressum.insertAdjacentElement('afterend', link)
    return true
  }

  const applyFixes = () => {
    syncBrandLogo()
    addAccountDeletionLink()
  }

  const observer = new MutationObserver(applyFixes)
  observer.observe(document.documentElement, { childList: true, subtree: true })
  applyFixes()
})()
