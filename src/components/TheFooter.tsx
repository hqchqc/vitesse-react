import { useDark } from '~/hooks'

const TheFooter: React.FC = () => {
  const { isDark, toggleDark } = useDark()

  return (
    <nav className="text-xl mt-6 inline-flex gap-2">
      <button
        icon-btn
        onClick={() => toggleDark()}
      >
        {isDark ? <div i-carbon-moon /> : <div i-carbon-sun />}
      </button>

      <a
        className="icon-btn i-carbon-logo-github"
        rel="noreferrer"
        href="https://github.com/antfu/vitesse-lite"
        target="_blank"
        title="GitHub"
      />

    </nav>
  )
}

export default TheFooter
