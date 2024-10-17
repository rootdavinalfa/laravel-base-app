<template>
    <Card id="form-example">
        <CardHeader>
            <CardTitle>Form</CardTitle>
        </CardHeader>
        <CardContent>
            <form class=" flex flex-col gap-4" @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="username">
                    <FormItem v-auto-animate>
                        <FormLabel>Textfield</FormLabel>
                        <FormControl>
                            <Input placeholder="textfield" type="text" v-bind="componentField"/>
                        </FormControl>
                        <FormDescription>
                            This is textfield.
                        </FormDescription>
                        <FormMessage/>
                    </FormItem>
                </FormField>
                <FormField v-slot="{componentField}" name="radio">
                    <FormItem v-auto-animate>
                        <FormControl>
                            <RadioGroup default-value="option-one" v-bind="componentField">
                                <div class="flex items-center space-x-2">
                                    <RadioGroupItem id="option-one" value="option-one"/>
                                    <Label for="option-one">Option One</Label>
                                </div>
                                <div class="flex items-center space-x-2">
                                    <RadioGroupItem id="option-two" value="option-two"/>
                                    <Label for="option-two">Option Two</Label>
                                </div>
                            </RadioGroup>
                        </FormControl>
                    </FormItem>
                </FormField>
                <FormField v-slot="{componentField}" name="number">
                    <FormItem v-auto-animate>
                        <FormControl>
                            <NumberField v-bind="componentField">
                                <FormLabel>Age</FormLabel>
                                <NumberFieldContent>
                                    <NumberFieldDecrement/>
                                    <NumberFieldInput/>
                                    <NumberFieldIncrement/>
                                </NumberFieldContent>
                            </NumberField>
                        </FormControl>
                    </FormItem>
                </FormField>
                <div class="flex flex-row gap-2">
                    <FormField v-slot="{componentField}" name="rangedDate">
                        <FormItem v-auto-animate>
                            <FormControl>
                                <RangeCalendar class="rounded-md border w-fit" v-bind="componentField"/>
                            </FormControl>
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{componentField}" name="date">
                        <FormItem v-auto-animate>
                            <FormControl>
                                <Calendar class="rounded-md border w-fit" v-bind="componentField"/>
                            </FormControl>
                        </FormItem>
                    </FormField>
                </div>

                <Button type="submit">
                    Submit
                </Button>
            </form>
        </CardContent>
    </Card>
</template>
<script lang="ts" setup>

import {
    NumberField,
    NumberFieldContent,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput
} from "@/Components/ui/number-field";
import {FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/Components/ui/form";
import {Label} from "@/Components/ui/label";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {Input} from "@/Components/ui/input";
import {RadioGroup, RadioGroupItem} from "@/Components/ui/radio-group";
import {Button} from "@/Components/ui/button";
import {useForm} from "vee-validate";
import {toast} from "@/Components/ui/toast";
import {RangeCalendar} from "@/Components/ui/range-calendar";
import {Calendar} from "@/Components/ui/calendar";


const {handleSubmit} = useForm({})

const onSubmit = handleSubmit((values) => {
    console.log(JSON.stringify(values))
    toast({
        title: 'You submitted the following values:',
        description: `Submitted with value ${JSON.stringify(values)}`
    })
})
</script>
