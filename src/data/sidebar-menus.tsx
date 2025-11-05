import {
  SquareTerminal,
  Users,
  FileText,
  BarChart,
  Settings2,
  LifeBuoy,
  Send,
  Frame,
  PieChart,
  Map,
  HandCoins,
  ShoppingCart,
} from "lucide-react";

export const sidebarMenus = {
  user: {
    name: "James",
    email: "james@example.com",
    avatar: "/avatars/avatar.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/overview",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "/overview",
        },
        {
          title: "Activity Logs",
          url: "/activity-logs",
        },
      ],
    },
    {
      title: "Leads",
      url: "/leads",
      icon: HandCoins,
      items: [
        {
          title: "All Leads",
          url: "/leads",
        },
        {
          title: "Qualified Leads",
          url: "/leads/qualified",
        },
        {
          title: "Lead Scoring",
          url: "/leads/lead-scoring",
        },
      ],
    },
    {
      title: "Customers",
      url: "/customers",
      icon: Users,
      items: [
        {
          title: "All Customers",
          url: "/customers",
        },
        {
          title: "Segments",
          url: "/customers/segments",
        },
        {
          title: "Import/Export",
          url: "/customers/import-export",
        },
      ],
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ShoppingCart,
      items: [
        {
          title: "All Orders",
          url: "/orders",
        },
        {
          title: "Pending Orders",
          url: "/orders/pending",
        },
        {
          title: "Completed Orders",
          url: "/orders/completed",
        },
      ],
    },

    {
      title: "Invoices",
      url: "/invoices",
      icon: FileText,
      items: [
        {
          title: "All Invoices",
          url: "/invoices",
        },
        {
          title: "Pending",
          url: "/invoices/pending",
        },
        {
          title: "Paid",
          url: "/invoices/paid",
        },
      ],
    },
    {
      title: "Reports",
      url: "/reports/sales",
      icon: BarChart,
      items: [
        {
          title: "Sales Report",
          url: "/reports/sales",
        },
        {
          title: "Customer Insights",
          url: "/reports/customer-insights",
        },
        {
          title: "Revenue",
          url: "/reports/revenue",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings/general",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Users & Permissions",
          url: "/settings/users",
        },
        {
          title: "Integrations",
          url: "/settings/integrations",
        },
        {
          title: "API Settings",
          url: "/settings/api",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
  workspaces: [
    {
      name: "Customer Management",
      url: "/customers",
      icon: Frame,
    },
    {
      name: "Sales Performance",
      url: "/reports/sales",
      icon: PieChart,
    },
    {
      name: "Business Expansion",
      url: "/reports/sales",
      icon: Map,
    },
  ],
};
