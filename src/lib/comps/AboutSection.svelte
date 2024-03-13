<script>
    import { lang } from "$lib/lang.js";

    const content = {
        eng: {
            "Навчання": 
                `Як і більшість, я навчився всьому самотужки. У 2020 році я почав з написання простих сайтів. Потім взявся за фреймворки (люблю Svelte). Зараз можу писати різні проєкти будь-якої складності.`,
            
            "Досвід роботи": 
                `Я провів багато часу на фрілансі, виконуючи завдання різної складності, від простих, як редагування стилів, до складних, як створення сайту під ключ. Зараз я шукаю віддалену роботу на повний робочий день.`
        },
        ukr: {
            "Education": 
                `Like most, I learned everything on my own. In 2020, I started by writing simple websites. Then I took up frameworks (I love Svelte). Now I can write various projects of any complexity.`,
            
            "Work experience": 
                `I spent a lot of time freelancing, performing tasks of varying complexity, simple as editing styles and complex as a turnkey website. Now I'm looking for a remote full-time job.`
        }
    }
</script>

<div class="wrapper mt-50" grid="50 md:cols-2">

    {#each Object.entries(content[$lang]) as [title, description]}
        <div flex="30 col">
            <h4 class="title">{title}</h4>
            <p class="md:max-w-90%">{description}</p>
        </div>
    {/each}

</div>