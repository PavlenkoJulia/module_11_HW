export const isEven = (n) => {
    const nStr = String(n);
    return Boolean( nStr.match(/-?\d*[24680]$/) );
  }
//   console.log(isEven(2));