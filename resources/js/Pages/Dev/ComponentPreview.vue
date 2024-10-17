<template>
    <Head>
        <title>Component Preview</title>/
    </Head>
    <div class="container-fluid flex flex-col  mx-5 p-2 gap-2">
        <Dropdown>
            <DropdownMenuTrigger as-child>
                <Button variant="outline">
                    <Icon icon="radix-icons:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Icon icon="radix-icons:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span class="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem @click="mode = 'light'">
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'dark'">
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem @click="mode = 'auto'">
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </Dropdown>
        <AccordionPreview/>
        <AlertPreview/>
        <DialogPreview/>
        <FormPreview/>
    </div>
</template>

<script lang="ts" setup>
import {Head} from '@inertiajs/vue3';
import { useColorMode } from '@vueuse/core'

import AccordionPreview from "@/Pages/Dev/AccordionPreview.vue";
import AlertPreview from "@/Pages/Dev/AlertPreview.vue";
import DialogPreview from "@/Pages/Dev/DialogPreview.vue";
import FormPreview from "@/Pages/Dev/FormPreview.vue";
import Dropdown from "@/Components/Dropdown.vue";
import {Icon} from "@iconify/vue";
import {Button} from "@/Components/ui/button";

const mode = useColorMode()


</script>
