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
  id="flag-icon-css-ye"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="YeSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#YeSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h512v504.3H0z" />
      <path fill="#f10600" d="M0 0h512v167.9H0z" />
      <path d="M0 344.1h512V512H0z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ye"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="YeSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#YeSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h640v472.8H0z" />
      <path fill="#f10600" d="M0 0h640v157.4H0z" />
      <path d="M0 322.6h640V480H0z" />
    </g>
  </g>
</svg>

{/if}
