import { addDecorator } from "@storybook/react"
import { StyleDecorator } from '../../source/shared/config/storybook/styleDecorator'
import { ThemeDecorator } from '../../source/shared/config/storybook/themeDecorator'
import {Theme} from '../../source/app/providers/ThemeProvider/lib/ThemeContext'
import { RouterDecorator } from '../../source/shared/config/storybook/routerDecorator'
import { StoreDecorator } from '../../source/shared/config/storybook/storeDecorator'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)