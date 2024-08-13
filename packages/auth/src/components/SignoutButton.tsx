/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@keystone-ui/core'
import { Button } from '@keystone-ui/button'
import { useEffect } from 'react'

import { useMutation, gql } from '@keystone-6/core/admin-ui/apollo'

const END_SESSION = gql`
  mutation EndSession {
    endSession
  }
`

export default function SignoutButton () {
  const [endSession, { loading, data }] = useMutation(END_SESSION)
  useEffect(() => {
    if (data?.endSession) {
      window.location.reload()
    }
  }, [data])

  return <Button size="small" isLoading={loading} onClick={() => endSession()}>
    Sign out
  </Button>
}
