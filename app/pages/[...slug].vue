<script setup>
  const route = useRoute();

  const { data: page } = await useAsyncData("page-" + route.path, () => {
    return queryCollection("content").path(route.path).first();
  });

  if (!page.value) {
    throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  }
</script>

<template>
  <main class="grid gap-4 max-w-5xl mx-auto content">
    <div class="flex items-center space-x-4">
      <h1 class="scroll-m-20 text-3xl font-bold tracking-tight">{{ page.title }}</h1>
    </div>

    <!-- <pre>{{ page }}</pre> -->
    <div class="rendered-content">
      <ContentRenderer
        v-if="page"
        :value="page"
      />
    </div>
  </main>
</template>

<style>
  .rendered-content h1 {
    display: none;
  }
  .rendered-content p {
    margin-bottom: 1rem;
  }

  .rendered-content .alert p {
    margin-bottom: 0;
  }
</style>
