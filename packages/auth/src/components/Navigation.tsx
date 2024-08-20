import React, { useEffect } from 'react'

import {
  type ActionButtonProps,
  ActionButton,
} from '@keystar/ui/button'
import { TooltipTrigger, Tooltip } from '@keystar/ui/tooltip'
import { HStack } from '@keystar/ui/layout'
import { Text } from '@keystar/ui/typography'

import {
  useQuery,
  useMutation,
  gql,
} from '@keystone-6/core/admin-ui/apollo'
import {
  DeveloperResources,
  ListNavItems,
  NavigationContainer,
  NavItem
} from '@keystone-6/core/admin-ui/components'
import type { NavigationProps } from '@keystone-6/core/admin-ui/components'

type AuthenticatedItem = {
  label: string
  id: string
  listKey: string
}

function AuthItem ({ item }: { item: AuthenticatedItem | null }) {
  if (!item) return null

  return (
    <TooltipTrigger>
      <SignoutButton flex />
      <Tooltip>
        <Text>Signed in as <strong>{item.label}</strong></Text>
      </Tooltip>
    </TooltipTrigger>
  )
}

function Footer ({ authItem }: { authItem: AuthenticatedItem | null }) {
  return (
    <HStack paddingX="large" gap="regular">
      <AuthItem item={authItem} />
      <DeveloperResources />
    </HStack>
  )
}

export default function Navigation ({ lists }: NavigationProps) {
  const { data } = useQuery<{
    authenticatedItem: AuthenticatedItem | null
  }>(gql`
    query whoami {
      authenticatedItem {
        label
        id
        listKey
      }
    }
  `)

  return (
    <NavigationContainer>
      <NavItem href='/'>Dashboard</NavItem>
      <ListNavItems lists={lists} />
      <Footer authItem={data?.authenticatedItem ?? null} />
    </NavigationContainer>
  )
}

const END_SESSION = gql`
  mutation EndSession {
    endSession
  }
`

function useSignout () {
  const [signout, result] = useMutation(END_SESSION)

  // TODO: handle errors
  useEffect(() => {
    if (result.data?.endSession) {
      window.location.reload()
    }
  }, [result.data])

  return {
    signout,
    loading: result.loading,
  }
}

function SignoutButton (props: Omit<ActionButtonProps, 'onPress'>) {
  const { children = 'Sign out', ...otherProps } = props
  const { signout } = useSignout()

  return (
    <ActionButton onPress={() => signout()} {...otherProps}>
      {children}
    </ActionButton>
  )
}
