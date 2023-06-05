import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import InventoryIcon from "@mui/icons-material/Inventory";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SettingsIcon from "@mui/icons-material/Settings";
// import LogoutIcon from "@mui/icons-material/Logout";

export const SidebarData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard",
  },
  {
    title: "Invoice",
    icon: <ReceiptIcon />,
    link: "/invoice",
   
  },
  {
    title: "Products",
    icon: <InventoryIcon />,
    link: null,
    children: [
      {
        title: "Products",
        icon: null,
        link: "/products",
      },
      {
        title: "Products Category",
        icon: null,
        link: "/product-category",
      },
    ],
  },
  {
    title: "Orders",
    icon: <ListAltIcon />,
    link: "/orders",
    
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
   
  },
  // {
  //   title: "Logout",
  //   icon: <LogoutIcon />,
  //   link: "/login",
  //   
  // },
];
