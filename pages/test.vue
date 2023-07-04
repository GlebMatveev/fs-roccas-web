<script setup>
import { useCounterStore } from '@/store/counter';

const counterStore = useCounterStore();
</script>

<template>
    <div class="container">
        <div>{{ counterStore.count }}</div>
        <button @click="counterStore.increment()">counter increment</button>
        <div>{{ counterStore.doubleCount }}</div>
        <div>{{ counterStore.products }}</div>
        <button @click="counterStore.getProducts()">get products</button>
    </div>
</template>