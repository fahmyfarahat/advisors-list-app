
const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

function transformFilters(filterBy) {
  const transformedFilters = {};
  for (var key in filterBy) {
    const values = [];
    for (var value in filterBy[key]) {
      if (filterBy[key][value]) {
        values.push(value);
      }
    }
    if (values.length) {
      transformedFilters[key] = values;
    }
  }
  return transformedFilters;
}

export const getSorting = (order, orderBy) => {
  return order === "desc" ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
};

export const tableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
};

export const tableFilter = (rows, filterBy) => {
  const filters = transformFilters(filterBy);
  return rows.filter(ent =>
    Object.keys(filters).every(filterKey =>
      filters[filterKey].includes(ent[filterKey]),
  ));
};