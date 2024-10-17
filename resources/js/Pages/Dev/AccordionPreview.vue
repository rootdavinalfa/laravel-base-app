
<template>
    <Card id="accordion-example" class="flex flex-col">
        <CardHeader>
            <CardTitle>
                Accordion
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Accordion collapsible type="single">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Test</AccordionTrigger>
                    <AccordionContent>
                        Hello world.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </CardContent>
    </Card>
</template>
<script setup lang="ts">

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/Components/ui/accordion";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
</script>

