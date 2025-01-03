import './index.scss';
import Sidebar from '../Sidebar'; // Import Sidebar component
import { BrowserRouter, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>&lt;Aditi&gt;</span>

        <Outlet />

        <span className='tags bottom-tags'>&lt;/Aditi&gt;

          <br />
          <span className='bottom-tag-html'>&lt;/Sunil&gt; </span>
        </span>

      </div>
    </div>
  );
};

export default Layout;