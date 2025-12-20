export {}

declare module '../components/ui/button' {
  export const Button: any
}

declare module '../components/Neon/VisualHero' {
  export const VisualHero: any
}

declare module '../components/Neon/NeonNavbar' {
  export const NeonNavbar: any
}

declare module '../components/sections/Footer' {
  const Footer: any
  export default Footer
}

declare module '../layout/NeonLayout' {
  export function useBackground(): { updateBackground: (color: string) => void }
}
