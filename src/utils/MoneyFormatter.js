


export const MoneyFormatter = (currencyType, price) => {
  console.log('formatter price: ', price, currencyType)

  const formatter = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
  
  });

  return formatter.format(price)
}
