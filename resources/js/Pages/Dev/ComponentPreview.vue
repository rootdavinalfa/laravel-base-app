<template>
    <Head>
        <title>Component Preview</title>/
    </Head>
    <div class="container-fluid flex flex-col  mx-5 p-2 gap-2">
        <AccordionPreview/>
        <AlertPreview/>
        <DialogPreview/>
        <FormPreview/>
    </div>
</template>

<script lang="ts" setup>
import {Head} from '@inertiajs/vue3';

import AccordionPreview from "@/Pages/Dev/AccordionPreview.vue";
import AlertPreview from "@/Pages/Dev/AlertPreview.vue";
import DialogPreview from "@/Pages/Dev/DialogPreview.vue";
import FormPreview from "@/Pages/Dev/FormPreview.vue";



</script>
