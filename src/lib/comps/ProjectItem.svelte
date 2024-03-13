<script>
    import { lang } from "$lib/lang.js";

    export let 
        image, 
        title, 
        description,
        link, 
        stack
</script>


<div class="b-1 bc-$brand p-30 r-10 h:scale-1.02 time-300" flex="20 col">

    <a href={link} target="_blank" flex="10 md:20 center start" class="w-fit r-10 pr-10 md:pr-20">
        <img class="sq-40 md:sq-60 r-5 md:r-10 fit-contain" src={image} alt={title} />

        <p translate="no" class="title" text="m-md:18 up">
            {title}
        </p>
    </a>

    <p text="14 md:16" class="h-full">{
        $lang == "eng" ? description.ukr : description.eng
    }</p>

    <div flex="10">
        <ul flex="10 wrap">
            <h5 text="16" class="mt-2">Stack:</h5>
            {#each stack as item}
                <li 
                    class="inblock b-1 bc-#cecece bg-#f2f2f2 p-5+15 r-5" 
                    text="10 md:12 up bold"
                    translate="no"
                >{item}</li>
            {/each}
        </ul>
    </div>
</div>

