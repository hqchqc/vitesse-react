import { Link } from 'react-router-dom'
import { otherNamesAtom, previousNamesAtom, savedNameAtom } from '~/store/user'

const Name: React.FC = () => {
  const navigate = useNavigate()
  const params = useParams<{ name: string }>()

  const [ savedName, setSavedName ] = useAtom(savedNameAtom)
  const otherNames = useAtomValue(otherNamesAtom)
  const setPreviousNames = useSetAtom(previousNamesAtom)

  useEffect(() => {
    if (savedName)
      setPreviousNames(previousNames => previousNames.add(savedName))

    setSavedName(params?.name || '')
  })

  return (
    <div>
      <div text-4xl>
        <div className="i-carbon-pedestrian inline-block" />
      </div>

      <p>
        Hi, {params.name}!
      </p>

      <p
        text-sm
        opacity-75
      >
        <em>Demo of dynamic route</em>
      </p>

      <div className={`${otherNames.length ? '' : 'hidden'}`}>
        <div className="text-sm mt-4">
          <span opacity-75>Also known as:</span>
          <ul>
            {
              otherNames.map(otherName => (
                <li key={otherName}>
                  <Link
                    to={`/hi/${otherName}`}
                    replace
                  >
                    {otherName}
                  </Link>
                </li>

              ))
            }
          </ul>
        </div>
      </div>

      <div>
        <button
          className="btn m-3 text-sm mt-8"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default Name
