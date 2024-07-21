import { useAppDispatch } from '../../../app/store-provider/hooks';
import { dataSourceSlice } from '../../../entities/company/model/slices/slice-data-sourse';
import Checkbox from '../checkbox/checkbox';
import { ThemeButton } from '../button/button';
import TableCell from '../table-cell/table-cell';
import Button from '../button/button';
import './table-body-row.css';


interface ItableBodyRowProps {
  id?: number | undefined;
  adress: string;
  isSelect: boolean;
  name: string;
}

export default function TableBodyRow(props: ItableBodyRowProps) {
  const { adress, isSelect, name, id } = props;
  const { setSelectCheckbox, deleteItemInDataSourse, changeField } =
    dataSourceSlice.actions;
  const dispatch = useAppDispatch();

  function handleTolggleCheckbox() {
    id && dispatch(setSelectCheckbox(id));
  }

  function deleteRow() {
    id && dispatch(deleteItemInDataSourse(id));
  }
  undefined;
  const handleChangeField = (fieldName: string, value: string) => {
    id && dispatch(changeField({ id: id, fieldName: fieldName, value: value }));
  };

  return (
    <tr className={isSelect ? 'select' : ''}>
      <td>
        <Checkbox checked={isSelect} onChange={handleTolggleCheckbox} />
      </td>
      <td>
        <TableCell
          value={name}
          onChange={e => handleChangeField('name', e.target.value)}
        />
      </td>
      <td>
        <TableCell
          value={adress}
          onChange={e => handleChangeField('adress', e.target.value)}
        />
      </td>
      <td>
        <Button className="button" onClick={deleteRow} theme={ThemeButton.DELETE}>
          Удалить
        </Button>
      </td>
    </tr>
  );
}
