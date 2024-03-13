<script>
    import { page } from "$app/stores";
    import { lang } from "$lib/lang.js";
    import ProjectItem from "./ProjectItem.svelte";

    const projects = $page.data.projects
</script>

<div class="wrapper mt-50" flex="50 col center">

    <h4 class="title">{
        $lang === "eng" ? `Мої проекти` : `My projects`
    }</h4>

    <div class="w-full" grid="30 md:cols-2">
        {#each projects as item}
            <ProjectItem {...item} />
        {/each}
    </div>

    <p class="">
        {
            $lang === "eng" 
            ? `Це поки що всі проєкти, далі буде...` 
            : `That's all for now, more to come...`
        }
    </p>
</div>