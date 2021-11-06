<template>
    <div class="title">
        <h1 :style="{color:color}" class="title" >{{ title }}</h1>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    color: String
  }
}
</script>