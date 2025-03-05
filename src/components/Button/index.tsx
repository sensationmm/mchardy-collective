import { palette } from '@/config/color';
import * as Styled from './styles';

type IButtonProps = {
  label: string;
  link?: string;
  target?: string;
  color?: string;
};

export const Button: React.FC<IButtonProps> = ({ label, link, target, color = palette.tertiary.dark }) => {
  return (
    <Styled.Button $color={color} href={link} target={target}>
      {label}
    </Styled.Button>
  );
};
