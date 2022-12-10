import { useNavigate } from 'react-router-dom'
import TheInput from '~/components/TheInput'
import { savedNameAtom } from '~/store/user'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const [ name, setName ] = useAtom(savedNameAtom)

  const go = () => {
    if (name)
      navigate(`/hi/${encodeURIComponent(name)}`)
  }

  return (
    <>
      <div className="text-4xl">
        <div className="i-carbon-campsite inline-block" />
      </div>

      <p>
        <a
          rel="noreferrer"
          href="https://github.com/antfu/vitesse"
          target="_blank"
        >
          Vitesse
        </a>
      </p>

      <p>
        <em
          text-sm
          opacity-75
        >
          Opinionated Vite Starter Template
        </em>
      </p>

      <div py-4 />

      <TheInput
        placeholder="What's your name?"
        setName={setName}
        name={name}
      />

      <div>
        <button
          className="m-3 text-sm btn"
          disabled={!name}
          onClick={go}
        >
          GO
        </button>
      </div>
    </>
  )
}

export default Index
