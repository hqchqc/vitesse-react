interface TheInputProps {
  placeholder: string
  setName: (name: string) => void
}

// Why not use React.FC ?
// https://github.com/jsx-eslint/eslint-plugin-react/issues/2353
const TheInput = (props: TheInputProps): JSX.Element => {
  const { placeholder, setName } = props

  return (
    <input id="input" type="text" placeholder={placeholder} onChange={e => setName(e.target.value)} autoComplete="off" p="x-4 y-2" w="250px" text="center" bg="transparent" border="~ rounded gray-200 dark:gray-700" outline="none active:none"/>
  )
}

export default TheInput
