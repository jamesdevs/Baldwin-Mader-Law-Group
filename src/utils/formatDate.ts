export function formatDate(inputDate: string) {
  const date = new Date(inputDate);

  const monthIndex = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  const formattedMonth = new Intl.DateTimeFormat("en", { month: "long" })
    .format(date)
    .toUpperCase();

  return `${formattedMonth} ${day}, ${year}`;
}
