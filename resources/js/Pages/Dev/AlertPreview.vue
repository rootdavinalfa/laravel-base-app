<template>
    <Card id="alert-example" class="flex flex-col">
        <CardHeader>
            <CardTitle>Alert</CardTitle>
        </CardHeader>
        <CardContent>
            <div class="flex flex-col gap-2">
                <div class="flex-row">
                    <Button @click="showAlert = !showAlert">Show Alert</Button>
                    <Alert v-if="showAlert">
                        <AlertTitle>Alert shown</AlertTitle>
                        <AlertDescription>
                            Lorem ipsum dolor amet.
                        </AlertDescription>
                    </Alert>
                </div>
                <div class="flex-row">
                    <AlertDialog>
                        <AlertDialogTrigger>
                            <Button>Show Alert Dialog</Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>

        </CardContent>
    </Card>
</template>
<script lang="ts" setup>

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/Components/ui/alert-dialog";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {Alert, AlertDescription, AlertTitle} from "@/Components/ui/alert";
import {Button} from "@/Components/ui/button";
import {ref} from "vue";



const showAlert = ref(false)

</script>
