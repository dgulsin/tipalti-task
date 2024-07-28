import Heading from './components/heading';
import Table from './components/table';
import Text from './components/text';
import useGetExpenses from './hooks/use-get-items';

const headers = [
  { key: 'date', label: 'Date' },
  { key: 'merchant', label: 'Merchant' },
  { key: 'amount', label: 'Amount' },
  { key: 'category', label: 'Category' },
  { key: 'description', label: 'Description' },
  { key: 'status', label: 'Status' },
];

function App() {
  const { expenses, isLoading, error } = useGetExpenses();

  return (
    <main className='container'>
      <Heading>Expenses</Heading>
      <hr />
      {error && <Text>{error}</Text>}
      <Table headers={headers} list={expenses} isLoading={isLoading} />
    </main>
  );
}

export default App;
