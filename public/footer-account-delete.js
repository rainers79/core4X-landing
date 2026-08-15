(() => {
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

  const observer = new MutationObserver(() => {
    if (addAccountDeletionLink()) observer.disconnect()
  })

  observer.observe(document.documentElement, { childList: true, subtree: true })
  addAccountDeletionLink()
})()
