<script>
  import { v4 as uuidv4 } from "uuid";
  export let id = uuidv4();
  export let size = 32;
  export let round = false;
  export let square = false;
</script>

{#if square}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-mo"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="MoSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MoSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#00785e" d="M0 0h512v512H0z" />
    <path fill="#fbd116" d="M272.5 147.4L256 96.5l-16.5 51 43.3-31.5h-53.6z" />
    <g id="a">
      <path
        fill="#fff"
        d="M256 353.7H146.7a156 156 0 01-4-4.2H256a2.3 2.3 0 011.5 2c0 1-.6 1.9-1.5 2.2zm0-33.4c.6-1.3 1.9-4.3 1.3-8a13.2 13.2 0 00-1.3-4.1 87.4 87.4 0 01-34.7 20.2 86.4 86.4 0 01-25 3.7h-67.4a154 154 0 006.3 8.6h65a86.2 86.2 0 0055.8-20.4zM139.1 294a34.4 34.4 0 01-10.3 2.2 86.3 86.3 0 0064.8 29.3 86.3 86.3 0 0062.4-26.6 470.3 470.3 0 004.8-62.9 470.3 470.3 0 00-4.8-72.2c-7 6.3-20.2 20-26.4 40.9a86.5 86.5 0 00-3.6 24.6 86.1 86.1 0 0014.6 48.1 86.1 86.1 0 01-18-52.9 86.1 86.1 0 018.2-37 34.7 34.7 0 01-8-13.8 86 86 0 00-11.2 42.6 86.1 86.1 0 0017 51.4 101.4 101.4 0 00-78.3-31.5 34.8 34.8 0 017.2 9.5 101.4 101.4 0 0173.3 31.4 101.3 101.3 0 00-65.2-23.6c-13.8 0-27 2.7-39 7.8a86.6 86.6 0 0088 55.6 87 87 0 01-15.4 1.4 86.2 86.2 0 01-60.1-24.3zM256 388.7h-56.6a153 153 0 0056.6 10.8 11.6 11.6 0 001.3-5.3 11.7 11.7 0 00-1.3-5.5zm0-26.2h-99.9a154 154 0 008.4 6.7H256a4.9 4.9 0 001.4-3.3c0-2-1.2-3.1-1.4-3.4zm0 13.4h-81.8a153.2 153.2 0 0015.4 8.5H256a8 8 0 001.2-4.5 8 8 0 00-1.2-4z"
      />
      <path
        fill="#fbd116"
        d="M155.6 211.7l-7-36.4-15.7 33.6 32.4-18-36.8-4.5zm49.3-58.8l-29.6-22.3 10.8 35.4 12.1-35-30.3 21.3z"
      />
    </g>
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 512 0)"
      xlink:href="#a"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  id="flag-icon-css-mo"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="MoSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#MoSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#00785e" d="M0 0h640v480H0z" />
    <path
      fill="#fbd116"
      d="M295 108.7l40.5 29.5L320 90.5l-15.5 47.7 40.6-29.5z"
    />
    <g id="a">
      <path
        fill="#fff"
        d="M320 331.6H217.5a146.3 146.3 0 01-3.8-4H320a2.1 2.1 0 011.4 2c0 .8-.5 1.7-1.4 2zm0-31.3a13 13 0 001.2-7.6 12.4 12.4 0 00-1.2-3.8 82 82 0 01-32.5 19 81 81 0 01-23.5 3.5h-63.1a144.4 144.4 0 005.8 8h61c20 0 38.2-7.2 52.3-19.1zm-109.6-24.7a32.3 32.3 0 01-9.7 2 81 81 0 0060.8 27.5 80.9 80.9 0 0058.5-25 441 441 0 004.5-58.8 441 441 0 00-4.5-67.7c-6.6 6-19 18.7-24.8 38.3A81 81 0 00292 215a80.7 80.7 0 0013.7 45 80.7 80.7 0 01-17-49.5c0-12.4 2.8-24.2 7.8-34.7a32.5 32.5 0 01-7.5-13 80.7 80.7 0 00-10.5 40c0 18 5.9 34.7 15.9 48.1a95 95 0 00-73.4-29.4 32.6 32.6 0 016.8 8.9 95 95 0 0168.6 29.4 95 95 0 00-61-22.2 95 95 0 00-36.7 7.3 81.2 81.2 0 0082.6 52.2c-4.7.8-9.5 1.3-14.4 1.3a80.8 80.8 0 01-56.4-22.8zM320 364.4h-53.1a143.5 143.5 0 0053.1 10.1 11 11 0 001.3-5 11 11 0 00-1.3-5.1zm0-24.5h-93.6a143.8 143.8 0 007.8 6.2H320a4.6 4.6 0 001.3-3.1 4 4 0 00-1.3-3.1zm0 12.5h-76.7a143.6 143.6 0 0014.4 8H320a7.6 7.6 0 001.2-4.2 7.5 7.5 0 00-1.2-3.8z"
      />
      <path
        fill="#fbd116"
        d="M200.5 174.8l25.4 23.6-6.7-34-14.6 31.4 30.3-16.8zm36.9-32l34.7.6-27.7-21 10.1 33.3 11.3-32.9z"
      />
    </g>
    <use
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 640 0)"
      xlink:href="#a"
    />
  </g>
</svg>

{/if}
