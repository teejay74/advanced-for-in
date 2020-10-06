export default function orderByProps(obj, sortArr = []) {
  const curObj = { ...obj };
  const constObj = {};
  const sortArrResult = [];
  const restArr = [];

  for (const key in curObj) {
    if (curObj.hasOwnProperty.call(curObj, key)) {
      const foundConstObj = sortArr.find((item) => item === key);
      const i = sortArr.indexOf(foundConstObj);

      if (foundConstObj) {
        constObj.key = key;
        constObj.value = curObj[key];
        sortArrResult[i] = { ...constObj };
      } else {
        constObj.key = key;
        constObj.value = curObj[key];
        restArr.push({ ...constObj });
      }

      restArr.sort((a, b) => {
        if (a.key > b.key) {
          return 1;
        }
        return -1;
      });
    }
  }
  return [...sortArrResult, ...restArr];
}
