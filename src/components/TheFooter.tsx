import { useDark } from '~/composables'

const TheFooter: React.FC = () => {
  const { isDark, toggleDark } = useDark()

  return (
    <>
      <nav text-xl mt-6 inline-flex gap-2>
        <button icon-btn onClick={() => toggleDark()}>
          {isDark ? <div i-carbon-sun /> : <div i-carbon-moon />}
        </button>

        <a
          icon-btn i-carbon-logo-github
          rel="noreferrer"
          href="https://github.com/antfu/vitesse-lite"
          target="_blank"
          title="GitHub"
        />

      </nav>
    </>
  )
}

export default TheFooter
