import Text from './text';

interface Heading {
  key: string;
  label: string;
}

interface TableProps {
  headers: Array<Heading>;
  list: Array<Record<string, string | number>>;
  isLoading: boolean;
}

const Table = ({ headers, list, isLoading }: TableProps) => {
  return (
    <div className='table-overflow'>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.key}>
                <Text>{header.label}</Text>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>
                <Text>Please wait...</Text>
              </td>
            </tr>
          ) : list.length ? (
            list.map((listItem) => {
              return (
                <tr key={`table-row_${listItem.id}`}>
                  {headers.map((header) => (
                    <td
                      key={`table-cell_row-${listItem.id}_column-${header.key}`}
                    >
                      <Text>{listItem[header.key]}</Text>
                    </td>
                  ))}
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                <Text>No items in the list</Text>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
