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
  id="flag-icon-css-ws"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <mask id="WsSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#WsSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#ce1126" d="M0 0h512v512H0z" />
      <path fill="#002b7f" d="M0 0h256v256H0z" />
      <path
        fill="#fff"
        d="M147 231.4l-19.6-13.3-18.9 13.5 6-23.5-18-14.7 23.2-1.3 7.7-22.4 8.5 22.8 22.8.5-18.2 15.5zm-3.4-156.8l-15.6-10-15.4 10 4.2-19-13.7-12.1 18.3-1.6 6.8-17.5 7.1 17.7 18 1.4-14 12.5zM74.3 131l-15.2-10.8-15.4 10.4 4.6-18.3L34 100.2l18.2-.8 6.7-18.1 6.6 17.8 18.3 1.1-14.3 12zm139-12.7l-14.7-9.5-14.3 9.7 4-17.4-13-11.2 17.3-1.4 6-16.4 6.6 16.6 16.8 1-13.2 11.6zm-41.1 41.3l-9.7-6.2-9.6 6.2 2.5-11.6-8.7-7.7 11.4-1 4.4-11 4.5 11 11.2 1-8.5 7.7z"
      />
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-ws"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <mask id="WsSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#WsSvelteFlagIconRound' + id + ')' : '' }">
    <g fill-rule="evenodd" stroke-width="1pt">
      <path fill="#ce1126" d="M0 0h640v480H0z" />
      <path fill="#002b7f" d="M0 0h320v240H0z" />
      <path
        fill="#fff"
        d="M180 229.3l-20.7-14-19.9 14.1 6.5-24.9-19-15.2 24.5-1.5 8.1-23.6 8.8 24 24 .7-19 16.3zm-3.6-165.6L159.8 53l-16 10.4 4.4-20-14.6-12.7 19.4-1.6 7.2-18.6 7.4 18.7 19.1 1.7L172 44.3zm-73 59.5l-16-11-16.7 11 5.2-19.4L60.8 91 80 90l7-19 6.8 18.9 19.6 1.1-15 12.5zM250 110l-15.4-10-15 10 4.4-18.3-14-11.8 18.3-1.5 6.3-17.2 7 17.4 17.7 1-13.7 12.3zm-43.1 43.4l-10.3-6.4-10.3 6.6 2.7-12.3-9.2-8.3 12-1 4.6-11.6 4.9 11.6 11.9 1-9.1 8.3z"
      />
    </g>
  </g>
</svg>

{/if}
