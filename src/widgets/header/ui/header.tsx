import { useAppDispatch, useAppSelector } from '../../../app/store-provider/hooks';
import { dataSourceSlice } from '../../../entities/company/model/slices/slice-data-sourse';
import Checkbox from '../../../shared/ui/checkbox/checkbox';
import Button, { ThemeButton } from '../../../shared/ui/button/button';
import { toggleAddRow, toggleIsChecked } from './utils';
import './header.css';

export default function Header() {
  const { setSelectAllCheckbox, deleteAllSelectItems, setNewItem } =
    dataSourceSlice.actions;
  const dataSources = useAppSelector(state => state.dataSources.dataSources);
  const dispatch = useAppDispatch();

  function toggleSelectAllCheckbox() {
    dispatch(setSelectAllCheckbox());
  }

  return (
    <thead>
      <tr>
        <th colSpan={2}>
          <div className="wrapper-select-all">
            <span>Выделить все</span>
            <Checkbox
              onChange={toggleSelectAllCheckbox}
              checked={toggleIsChecked(dataSources)}
            />
          </div>
        </th>
        <th>
          <div className="wrapper-delete-all">
            <span>Удалить все</span>
            <Button
              className="button"
              onClick={() => dispatch(deleteAllSelectItems())}
              theme={ThemeButton.DELETE}
            >
              Удалить
            </Button>
          </div>
        </th>
        <th>
          <div className="wrapper-add-all">
            <span> Добавить</span>
            <Button
              className="button"
              disabled={toggleAddRow(dataSources)}
              onClick={() => dispatch(setNewItem())}
              theme={ThemeButton.ADD}
            >
              Добавить
            </Button>
          </div>
        </th>
      </tr>
    </thead>
  );
}
