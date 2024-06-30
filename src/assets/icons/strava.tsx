export const Strava = ({ style }: { style?: React.CSSProperties }) => (
  // https://iconmonstr.com/facebook-3-svg/
  <svg viewBox='0 0 512 512' style={style} fill='currentColor'>
    <rect height='512' rx='20%' width='512' />
    <path d='m120 288 112-232 112 232h-72l-40-96-40 96z' fill='var(--app-background-color)' />
    <path d='m280 288 32 72 32-72h48l-80 168-80-168z' fill='var(--app-background-color)' opacity={0.7} />
  </svg>
);
