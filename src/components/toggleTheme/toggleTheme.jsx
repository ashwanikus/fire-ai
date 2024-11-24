import React, { useEffect } from 'react';
import './index.css';
import { Switch } from 'antd';
import { MoonFilled, SunFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';

const ThemeToggleButton = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme); // Apply theme to document
    localStorage.setItem('theme', theme); // Save preference to localStorage
  },  [theme]);

  return (
    <Switch
      className="toggleTheme"
      style={{
        backgroundColor: theme === 'dark' ? '#000' : '',
        border: theme === 'dark' ? '1px solid #fff' : '',
      }}
      checked={theme === 'dark'}
      checkedChildren={<SunFilled />}
      unCheckedChildren={<MoonFilled />}
      onChange={() => dispatch(toggleTheme())}
    />
  );
};

export default ThemeToggleButton;
