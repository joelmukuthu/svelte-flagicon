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
  id="flag-icon-css-tk"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="TkSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TkSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#00247d" d="M0 0h512v512H0z" />
    <path
      fill="#fed100"
      d="M90.7 384.2c-5.3 0 50-29.5 96.4-67.2 60.7-49.5 191.5-128.7 230-141.5 4-1.3-8.2 6.8-9.8 9.5-41.1 48.6-8.3 140.3 43 186.4 15.4 11.8 14.6 12.4 43.2 13.6v2.7l-402.8-3.5zm-3.3 5.4s-3.9 2.8-3.9 4.9c0 2.3 4.4 5.4 4.4 5.4l397.3 4.4 7.3-4.9-10.2-6.3-394.9-3.5z"
    />
    <path
      fill="#fff"
      d="M105.5 116.6l-4 12.1 10.4-7.5 10.3 7.5-4-12.1 10.4-7.5h-12.8l-3.9-12.2-4 12.2H95.2zm77.8 57.1l8.6-6.2h-10.6l-3.3-10.1-3.3 10.1h-10.6l8.6 6.2-3.3 10.1 8.6-6.2 8.6 6.2zm-144.7 13l-3.9-12.1-4 12.1H18l10.3 7.5-4 12.1 10.4-7.5 10.3 7.5-3.9-12.1 10.3-7.5zm77.9 121.9l-4.6-14.2-4.6 14.2H92.4l12 8.7-4.6 14.2 12.1-8.8 12 8.8-4.6-14.2 12-8.7z"
    />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-tk"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="TkSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#TkSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#00247d" d="M0 0h640v480H0z" />
    <path
      fill="#fed100"
      d="M108.1 354.6c-6.7-.1 62.8-37 120.9-84.4 76.2-62.1 240.3-161.4 288.6-177.6 5-1.7-10.3 8.6-12.3 11.9-51.5 61-10.4 176 54 233.9 19.4 14.8 18.4 15.6 54.3 17v3.4l-505.5-4.2zm-4.2 6.7s-4.9 3.5-4.9 6.1c0 2.9 5.5 6.7 5.5 6.7l498.5 5.5 9.2-6.1-12.8-7.9-495.5-4.3z"
    />
    <path
      fill="#fff"
      d="M106.8 109.1l-4 12.2 10.4-7.5 10.3 7.5-3.9-12.2 10.3-7.5h-12.8l-3.9-12.2-4 12.2H96.4zm78.1 57.4l8.6-6.3h-10.7l-3.3-10.1-3.3 10.1h-10.6l8.6 6.3-3.3 10.1 8.6-6.3 8.7 6.3zm-145.2 13l-4-12.2-3.9 12.2H19l10.3 7.5-3.9 12.2 10.3-7.5 10.4 7.5-4-12.2 10.4-7.5zm78.1 122.3l-4.6-14.2-4.6 14.2h-15l12.1 8.7-4.6 14.3 12.1-8.8 12.1 8.8-4.7-14.3 12.1-8.7z"
    />
  </g>
</svg>

{/if}
