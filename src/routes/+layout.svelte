<script lang="ts">
    import { lang } from '$lib/lang.js';

    export let data: { lang: string }

    $lang = data.lang
</script>

<slot></slot>