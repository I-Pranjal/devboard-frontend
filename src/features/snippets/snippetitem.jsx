import { useState } from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react"

const SnippetItem = ({ snippet, deleteSnippet }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(snippet.snippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="w-full bg-zinc-300 dark:bg-zinc-800 text-zinc-800 dark:text-white shadow-md">
      <CardBody className="space-y-3">
        <div className="flex justify-between items-start">
          <Typography variant="h5" color="blue-gray">
            {snippet.title}
          </Typography>

          <Chip
            value={snippet.language}
            color="blue"
            variant="filled"
            className="text-xs py-2"
          />
        </div>

        {snippet.description && (
          <Typography className="text-sm text-zinc-600 dark:text-zinc-300">
            {snippet.description}
          </Typography>
        )}

        <pre className="bg-zinc-200 dark:bg-zinc-900 p-3 rounded text-sm  font-mono h-64 truncate">
          <code className="whitespace-pre-wrap">{snippet.snippet}</code>
        </pre>

        <div className="flex flex-wrap gap-2">
          {snippet.tags.map((tag, index) => (
            <Chip
              key={index}
              value={tag}
              variant="filled"
              className="text-xs bg-green-700 p-2"
            />
          ))}
        </div>
      </CardBody>

      <CardFooter className="pt-4 flex justify-between items-center">
        <Button onClick={handleCopy} size="sm" className="dark:bg-white dark:text-gray-800 bg-gray-950 text-white">
          {copied ? '✅ Copied!' : '📋 Copy'}
        </Button>

        <Button
          onClick={() => deleteSnippet(snippet._id)}
          size="sm"
          color="red"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  )
}

export default SnippetItem
