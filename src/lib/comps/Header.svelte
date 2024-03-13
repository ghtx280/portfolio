<script>
    import { lang } from "$lib/lang.js";


    async function switchLang() {
        $lang = $lang == "ukr" ? "eng" : "ukr"

        const promise = await fetch("/set-lang", {
            method: "POST",
            body: $lang
        })

        const data = await promise.text()

        console.log(data);
    }
</script>

<header class="m-md:bg-size-cover! bg-pos-x-right">
  <div class="wrapper p-75+20" flex="md:200 space top">


    <div flex="20 m-md:col-center">
      <img class="sq-100" src="./logo.svg" alt="Logo" />

      <div text="white" flex="col 10">
        <h1 text="28 bold m-md:center">
            { $lang == "eng" ? "Привіт! Мене звати Антон" : "Hello! My name is Anton"}
        </h1>

        <p text="16 md:18 m-md:center">
          {
            $lang == "eng" ? `
              Я фронтенд розробник з України. Вивчаю програмування з 2020 року.
              Швидко навчаюсь. Перфекціоніст, педант, мінімаліст. 
              Тут ви можете подивитися мої роботи оцінити мій досвід. Дякую)
            ` : `
              I'm a front-end developer from Ukraine. I have been studying programming since 2020.
              Fast learner. Perfectionist, pedant, minimalist.
              Here you can see my work and evaluate my experience. Thanks)
            `
          }
        </p>
      </div>
    </div>


    <button text="14 up " class="m-md:abs;top-30;right-30" on:click={switchLang}>
        { $lang }
    </button>


    
  </div>
</header>

<style>
    header {
        background-image: url(/header.png);
        background-size: 100%;
    }

    button {
      padding: 7px 15px;
      background: #fff;
      color: #000;
      border-radius: 9999px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
    }
</style>
