import { palette } from '@/config/color';
import * as Styled from './styles';

type IButtonProps = {
  label: string;
  link?: () => void;
  color?: string;
};

export const Button: React.FC<IButtonProps> = ({ label, link, color = palette.tertiary.dark }) => {
  return (
    <Styled.Button $color={color} onClick={link}>
      {label}
    </Styled.Button>
  );
};
