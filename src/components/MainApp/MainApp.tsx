import { useState } from 'react';
import StyledMainWindow from './MainApp.style';

const windowOptions = {
  center: true,
  width: 600,
  height: 600,
};

const MainApp = () => {
  const [windowId, setWindowId] = useState();
  console.log(windowId);

  const createWindow = () => {};

  const closeWindow = () => {};
  const minimizeWindow = () => {};
  const fullscreenWindow = () => {};

  return (
    <StyledMainWindow>
      <button onClick={() => createWindow()}>
        <p>Create Window</p>
      </button>
      <button onClick={() => closeWindow()}>
        <p>Close Window</p>
      </button>
      <button onClick={() => minimizeWindow()}>
        <p>Minimize Window</p>
      </button>
      <button onClick={() => fullscreenWindow()}>
        <p>Fullscreen Window</p>
      </button>
    </StyledMainWindow>
  );
};

export default MainApp;
