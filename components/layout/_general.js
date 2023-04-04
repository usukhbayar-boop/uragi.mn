
// import MobileNavigation from './mobile-navigation';

export default function GeneralLayout({
  children,
  layout,
}) {
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 transition-colors duration-150">
      {children}
      {/* <MobileNavigation /> */}
    </div>
  );
}

export const getGeneralLayout = (page) => (
  <GeneralLayout layout={page.props.layout}>
    {page}
    {/* <MobileNavigation /> */}
  </GeneralLayout>
);
