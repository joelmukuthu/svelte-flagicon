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
  id="flag-icon-css-it"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="ItSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ItSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h512v512H0z" />
      <path fill="#009246" d="M0 0h170.7v512H0z" />
      <path fill="#ce2b37" d="M341.3 0H512v512H341.3z" />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-it"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="ItSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#ItSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#009246" d="M0 0h213.3v480H0z" />
      <path fill="#ce2b37" d="M426.7 0H640v480H426.7z" />
    </g>
  </g>
</svg>

{/if}
