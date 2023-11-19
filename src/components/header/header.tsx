import './header.scss';

type Props = {
  children: JSX.Element;
};

export function Header({ children }: Props) {
  return (
    <header>
      <div>
        <h1>THE ALCHEMIST</h1>
        {children}
      </div>
      <p>
        <img src="../walter_white.png" alt="" />
      </p>
    </header>
  );
}
