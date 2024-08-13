import React from 'react'

import {
  ListNavItems,
  NavigationContainer,
  NavItem
} from '@keystone-6/core/admin-ui/components'
import type { NavigationProps } from '@keystone-6/core/admin-ui/components'
import SignoutButton from './SignoutButton'

export default function Navigation ({ lists }: NavigationProps) {
  return (
    <NavigationContainer>
      <NavItem href='/'>Dashboard</NavItem>
      <ListNavItems lists={lists} />
      <SignoutButton />
    </NavigationContainer>
  )
}
