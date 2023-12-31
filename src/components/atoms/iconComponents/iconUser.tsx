interface IconUserProps{
  color: string;
  width:string;
  height:string;
}
//#7045D4

export function IconUser({color,width,height}:IconUserProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="65" height="65" rx="32.5" fill="white" />
      <path
        d="M32.4999 18.9583C34.2956 18.9583 36.0178 19.6716 37.2876 20.9414C38.5574 22.2112 39.2707 23.9333 39.2707 25.7291C39.2707 27.5248 38.5574 29.247 37.2876 30.5168C36.0178 31.7865 34.2956 32.4999 32.4999 32.4999C30.7042 32.4999 28.982 31.7865 27.7122 30.5168C26.4424 29.247 25.7291 27.5248 25.7291 25.7291C25.7291 23.9333 26.4424 22.2112 27.7122 20.9414C28.982 19.6716 30.7042 18.9583 32.4999 18.9583ZM32.4999 35.8853C39.9817 35.8853 46.0415 38.9153 46.0415 42.6561V46.0415H18.9583V42.6561C18.9583 38.9153 25.0181 35.8853 32.4999 35.8853Z"
        fill={color}
      />
    </svg>
  )
}
