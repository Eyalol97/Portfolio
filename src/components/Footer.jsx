export default function Footer() {
  return (
    <footer className="border-t border-paper-300 py-10">
      <div className="container-page flex items-center justify-center text-sm text-ink-500">
        <p>© {new Date().getFullYear()} Eyal Nahum.</p>
      </div>
    </footer>
  )
}
