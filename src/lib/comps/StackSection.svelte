<script>
  import { lang } from "$lib/lang.js";

  const skills = {
    "BASE":        [ "HTML", "CSS", "JS", "NODEJS", "DESIGN"       ],
    "CSS":         [ "TAILWINDCSS", "BLICKCSS"                     ],
    "JS/NODEJS":   [ "SVELTE", "VUE", "TYPESCRIPT", "EXPRESS" ],
    "DESIGN":      [ "FIGMA", "PHOTOSHOP", "PREMIERE PRO"          ],
  };
</script>

<div class="wrapper py-40">
    <h4 class="mb-30 title">{
        $lang == "eng" ? `Мої навички` : `My Skills`
    }</h4>

    <div flex="30 wrap">
        {#each Object.entries(skills) as [key, value]}
            <div flex="15 col">
                <h5 text="16 400" translate="no">{key}</h5>

                <ul flex="10 wrap">
                    {#each value as item}
                        <li
                            class="b-1 bc-$brand r-5 p-10+30"
                            text="12 md:14"
                            translate="no"
                        >{item}</li>
                    {/each}
                </ul>
            </div>
        {/each}
    </div>
</div>

<style>
    li {
        list-style: none;
    }
</style>
