const DrawerMenu = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu xl:menu-horizontal bg-base-100">
        <li>
          <a>Solutions</a>
          <ul>
            <li>
              <a>Design</a>
            </li>
            <li>
              <a>Development</a>
            </li>
            <li>
              <a>Hosting</a>
            </li>
            <li>
              <a>Domain register</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Enterprise</a>
          <ul>
            <li>
              <a>CRM software</a>
            </li>
            <li>
              <a>Marketing management</a>
            </li>
            <li>
              <a>Security</a>
            </li>
            <li>
              <a>Consulting</a>
            </li>
          </ul>
        </li>
        <li>
          <a>Products</a>
          <ul>
            <li>
              <a>UI Kit</a>
            </li>
            <li>
              <a>Wordpress themes</a>
            </li>
            <li>
              <a>Wordpress plugins</a>
            </li>
            <li>
              <a>Open source</a>
              <ul>
                <li>
                  <a>Auth management system</a>
                </li>
                <li>
                  <a>VScode theme</a>
                </li>
                <li>
                  <a>Color picker app</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a>Company</a>
          <ul>
            <li>
              <a>About us</a>
            </li>
            <li>
              <a>Contact us</a>
            </li>
            <li>
              <a>Privacy policy</a>
            </li>
            <li>
              <a>Press kit</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="bg-base-100 pointer-events-none sticky bottom-0 flex h-40 [mask-image:linear-gradient(transparent,#000000)]"></div>
    </div>
  );
};

export default DrawerMenu;
