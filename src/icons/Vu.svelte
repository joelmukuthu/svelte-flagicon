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
  id="flag-icon-css-vu"
  viewBox="0 0 512 512"
  width="{size}"
>
  <defs>
    <clipPath id="a{id}">
      <path fill-opacity=".7" d="M0 0h496v496H0z" />
    </clipPath>

    <mask id="VuSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#VuSvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#a{id})" transform="scale(1.0321)">
      <g fill-rule="evenodd">
        <path d="M0 0l336.6 212.6h407.5v70.9H336.6L0 496V0z" />
        <path
          fill="#ff0"
          d="M0 478.4l343.7-219.7h400.4v-21.3H343.7L0 17.7v32L322.4 248 0 446.5v31.8z"
        />
        <path fill="#40aa40" d="M0 496l343.7-219.6h400.4V496H0z" />
        <path fill="#ce0000" d="M0 0l343.7 219.7h400.4V0H0z" />
        <path
          fill="#ff0"
          d="M92.8 258.3c1.2.3 1.5.6 2.7-1.1.3-.9 1-2 1.6-3.2.9-1.4 1.3-2 2-.9.6.6 2.7-.5 3.6.1 1.3 1 .5.8 1.6-.2.8-1.8 0-1.6-1.1-2.4-.8-.5-3 .6-3.8 0 .3-1.7.9-2 1.9-2.3.8.6 3-.4 3.8-.4 1 .2 1.8.3 2.1-1.1.5-1 .3-.3 0-1-1-.6-3 .5-3.9 0-1-.9-.9-1.2-.2-2.5.8-.5 1.4-.3 2.5.4 1 .7 2.7-.7 3.7-.8.8-1 1.8-1.3 1.2-2.4-.3-1-.6-1-1.8-1.3-1.2-.8-2.7.7-3.2-.5 1-1.3 1.3-1 2.5-.3.7.3 3-1 3.6-1.1 1.1-.3.6.9 1.3-1.8-.2-1-2.1.7-3.2.4-1 .2-1.9-.2-2-1.3 0-1.5.8-1.6 1.8-1.4 1 .2 3.1-1 3.9-1 1.1.6 1.5.4 2.4-1 .6-1.6-.1-1-1.2-1.8-.9-.5-3 .6-3.8 0 .1-.5.4-1.3 1-1.6.8.2 1.5.1 2.5.8 1 .4 2.7-1.5 3.6-2.2-.2-1-1.9.4-2.9-.3-.6-.4-1.4-.9-1.6-1.4.6-1.7.3-1.6 1.9-1 .8-.3 2.2-.3 1.3-1.8-.2-.3-1-.2-1.7-.5-1-.6-1.8-1.2-2.7-1.5-.6-.1-1.6-.3-2.1-.2-.1 1 .2 1.6 0 2.8.5.7 1.3.7 1.5 1-.9.7-1.3.3-2.2.4-1.1-.8-.5-3.1-1.8-2.6.3.7.2 3.3.7 3.8.6.4 1.4.8 1.5 1.4-1 1.4-1.3 1.3-2.4.6-1-.6-.6-2.7-1.4-2.6-1 .7-1 .7-.8 1.8 0 1.3-.5 3.2.6 4 1.3 1 1.5.8.4 2.6-.7.9-1.1.7-2 .3-.8-.6-.6-2.8-1.3-3.6-1.3-.7-.6-.7-1.6.2-.4 1.3-.1 1.6.4 2.7.4.6.4 3 1.2 3 1.2.8 1.2.6-.2 2-1 0-1.5.3-2.3-.7-1-.7-.4-3-1.7-3.1-1.2.1-1.4.1-1.3 1.7.2 1.5-.3 3.7.8 4.6 1.1.5 1.8.4 2.1 1l-1.3 1.5c-.7 0-1.5-.5-2.4-.7-1-.4-.5-1.3-1.3-1.9-1 .3-1-1-1.5.3.2 1.1-.2 2.5.9 3.2.8.6 1.5 1.8 2.4 2.3 1 1.2.5 1.4 0 3-.8 0-1.8-.5-2.6-1.1-.9-.6-.7-2.8-1.6-3.4-.7-.7-.5-1.3-1.6.2 0 1.1.1 1.2.4 2 0 1-.3 3 .7 3.7l3 1c.7 1 0 .8-.8 2.2-.6 1.4-.6 1.6-1.4 2.3-.8 1-1 1.4-.4 2.7z"
        />
        <path
          fill="#ff0"
          d="M117.2 259.5c.7-1.1 1.1-1.3 0-3.3-.7-.6-1.5-1.9-2.3-3-1-1.5-1.3-2 0-2.5.8-.3.6-3 1.5-3.7 1.3-1 .9-.2.4-1.8-1.3-1.6-1.4-.7-2.6.2-.9.7-.6 3.4-1.5 4-1.5-1-1.4-1.6-1.4-2.9.8-.6.9-3.4 1.2-4.1.6-1 1-1.9-.2-2.8-.8-1-.2-.4-1-.3-.9.7-.6 3.4-1.5 4-1.2.9-1.4.5-2.4-.7 0-1 .4-1.6 1.4-2.5 1-.8.4-3.2.8-4.2-.6-1.3-.5-2.5-1.8-2.3-1 0-1.2.3-1.8 1.4-1.3 1-.5 3.2-1.8 3.2-.9-1.6-.5-1.8.7-2.7.5-.7.2-3.6.4-4.4.2-1.2 1-.2-1-2-1.2-.2-.3 2.6-1 3.6-.3 1.1-1 1.9-2 1.5-1.4-.6-1.2-1.4-.5-2.5.5-.9.3-3.6.6-4.5 1-.9 1-1.4 0-2.9-1.2-1.3-.9-.3-2.1.6-.9.6-.6 3.4-1.5 4-.5-.4-1-1-1.1-1.7.5-.8.7-1.6 1.7-2.4.8-.9-.3-3.5-.6-4.6-.9-.2-.3 2-1.4 2.9-.6.5-1.4 1.1-2 1.1-1.2-1.2-1.3-1-.2-2.4.2-1 .7-2.5-1-2-.4 0-.6 1-1.2 1.6-.9.6-1.8 1.3-2.4 2.2-.4.6-1 1.6-1 2.2.8.4 1.5.4 2.5 1 .9-.2 1.2-1 1.5-1.2.4 1.3-.2 1.6-.5 2.6-1.1.9-3-.7-3 .8.7 0 3 1.2 3.8.8.6-.5 1.2-1.1 1.8-1 1 1.5.7 1.9-.4 2.8-1 .7-2.8-.4-3 .4.3 1.4.3 1.4 1.3 1.6 1.3.5 2.8 1.8 4 1 1.4-1 1.3-1.3 2.6.5.5 1.1.2 1.5-.5 2.2-1 .7-3-.4-3.9 0-1.2 1.1-.9.3-.4 1.9 1 .8 1.3.7 2.5.5.8-.2 3 .8 3.4 0 1-1 1-1 1.7 1-.4 1.1-.4 1.7-1.6 2.2-1 .8-3-.8-3.5.5-.4 1.3-.5 1.6 1 2 1.5.4 3.3 1.9 4.6 1 .8-1 1-1.6 1.8-1.8l.8 2c-.3.8-1 1.4-1.6 2.3-.8.9-1.5 0-2.3.7 0 1-1.3.6-.3 1.6 1.1.3 2.3 1.2 3.3.4.9-.6 2.2-1 3-1.6 1.5-.6 1.5 0 2.8 1.2a7 7 0 01-2 2.3c-1 .6-2.9-.4-3.7.3-1 .4-1.4 0-.5 1.8 1 .5 1.1.3 1.9.3 1 .4 2.7 1.6 3.8.8.6-1 1.5-2 2-2.7 1.2-.5.8.2 1.7 1.6 1 1.2 1.3 1.3 1.6 2.4.6 1.2.9 1.7 2.4 1.5z"
        />
        <path
          fill="#ff0"
          d="M95 304.7c0-5.1-.8-10.3 0-10.3 45.3 0 56.6-31 56.6-51.5 0-20.6-15.7-41.3-45.3-41.3-34 0-45.4 20.2-45.4 41.3 0 20.6 17 36 34 36 22.7 0 28.4-5.1 45.4-25.7-5.7 25.7-34 36-45.3 36A44 44 0 0149.6 243c0-25.8 17-51.6 56.7-51.6 34 0 56.7 25.8 56.7 51.6 0 36-28.4 61.8-68 61.8z"
        />
      </g>
    </g>
  </g>
