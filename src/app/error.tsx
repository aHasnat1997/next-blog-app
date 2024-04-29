'use client';

import { OctagonX } from 'lucide-react'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='mt-32 text-4xl w-full flex flex-col justify-center items-center'>
      <OctagonX size={'5rem'} />
      <h2>{error.message}</h2>
    </div>
  )
}