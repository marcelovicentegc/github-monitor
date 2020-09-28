export default function pagination(currentPage, totalPages) {
  const delta = 2;
  const left = currentPage - delta;
  const right = currentPage + delta + 1;
  const range = [];
  const rangeWithDots = [];
  let helper;

  for (let i = 1; i <= totalPages; i += 1) {
    if (i === 1 || i === totalPages || (i >= left && i < right)) {
      range.push(i);
    }
  }

  range.forEach(i => {
    if (helper) {
      if (i - helper === 2) {
        rangeWithDots.push(helper + 1);
      } else if (i - helper !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    helper = i;
  });

  return rangeWithDots;
}
