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
  <main>
    <div class="flex items-center space-x-4">
      <h1 class="scroll-m-20 text-3xl font-bold tracking-tight">{{ page.title }}</h1>
    </div>

    <Card class="max-w-7xl mx-auto">
      <CardContent>
        <!-- <pre>{{ page }}</pre> -->
        <ContentRenderer
          v-if="page"
          :value="page"
        />
      </CardContent>
    </Card>
  </main>
</template>
