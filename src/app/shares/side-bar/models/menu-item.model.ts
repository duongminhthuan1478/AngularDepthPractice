export interface MenuItem {
  label?: string;
  icon?: string;
  expanded?: boolean;
  routerLink: string;
  items?: MenuItem[];
}