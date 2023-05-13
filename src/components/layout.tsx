export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = (props: ILayoutProps) => <div>{props.children}</div>;

export default Layout;
