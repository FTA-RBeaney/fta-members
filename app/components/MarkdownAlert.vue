<template>
  <div
    data-slot="alert"
    class="alert relative w-auto rounded-lg px-4 py-3 text-sm inline-flex has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current text-card-foreground mb-4 bg-yellow-100"
    role="alert"
  >
    <slot />
  </div>
</template>
