import './checkbox.css';

interface ICheckboxProps {
  checked?: boolean;
  onChange?: () => void;
}

export default function Checkbox({ checked, onChange }: ICheckboxProps) {
  return (
    <input className="checkbox" checked={checked} onChange={onChange} type="checkbox" />
  );
}
