export interface Expense {
  id: number;
  merchant: string;
  amount: number;
  description: string;
  date: string;
  category: 'training' | 'travel' | 'meal';
  status: string;
}

export const getExpenses = async () => {
  try {
    const res = await fetch('https://expenses-backend-mu.vercel.app/expenses', {
      headers: {
        'Content-Type': 'application/json',
        Username: 'deniz.gulsin',
      },
    });

    const json = (await res.json()) as Array<Expense>;

    const formattedExpenses = json.map((expense) => ({
      ...expense,
      date: new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
      }).format(new Date(expense.date)),
    }));

    return formattedExpenses;
  } catch (e) {
    console.error(`Failed to fetch expenses: ${e}`);
    throw e;
  }
};
