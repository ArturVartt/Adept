import { useAppSelector } from '../../../app/store-provider/hooks';
import TableBodyRow from '../../../shared/ui/table-body-row/table-body-row';
import './body.css';

export default function Body() {
  const dataSources = useAppSelector(state => state.dataSources.dataSources);

  return (
    <tbody>
      <tr>
        <th>Чекбокс</th>
        <th>Название комапнии</th>
        <th>Aдрес</th>
        <th>Удалить</th>
      </tr>

      {dataSources.length ? (
        dataSources.map(data => (
          <TableBodyRow
            key={data.id}
            name={data.name}
            isSelect={data.isSelect}
            adress={data.adress}
            id={data.id}
          />
        ))
      ) : (
        <th colSpan={4} className="table-error">
          Таблица пустая!
        </th>
      )}
    </tbody>
  );
}
