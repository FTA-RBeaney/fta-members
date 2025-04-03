<script setup lang="ts">
  import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
  import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
  } from "@/components/ui/sidebar";
  import { ChevronRight, type LucideIcon } from "lucide-vue-next";
  import {
    AudioWaveform,
    BookOpen,
    Bot,
    Command,
    Frame,
    GalleryVerticalEnd,
    Map,
    PieChart,
    RocketIcon,
    Settings2,
    SquareTerminal,
  } from "lucide-vue-next";

  defineProps<{
    navTitle: string;
    icon: LucideIcon;
    items: {
      title: string;
      url: string;
      icon?: LucideIcon;
      isActive?: boolean;
      items?: {
        title: string;
        url: string;
      }[];
    }[];
  }>();
</script>

<template>
  <SidebarMenu>
    <Collapsible
      v-for="item in items"
      :key="item.title"
      as-child
      :default-open="item.isActive"
      class="group collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger as-child>
          <SidebarMenuButton :tooltip="item.title">
            <component
              :is="icon"
              v-if="icon"
            />
            <!-- <RocketIcon /> -->
            <span> {{ navTitle }}</span>
            <ChevronRight class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            <SidebarMenuSubItem
              v-for="subItem in item.children"
              :key="subItem.title"
            >
              <SidebarMenuSubButton
                as-child
                :is-active="item.isActive"
              >
                <NuxtLink :to="subItem.path">
                  <span>{{ subItem.title }}</span>
                </NuxtLink>
              </SidebarMenuSubButton>
            </SidebarMenuSubItem>
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  </SidebarMenu>
</template>

<style scoped>
  .router-link-active {
    background: hsl(240 4.8% 95.9%);
    color: hsl(240 5.9% 10%);
  }
</style>
