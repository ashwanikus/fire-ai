import React, { useEffect, useState } from 'react';
import './index.css';
import { Switch } from 'antd';
import { MoonFilled, SunFilled } from '@ant-design/icons';

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState('light');

  const applyTheme = (theme) => {
    setTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save theme preference
  };

  const toggleTheme = (isChecked) => {
    const newTheme = isChecked ? 'dark' : 'light';
    applyTheme(newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
  }, []);

  return (
    <Switch
      style={{backgroundColor: theme === 'dark' ? '#000' : '', border: theme === 'dark' ? '1px solid #fff' : ''}}
      checked={theme === 'dark'}
      checkedChildren={<SunFilled />}
      unCheckedChildren={<MoonFilled />}
      onChange={toggleTheme}
    />
  );
};

export default ThemeToggleButton;
