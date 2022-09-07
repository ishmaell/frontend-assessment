/**
 * @param amount: string
 * @description formats amount to currency
 */
function formatAmount(amount: number): string {
  try {
    return new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: 'NGN',
      currencyDisplay: 'symbol',
    }).format(amount);
  } catch (error) {
    throw error;
  }
}

export { formatAmount };
