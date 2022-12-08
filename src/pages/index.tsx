import { useNavigate } from 'react-router-dom'
import TheInput from '~/components/TheInput'

const Index: React.FC = () => {
  const navigate = useNavigate()
  const [ name, setName ] = useState('')

  const go = () => {
    if (name)
      navigate(`/hi/${encodeURIComponent(name)}`)
  }

  return (
    <>
      <div
        i-carbon-campsite
        text-4xl
        inline-block
      />

      <p>
        <a
          rel="noreferrer"
          href="https://github.com/antfu/vitesse"
          target="_blank"
        > Vitesse
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
      />

      <div>
        <button
          className="m-3 text-sm btn"
          disabled={!name}
          onClick={go}
        >
          Go
        </button>
      </div>
    </>
  )
}

export default Index
