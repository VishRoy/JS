// Debouncing and Throttling

function debounce(fn, delay) {
    let timerRef;
    return function () {
      clearTimeout(timerRef);
      timerRef = setTimeout(() => {
        fn();
      }, delay);
    };
  }
  
  let count = 0;
  
  const delay = 5000;
  
  const inputRef = document.querySelector('input');
  
  const fn = function () {
    count++;
    console.log(inputRef.value, count);
  };
  
  const debounceFn = debounce(fn, delay);
  
  inputRef.addEventListener('input', () => debounceFn());
  
  function throttle(fn, delay) {
    let flag = true;
    return function () {
      if (flag) {
        flag = false;
        setTimeout(() => {
          fn();
          flag = true;
        }, delay);
      }
    };
  }
  
  const throttleFn = throttle(fn, delay);
  
  inputRef.addEventListener('input', () => throttleFn());
  