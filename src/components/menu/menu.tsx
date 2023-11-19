import { Link } from 'react-router-dom';
import { MenuOption } from '../../types/menuOptions';
import './menu.scss';

type Props = {
  options: MenuOption[];
};
export function Menu({ options }: Props) {
  return (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
