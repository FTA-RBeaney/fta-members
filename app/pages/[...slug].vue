<script setup>
  const appConfig = useAppConfig();

  console.log(appConfig.ui);

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
      <Icon
        :name="appConfig.ui.icons.search"
        style="color: black"
        size="24px"
      />
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

  .rendered-content hr {
    margin: 1rem 0;
  }

  .rendered-content p {
    margin-bottom: 1rem;
  }

  .rendered-content h2 {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .rendered-content ul {
    list-style-type: disc;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }

  .rendered-content .alert p {
    margin-bottom: 0;
  }
</style>
