<template>
    <main>
        <ScrollArea class="min-h-screen">
            <Toaster/>
            <slot/>
        </ScrollArea>
    </main>

</template>
<script lang="ts" setup>

import {Toaster} from "@/Components/ui/toast";
import {ScrollArea} from "@/Components/ui/scroll-area";
</script>
