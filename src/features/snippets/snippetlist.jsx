import SnippetItem from './snippetitem'

const SnippetList = ({ snippets, setSnippets , deleteSnippet}) => {
  if (snippets.length === 0) {
    return <p className="text-zinc-500 dark:text-zinc-400">No snippets saved yet.</p>
  }

  return (
    <div className="space-y-4 sm:grid gap-4 sm:grid-cols-3 ">
      {snippets
        .slice()
        .reverse()
        .map(snippet => (
          <SnippetItem
            deleteSnippet={deleteSnippet}
            key={snippet.id}
            snippet={snippet}
            setSnippets={setSnippets}
          />
        ))}
    </div>
  )
}

export default SnippetList
