import "../css/Sidebar.scss";

interface SidebarLinkItem {
  title: string;
  href: string;
}

interface SidebarProps {
  items: SidebarLinkItem[];
}

function Sidebar({ items }: SidebarProps) {
  return (
    <div className="list-group">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="list-group-item list-group-item-action"
        >
          {item.title}
        </a>
      ))}
    </div>
  );
}

export default Sidebar;
