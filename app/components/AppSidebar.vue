<script setup>
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
    Apple,
    Settings2,
    SquareTerminal,
  } from "lucide-vue-next";
  const appConfig = useAppConfig();
  const siteLogo = appConfig.header.logo.light;

  const props = withDefaults(defineProps(), {
    collapsible: "icon",
  });

  const { data: exerciseData } = await useAsyncData("navigation", () => {
    return queryCollectionNavigation("exercises");
  });

  // This is sample data.
  const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "",
    },
    teams: [
      {
        name: "FTA",
        logo: siteLogo,
        plan: "Enterprise",
      },
      {
        name: "Acme Corp.",
        logo: siteLogo,
        plan: "Startup",
      },
      {
        name: "Evil Corp.",
        logo: siteLogo,
        plan: "Free",
      },
    ],
    navMain: [
      {
        title: "Getting started",
        url: "#",
        icon: RocketIcon,
        isActive: true,
        items: [
          {
            title: "History",
            url: "#",
          },
          {
            title: "Starred",
            url: "#",
          },
          {
            title: "Settings",
            url: "#",
          },
        ],
      },
      {
        title: "Models",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Genesis",
            url: "#",
          },
          {
            title: "Explorer",
            url: "#",
          },
          {
            title: "Quantum",
            url: "#",
          },
        ],
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
        items: [
          {
            title: "Introduction",
            url: "#",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: Frame,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChart,
      },
      {
        name: "Travel",
        url: "#",
        icon: Map,
      },
    ],
  };
</script>

<template>
  <Sidebar v-bind="props">
    <SidebarHeader>
      <TeamSwitcher :teams="data.teams" />
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Courses</SidebarGroupLabel>
        <NavMain
          navTitle="Exercise"
          :icon="RocketIcon"
          :items="exerciseData"
        />
        <NavMain
          navTitle="Nutrition"
          :icon="Apple"
          :items="exerciseData"
        />
        <NavProjects :projects="data.projects" />
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <NavUser :user="data.user" />
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>
