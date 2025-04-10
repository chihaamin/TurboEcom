import {
  Package,
  Users,
  Tag,
  TicketPercent,
  Warehouse,
  BarChart,
  Settings,
  ListOrdered,
  Award,
  UserPlus,
  Megaphone,
  Mail,
  Truck,
  ClipboardList,
  PieChart,
  LineChart,
  Wallet,
  Shield,
  Undo2,
  PackageSearch
} from "lucide-react";

const sidebarIconsProps = "h-4 w-4"

const sidebarItems = [

  {
    Menu: "Orders",
    SubMenu: [
      { name: "Order List", icon: <ListOrdered className={sidebarIconsProps} /> },
      { name: "Order Tracking", icon: <PackageSearch className={sidebarIconsProps} /> },
      { name: "Returns", icon: <Undo2 className={sidebarIconsProps} /> }
    ]
  },
  {
    Menu: "Catalog",
    SubMenu: [
      { name: "Products List", icon: <Package className={sidebarIconsProps} /> },
      { name: "Categories List", icon: <Tag className={sidebarIconsProps} /> },
      { name: "Brands List", icon: <Award className={sidebarIconsProps} /> },
      { name: "Attributes", icon: <ListOrdered className={sidebarIconsProps} /> }
    ]
  },
  {
    Menu: "Customers",
    SubMenu: [
      { name: "Customer List", icon: <Users className={sidebarIconsProps} /> },
      { name: "Customer Groups", icon: <UserPlus className={sidebarIconsProps} /> }
    ]
  },
  {
    Menu: "Marketing",
    SubMenu: [
      { name: "Coupons", icon: <TicketPercent className={sidebarIconsProps} /> },
      { name: "Promotions", icon: <Megaphone className={sidebarIconsProps} /> },
      { name: "Email Campaigns", icon: <Mail className={sidebarIconsProps} /> }
    ]
  },
  {
    Menu: "Inventory",
    SubMenu: [
      { name: "Stock Management", icon: <Warehouse className={sidebarIconsProps} /> },
      { name: "Suppliers", icon: <Truck className={sidebarIconsProps} /> },
      { name: "Inventory Logs", icon: <ClipboardList className={sidebarIconsProps} /> }
    ]
  },
  {
    Menu: "Analytics",
    SubMenu: [
      { name: "Sales Reports", icon: <BarChart className={sidebarIconsProps} /> },
      { name: "Customer", icon: <PieChart className={sidebarIconsProps} /> },
      { name: "Products", icon: <LineChart className={sidebarIconsProps} /> }
    ]
  },
  {
    Menu: "Settings",
    SubMenu: [
      { name: "General", icon: <Settings className={sidebarIconsProps} /> },
      { name: "Payments", icon: <Wallet className={sidebarIconsProps} /> },
      { name: "Shipping", icon: <Truck className={sidebarIconsProps} /> },
      { name: "Staff Permissions", icon: <Shield className={sidebarIconsProps} /> }
    ]
  }
];

export default sidebarItems;