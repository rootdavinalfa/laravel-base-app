<template>
    <Card id="dialog-example">
        <CardHeader>
            <CardTitle>Dialog</CardTitle>
        </CardHeader>
        <CardContent>
            <Dialog>
                <DialogTrigger as-child>
                    <Button>
                        Edit Profile
                    </Button>
                </DialogTrigger>
                <DialogContent class="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div class="grid gap-4 py-4">
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label class="text-right" for="name">
                                Name
                            </Label>
                            <Input id="name" class="col-span-3" value="Pedro Duarte"/>
                        </div>
                        <div class="grid grid-cols-4 items-center gap-4">
                            <Label class="text-right" for="username">
                                Username
                            </Label>
                            <Input id="username" class="col-span-3" value="@peduarte"/>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </CardContent>
    </Card>
</template>
<script lang="ts" setup>

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/Components/ui/dialog";
import {Label} from "@/Components/ui/label";
import {Card, CardContent, CardHeader, CardTitle} from "@/Components/ui/card";
import {Input} from "@/Components/ui/input";
import {Button} from "@/Components/ui/button";
</script>
