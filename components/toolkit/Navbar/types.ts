export interface MiniNavbarProps {
  showMenu: boolean
  setShowMenu(arg: boolean): void
}

export interface NavbarLink {
  label: string;
  href: string;
}

export interface NavbarProps {
  transparent?: boolean;
  variant?: 'primary' | 'secondary'
}

export interface NavbarItemProps {
  variant?: string
  link: NavbarLink
}