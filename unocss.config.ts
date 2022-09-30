import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
  rules: [
    [/^animate\-fadein\-shift\-(\w)\-(\-?\d+)\-(\d+)$/, (matches) => {
      const animationName = `fadein-shift-${matches[1]}-${matches[2]}-${matches[3]}`
      const animationBody = `{ 
        0%, 10% { 
          -webkit-transform: translate${matches[1].toUpperCase()}(${matches[2]}rem);
          transform: translate${matches[1].toUpperCase()}(${matches[2]}rem);
          opacity: 0;
        } 
        90%, 100% { 
          -webkit-transform: translate${matches[1].toUpperCase()}(0rem);
          transform: translate${matches[1].toUpperCase()}(0rem);
          opacity: 1;
        } 
      }`
      return `@keyframes ${animationName} ${animationBody}
@-webkit-keyframes ${animationName} ${animationBody}
.animate-${animationName} {
  -webkit-animation: ${animationName} ${matches[3]}ms cubic-bezier(0, 0, 0.2, 1) 1;
  animation: ${animationName} ${matches[3]}ms cubic-bezier(0, 0, 0.2, 1) 1;
}`
    }],
  ],
  theme: {
    breakpoints: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
})
