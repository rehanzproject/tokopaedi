export const makeRupiahValue = (price) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumSignificantDigits: 1,
  }).format(price);

 export const transformToDateWithMonthName = (date) => {
    const dateParts = date.split(' ');
    if (dateParts.length === 3) {
      const day = dateParts[0];
      const monthNumber = parseInt(dateParts[1], 10);
      const year = dateParts[2];
      const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ];
      
      if (monthNumber >= 1 && monthNumber <= 12) {
        const monthName = months[monthNumber - 1];
        return `${day} ${monthName} ${year}`;
      } else {
        return 'Invalid Date';
      }
    } else {
      return 'Invalid Date Format';
    }
  };