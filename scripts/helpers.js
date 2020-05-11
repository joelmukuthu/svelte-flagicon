module.exports.kebabToPascal = (text) => {
  return text
    .replace(/^\w/, p => p.toUpperCase())
    .replace(/-\w/g, p => p[1].toUpperCase());
};

function fixSvg(code) {
  let defs = "";
  {
    const defs1 = code.split("<defs>");
    if (defs1.length > 1) {
      const defs2 = defs1[1].split("</defs>");
      defs = defs2[0];
      code = `
        ${defs1[0]}
        ${defs2[1]}
      `;
    }
    defs = `
      ${defs}
      <mask id="svelte_flagicons_round">
        <rect width="100%" height="100%" fill="black" />
        <circle r="50%" cx="50%" cy="50%" fill="white" />
      </mask>
    `;
  }

  return code
    .replace(/<svg [^>]*>/, p => `
      ${p.substr(0, p.length - 1)} width="{size}">
      <defs>
        ${defs}
      </defs>
      <g mask="{ round ? 'url(#svelte_flagicons_round)' : '' }">
    `)
    .replace("</svg>", "</g></svg>");
  ;
}

module.exports.getSvelte = (svg1x1, svg4x3) => {
  return `
    <script>
      export let size = 32;
      export let round = false;
      export let square = false;
    </script>

    {#if square}
    ${fixSvg(svg1x1)}
    {:else}
    ${fixSvg(svg4x3)}
    {/if}
  `
};