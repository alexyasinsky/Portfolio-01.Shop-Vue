<template>
    <nav class="breadcrumb padding-site">
      <h1><slot name='title'></slot></h1>
      <p><slot></slot> / <slot name='parent'></slot> <span><slot name='title'></slot></span></p>
    </nav>
</template>

<script>
export default {};
</script>

<style></style>
