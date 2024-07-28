import { useEffect, useState } from 'react';
import { getExpenses, Expense } from '../api/expenses';

const useGetExpenses = () => {
  const [expenses, setExpenses] = useState<Array<Expense>>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getExpenses()
      .then((data) => {
        setExpenses(data);
        setError(null);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { expenses, error, isLoading };
};

export default useGetExpenses;