</svg>

{:else}

<svg
  xmlns="http://www.w3.org/2000/svg"
  id="flag-icon-css-vu"
  viewBox="0 0 640 480"
  width="{size}"
>
  <defs>
    <clipPath id="vu-a{id}">
      <path fill-opacity=".7" d="M0 0h682.7v512H0z" />
    </clipPath>

    <mask id="VuSvelteFlagIconRound{id}">
      <rect width="100%" height="100%" fill="black" />
      <circle r="50%" cx="50%" cy="50%" fill="white" />
    </mask>
  </defs>
  <g mask="{ round ? 'url(#VuSvelteFlagIconRound' + id + ')' : '' }">
    <g clip-path="url(#vu-a{id})" transform="scale(.9375)">
      <g fill-rule="evenodd">
        <path d="M0 0l347.4 219.4H768v73.2H347.4L0 512V0z" />
        <path
          fill="#ff0"
          d="M0 493.7L354.7 267H768v-22H354.7L0 18.3v32.9L332.8 256 0 460.8v32.9z"
        />
        <path fill="#40aa40" d="M0 512l354.7-226.7H768V512H0z" />
        <path fill="#ce0000" d="M0 0l354.7 226.7H768V0H0z" />
        <path
          fill="#ff0"
          d="M95.8 266.6c1.2.3 1.6.6 2.8-1.1.2-1 1-2.2 1.7-3.3.8-1.5 1.2-2 2-1 .6.7 2.8-.5 3.6.1 1.4 1 .6.8 1.7-.2.9-1.8.1-1.6-1-2.4-1-.6-3.1.6-4 0 .3-1.8.9-2 2-2.4.8.5 3.1-.4 3.8-.4 1 .2 2 .3 2.3-1.2.5-1 .3-.3-.2-1-.8-.7-3 .5-3.9 0-1-.9-.9-1.2-.2-2.6.8-.5 1.5-.3 2.6.4 1 .8 2.8-.7 3.8-.8.9-1 1.9-1.3 1.2-2.5-.3-1-.6-1-1.8-1.3-1.2-.8-2.8.7-3.3-.5 1-1.4 1.3-1.1 2.5-.3.8.2 3-1.1 3.8-1.2 1.1-.3.6 1 1.4-1.8-.3-1.2-2.3.7-3.4.4-1 .2-2-.2-2-1.4 0-1.5.8-1.6 1.9-1.4 1 .2 3.1-1 4-1 1 .6 1.5.4 2.4-1 .6-1.7-.1-1-1.3-2-.8-.5-3 .7-3.9.1.2-.6.5-1.4 1-1.7.9.2 1.6.2 2.7.8 1 .5 2.8-1.5 3.7-2.2-.2-1-2 .4-3-.3-.6-.5-1.5-1-1.7-1.5.6-1.7.3-1.6 2-1 .8-.3 2.3-.3 1.3-1.9-.2-.2-1-.2-1.8-.5-.9-.6-1.7-1.3-2.7-1.5-.7-.1-1.7-.4-2.2-.2 0 1 .2 1.6.1 2.8.5.7 1.3.7 1.5 1-.9.8-1.4.4-2.3.4-1.2-.7-.5-3.1-1.9-2.6.3.7.2 3.4.8 4 .6.4 1.4.8 1.5 1.3-1 1.5-1.3 1.4-2.5.7-1-.6-.6-2.8-1.5-2.7-1 .8-1 .7-.8 1.8 0 1.4-.5 3.4.7 4.2 1.3 1 1.5.8.4 2.7-.7.9-1.1.7-2 .3-.9-.6-.7-3-1.4-3.7-1.4-.8-.6-.8-1.7.2-.3 1.3 0 1.6.5 2.7.4.7.4 3 1.2 3.2 1.2.7 1.3.6-.2 2-1 0-1.6.3-2.4-.7-1-.8-.4-3.2-1.7-3.2-1.2.1-1.5.1-1.4 1.8.3 1.5-.3 3.8.9 4.7 1.1.5 1.8.4 2.2 1.1-.4.3-1 1.3-1.4 1.5-.8 0-1.6-.5-2.5-.7-1-.5-.5-1.4-1.4-2-1 .3-1-1-1.5.3.2 1.2-.2 2.6 1 3.4.8.5 1.5 1.7 2.4 2.3 1 1.2.6 1.4 0 3-.9.1-1.8-.5-2.7-1-.9-.7-.7-3-1.6-3.5-.7-.8-.5-1.4-1.7.2 0 1 .1 1.2.4 2 0 1-.2 3.2.8 3.9 1 .2 2.2.7 3 1 .8 1 .1.8-.8 2.2-.5 1.4-.5 1.7-1.4 2.4-.8 1-1 1.5-.4 2.8z"
        />
        <path
          fill="#ff0"
          d="M121 267.9c.7-1.2 1.1-1.4 0-3.4-.8-.7-1.6-2-2.4-3.1-1-1.6-1.3-2.2 0-2.7.8-.3.6-3 1.5-3.7 1.4-1.1 1-.3.5-1.9-1.4-1.7-1.5-.8-2.7.2-1 .7-.7 3.5-1.5 4.2-1.6-1-1.6-1.8-1.5-3 .9-.7.9-3.6 1.2-4.3.6-1 1-2-.2-2.9-.8-1-.2-.4-1-.3-1 .7-.7 3.5-1.6 4.2-1.2.8-1.4.5-2.4-.8-.1-1 .3-1.7 1.4-2.6 1.1-.8.5-3.3.8-4.3-.6-1.4-.5-2.6-1.8-2.4-1 0-1.2.3-2 1.5-1.2 1-.4 3.2-1.8 3.2-.9-1.6-.4-1.8.8-2.8.5-.7.2-3.7.4-4.5.2-1.2 1-.2-1.1-2-1.2-.3-.2 2.6-1 3.6-.3 1.2-1 2-2 1.6-1.5-.6-1.2-1.5-.6-2.5s.3-3.8.7-4.7c1-1 1-1.4 0-3-1.3-1.4-1-.3-2.2.6-1 .7-.7 3.5-1.6 4.2-.5-.5-1-1-1.1-1.8.5-.8.7-1.6 1.8-2.5.8-.9-.4-3.5-.6-4.8-1-.2-.4 2.2-1.5 3-.7.5-1.4 1.2-2 1.2-1.3-1.3-1.4-1-.2-2.5.1-1 .7-2.5-1.2-2-.3 0-.5 1-1.1 1.6-1 .7-1.9 1.3-2.5 2.2-.4.7-1 1.7-1 2.3.8.5 1.5.5 2.6 1 .8-.2 1.2-1 1.5-1.1.3 1.2-.2 1.6-.5 2.6-1.2 1-3.2-.7-3.2 1 .8-.1 3.2 1 4 .7.6-.5 1.3-1.2 1.8-1 1 1.5.8 1.9-.3 2.8-1 .8-3-.4-3.1.5.3 1.4.2 1.4 1.3 1.6 1.3.5 2.9 1.9 4 1 1.5-1 1.5-1.3 2.7.6.6 1.1.3 1.5-.5 2.2-.9.8-3-.4-4 0-1.2 1.2-.9.4-.4 2 1 .8 1.4.7 2.7.5.8-.2 3 .8 3.4 0 1.1-1 1-1.1 1.7 1-.4 1.2-.3 1.8-1.6 2.3-1.1.8-3-.9-3.6.5-.4 1.4-.5 1.7 1.1 2.2 1.5.3 3.4 1.8 4.7 1 .9-1 1-1.8 1.9-2 .1.6.7 1.6.7 2.1-.2.9-1 1.5-1.6 2.4-.8.9-1.5 0-2.3.7-.1 1.1-1.4.6-.3 1.7 1 .2 2.3 1.2 3.4.4.9-.7 2.3-1 3.1-1.7 1.5-.6 1.5 0 2.8 1.2-.3 1-1.2 1.7-2 2.4-1 .7-3-.4-3.9.3-1 .5-1.4 0-.5 1.9 1 .5 1.2.3 2 .3 1 .5 2.8 1.6 3.9.8.6-1 1.6-2 2.2-2.8 1.1-.4.7.2 1.6 1.7 1.1 1.2 1.4 1.3 1.7 2.5.6 1.2 1 1.7 2.4 1.5z"
        />
        <path
          fill="#ff0"
          d="M98 314.5c0-5.3-.8-10.6 0-10.6 46.8 0 58.5-32 58.5-53.2S140.3 208 109.7 208c-35 0-46.8 20.8-46.8 42.6A37 37 0 0098 287.9c23.4 0 29.3-5.3 46.8-26.6-5.8 26.6-35 37.2-46.8 37.2-23.4 0-46.8-16-46.8-47.8 0-26.6 17.5-53.2 58.5-53.2 35.1 0 58.5 26.6 58.5 53.2 0 37.2-29.2 63.8-70.2 63.8z"
        />
      </g>
    </g>
  </g>
</svg>

{/if}
