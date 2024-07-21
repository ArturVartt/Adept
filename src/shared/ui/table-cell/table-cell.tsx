import { ChangeEvent } from 'react';
import './table-cell.css';

interface TableCell {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TableCell({ value, onChange }: TableCell) {
  return <input className="table-cell" value={value} onChange={onChange} type="text" />;
}
