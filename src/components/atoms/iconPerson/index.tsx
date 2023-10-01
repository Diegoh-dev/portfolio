
interface IconPersonProps{
  color:string;
  height:string;
  width:string;
}

export function IconPerson({color,height,width}:IconPersonProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="50" height="50" rx="25" fill="white" />
      <path
        d="M24.5833 10.8333C26.4067 10.8333 28.1554 11.5576 29.4447 12.8469C30.734 14.1362 31.4583 15.8849 31.4583 17.7083C31.4583 19.5316 30.734 21.2803 29.4447 22.5696C28.1554 23.8589 26.4067 24.5833 24.5833 24.5833C22.76 24.5833 21.0113 23.8589 19.722 22.5696C18.4326 21.2803 17.7083 19.5316 17.7083 17.7083C17.7083 15.8849 18.4326 14.1362 19.722 12.8469C21.0113 11.5576 22.76 10.8333 24.5833 10.8333ZM24.5833 28.0208C32.1802 28.0208 38.3333 31.0973 38.3333 34.8958V38.3333H10.8333V34.8958C10.8333 31.0973 16.9864 28.0208 24.5833 28.0208Z"
        fill={color}
      />
    </svg>
  );
}
