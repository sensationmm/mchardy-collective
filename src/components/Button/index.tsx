import * as Styled from './styles';

type IButtonProps = {
  label: string;
  link?: () => void;
  color?: string;
};

export const Button: React.FC<IButtonProps> = ({ label, link, color = '#000' }) => {
  return (
    <Styled.Button $color={color} onClick={link}>
      {label}
    </Styled.Button>
  );
};
