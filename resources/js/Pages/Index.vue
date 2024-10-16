<template>
    <Head>
        <title>Welcome</title>/
    </Head>
    <div class="bg-black min-h-screen">
        <span class="text-2xl text-white">Welcome to {{ appName }} </span>
    </div>
</template>

<script lang="ts" setup>
import { Head } from '@inertiajs/vue3';

defineProps<{
    appName: string,
}>();

</script>
