<script setup lang="ts">
import { toRef } from 'vue';

interface Props {
  color?: string;
  size?: string;
  thickness?: number;
  text?: string;
  showText?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: '3.5em',
  thickness: 5,
  text: 'Loading',
  showText: true,
});

const color = toRef(props, 'color');
const size = toRef(props, 'size');
const thickness = toRef(props, 'thickness');
const text = toRef(props, 'text');
const showText = toRef(props, 'showText');
</script>

<template>
  <div class="column items-center">
    <q-spinner :color="color" :size="size" :thickness="thickness" />
    <span class="q-mt-sm" v-if="showText">{{ text }}</span>
  </div>
</template>

<style lang="scss" scoped></style>
