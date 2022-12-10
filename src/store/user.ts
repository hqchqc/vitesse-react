const savedNameAtom = atom('')
const previousNamesAtom = atom(new Set<string>())

const otherNamesAtom = atom((get) => {
  const usedNames = Array.from(get(previousNamesAtom))
  const savedName = get(savedNameAtom)

  return usedNames.filter(name => name !== savedName)
})

export {
  previousNamesAtom,
  otherNamesAtom,
  savedNameAtom,
}
