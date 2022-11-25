interface ITitlebar {
  children: any;
}

const Titlebar = ({ children }: ITitlebar): JSX.Element => {
  return <>{children}</>;
};

export default Titlebar;
