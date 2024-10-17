<template>
    <Head>
        <title>Welcome</title>/
    </Head>
    <div>
        <span class="text-2xl">Welcome to {{ appName }} </span>
    </div>
</template>

<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';

defineProps<{
    appName: string,
}>();

</script>
