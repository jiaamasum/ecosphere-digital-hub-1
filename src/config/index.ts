export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Courses',
    value: 'courses' as const,
    featured: [
      {
        name: 'Development',
        href: '/courses?category=development',
        imageSrc: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
      },
      {
        name: 'Business',
        href: '/courses?category=business',
        imageSrc: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      },
      {
        name: 'Design',
        href: '/courses?category=design',
        imageSrc: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      },
    ],
  },
  {
    label: 'Themes',
    value: 'themes' as const,
    featured: [
      {
        name: 'WordPress',
        href: '/themes?category=wordpress',
        imageSrc: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg',
      },
      {
        name: 'Shopify',
        href: '/themes?category=shopify',
        imageSrc: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg',
      },
      {
        name: 'React',
        href: '/themes?category=react',
        imageSrc: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg',
      },
    ],
  },
  {
    label: 'Plugins',
    value: 'plugins' as const,
    featured: [
      {
        name: 'WordPress',
        href: '/plugins?category=wordpress',
        imageSrc: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
      },
      {
        name: 'WooCommerce',
        href: '/plugins?category=woocommerce',
        imageSrc: 'https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg',
      },
      {
        name: 'Marketing',
        href: '/plugins?category=marketing',
        imageSrc: 'https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg',
      },
    ],
  },
  {
    label: 'Stock Videos',
    value: 'stock_videos' as const,
    featured: [
      {
        name: 'Nature',
        href: '/stock-videos?category=nature',
        imageSrc: 'https://images.pexels.com/photos/3876424/pexels-photo-3876424.jpeg',
      },
      {
        name: 'Business',
        href: '/stock-videos?category=business',
        imageSrc: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      },
      {
        name: 'Technology',
        href: '/stock-videos?category=technology',
        imageSrc: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      },
    ],
  },
]

export const COURSE_CATEGORIES = [
  { label: 'Development', value: 'development' },
  { label: 'Business', value: 'business' },
  { label: 'Design', value: 'design' },
  { label: 'Marketing', value: 'marketing' },
]

export const THEME_CATEGORIES = [
  { label: 'WordPress', value: 'wordpress' },
  { label: 'Shopify', value: 'shopify' },
  { label: 'HTML', value: 'html' },
  { label: 'React', value: 'react' },
]

export const PLUGIN_CATEGORIES = [
  { label: 'WordPress', value: 'wordpress' },
  { label: 'Shopify', value: 'shopify' },
  { label: 'WooCommerce', value: 'woocommerce' },
  { label: 'Marketing', value: 'marketing' },
]

export const VIDEO_CATEGORIES = [
  { label: 'Nature', value: 'nature' },
  { label: 'Business', value: 'business' },
  { label: 'Technology', value: 'technology' },
  { label: 'People', value: 'people' },
]