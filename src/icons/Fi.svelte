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
  id="flag-icon-css-fi"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="FiSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#FiSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#fff" d="M0 0h512v512H0z" />
    <path fill="#003580" d="M0 186.2h512v139.6H0z" />
    <path fill="#003580" d="M123.2 0h139.6v512H123.1z" />
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-fi"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="FiSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#FiSvelteFlagIconRound' + id + ')' : '' }">
    <path fill="#fff" d="M0 0h640v480H0z" />
    <path fill="#003580" d="M0 174.5h640v131H0z" />
    <path fill="#003580" d="M175.5 0h130.9v480h-131z" />
  </g>
</svg>

{/if}
