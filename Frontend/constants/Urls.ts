import {
    Settings2,
    Gauge,
    Headphones,
    Users,
    Building2,
    Filter,
    Receipt,
    File,
    FileAudio,
    DollarSign,
    WalletCards,
    CreditCard,
    ShoppingBasket,
    Tags,
    ChartArea
  } from "lucide-react";

export const sidebarLinks = [
    {
        label: "Home",
        imgUrl: "/icons/Home.svg",
        route: "/",
    },
    {
        label: "Upcoming ",
        imgUrl: "/icons/upcoming.svg",
        route: "/upcoming",
    },
    {
        label: "Previous",
        imgUrl: "/icons/previous.svg",
        route: "/previous",
    },
    {
        label: "Recordings",
        imgUrl: "/icons/recordings.svg",
        route: "/recordings",
    },
    {
        label: "Personal Room",
        imgUrl: "/icons/add-personal.svg",
        route: "/personal-room",
    },
    {
        label: "Home",
        imgUrl: "/icons/Home.svg",
        route: "/",
    },
    {
        label: "Upcoming ",
        imgUrl: "/icons/upcoming.svg",
        route: "/upcoming",
    },
    {
        label: "Previous",
        imgUrl: "/icons/previous.svg",
        route: "/previous",
    },
    {
        label: "Recordings",
        imgUrl: "/icons/recordings.svg",
        route: "/recordings",
    },
    {
        label: "Personal Room",
        imgUrl: "/icons/add-personal.svg",
        route: "/personal-room",
    },
];

export const user = {
    name: "User",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }

export const navMenu = [
      {
        title: "Dashboard",
        url: "/",
        icon: Gauge,
      },
      {
        title: "Customers",
        url: "/customers",
        icon: Headphones,
      },
      {
        title: "Peoples",
        url: "#",
        icon: Users,
      },
      {
        title: "Companies",
        url: "#",
        icon: Building2,
      },
      {
        title: "Leads",
        url: "#",
        icon: Filter,
      },
      {
        title: "Invoices",
        url: "#",
        icon: Receipt,
      },
      {
        title: "Quote For Leads",
        url: "#",
        icon: File,
      },
      {
        title: "Quote For Customers",
        url: "#",
        icon: FileAudio,
      },
      {
        title: "Payments",
        url: "#",
        icon: DollarSign,
      },
      {
        title: "Expenses",
        url: "#",
        icon: CreditCard,
      },
      {
        title: "Expenses Category",
        url: "#",
        icon: WalletCards,
      },
      {
        title: "Products",
        url: "#",
        icon: ShoppingBasket,
      },
      {
        title: "Products Category",
        url: "#",
        icon: Tags,
      },
      {
        title: "Report",
        url: "#",
        icon: ChartArea,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings2,
        items: [
          {
            title: "Admin",
            url: "/settings/admin",
          },
          {
            title: "Branch",
            url: "/settings/admin",
          },
          {
            title: "Settings",
            url: "/setting",
          },
          {
            title: "Public Form",
            url: "/settings/public-form",
          },
          {
            title: "Taxes",
            url: "/settings/taxes",
          },
          {
            title: "Currencies",
            url: "/settings/currencies",
          },
          {
            title: "Payments Mode",
            url: "/setting/payments-mode",
          },
          {
            title: "About",
            url: "/settings/about",
          }
        ],
      },
]