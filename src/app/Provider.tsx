
"use client"

import { Theme } from '@radix-ui/themes';
import {ThemeProvider} from 'next-themes';

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <Theme >
        {children}
      </Theme>
    </ThemeProvider>
  )
}
export default Provider;