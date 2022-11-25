import WindowContextProvider, {
  WindowContext,
} from '../GlobalContextController/WindowContext/WindowContext';
import useCustomContext from '../../hooks/useCustomContext';
import { useEffect } from 'react';

const windowLabels = {
  TEST: 'TEST',
};

const WindowController = (): JSX.Element => {
  const windowContext = useCustomContext(WindowContext);

  const createWindow = () => {};

  const removeWindow = (windowId: number) => {};

  useEffect(() => {}, []);
  return <></>;
};

export default WindowController;
