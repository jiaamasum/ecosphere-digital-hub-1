import { LucideProps } from 'lucide-react'

export const Icons = {
  logo: (props: LucideProps) => (
    <svg viewBox="0 0 512 512" {...props}>
      <g>
        {/* Outer Leaf Shape */}
        <path
          d="M256 32C172 96 96 192 96 288c0 88.22 71.78 160 160 160s160-71.78 160-160C416 192 340 96 256 32z"
          fill="#60a5fa"
        />
        {/* Inner Depth/Layer */}
        <path
          d="M256 64c-62 52-128 134-128 224 0 79.4 64.6 144 144 144 53.3 0 97.6-30.3 121.1-74.6C366.8 286.1 315.6 187.5 256 64z"
          fill="#558ce7"
        />
        {/* Translucent Base */}
        <path
          d="M256 480c-97.05 0-176-78.95-176-176 0-90.45 83.5-193.05 176-256 92.5 62.95 176 165.55 176 256 0 97.05-78.95 176-176 176z"
          fill="#87befb"
          opacity="0.3"
        />
        {/* Leaf Midrib (Center Line) */}
        <path
          d="M256 96v288"
          stroke="#222222"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* Node at center */}
        <circle cx="256" cy="256" r="12" fill="#222222" />
      </g>
    </svg>
  ),
}
