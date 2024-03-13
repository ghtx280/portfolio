<script>
    import { lang } from "$lib/lang.js";

    const content = [
        { icon: "/in/tg.svg", link: "https://t.me/eeqq25" },
        { icon: "/in/gh.svg", link: "https://github.com/ghtx280" },
        { icon: "/in/tt.svg", link: "https://tiktok.com/@ghtx280" },
        { icon: "/in/li.svg", link: "https://linkedin.com/in/anton-korshevniuk-1611472ba/" },
        { icon: "/in/ig.svg", link: "https://instagram.com/antoshka.02/" },
    ]
</script>



<div class="wrapper py-100" flex="30 col center">
    <h4 class="title">{ $lang == "eng" ? "Я в..." : "I'm in..." }</h4>

    <div flex="center wrap">
        {#each content as { icon, link }}
            <a href={link} target="_blank" class="r-10 p-10 h:translate-0+-10 time-300">
                <img class="bg-$brand/15 sq-50 p-5 r-10" src={icon} alt="-">
            </a>
        {/each}
    </div>
</div>