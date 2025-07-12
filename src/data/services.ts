export interface Service {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  isExternal: boolean
  externalUrl?: string
}

export interface BrandColors {
  primary: string
  secondary: string
  accent: string
  neutral: string
  dark: string
}

export const services: Service[] = [
  {
    id: 'easy-fi',
    name: 'Easy-Fi',
    tagline: 'Seamless Internet Solutions',
    description: 'High-speed internet connectivity and networking solutions designed for modern businesses and homes.',
    icon: 'FaGlobe',
    isExternal: true,
    externalUrl: '/easy-fi'
  },
  {
    id: '360net',
    name: '360net',
    tagline: 'Complete Network Infrastructure',
    description: 'Comprehensive network setup, maintenance, and optimization services for enterprises and organizations.',
    icon: 'FaLink',
    isExternal: false
  },
  {
    id: 'easy-buy',
    name: 'Easy-Buy',
    tagline: 'Smart Shopping Solutions',
    description: 'Digital commerce platform and shopping assistance services that make purchasing decisions simple and efficient.',
    icon: 'FaShoppingCart',
    isExternal: false
  },
  {
    id: '360-designs',
    name: '360 Designs',
    tagline: 'Creative Design Solutions',
    description: 'Full-spectrum design services including branding, web design, graphics, and creative content development.',
    icon: 'FaPalette',
    isExternal: false
  },
  {
    id: '360-constructions',
    name: '360 Constructions',
    tagline: 'Building Excellence',
    description: 'Professional construction and renovation services with focus on quality, innovation, and sustainable building practices.',
    icon: 'FaHammer',
    isExternal: false
  },
  {
    id: '360-security',
    name: '360 Security',
    tagline: 'Comprehensive Protection',
    description: 'Advanced security solutions including digital security, physical security systems, and risk management services.',
    icon: 'FaShieldAlt',
    isExternal: false
  },
  {
    id: '360-consult',
    name: '360 Consult',
    tagline: 'Strategic Business Guidance',
    description: 'Professional consulting services for business strategy, operations optimization, and growth planning.',
    icon: 'FaUsers',
    isExternal: false
  }
]

export const brandColors: BrandColors = {
  primary: '#f97316', // Orange
  secondary: '#000000', // Black
  accent: '#f97316', // Orange (for glows and accents)
  neutral: '#ffffff', // White
  dark: '#030712' // Very dark gray/black for subtle variations
} 