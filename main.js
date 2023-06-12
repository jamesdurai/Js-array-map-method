const nums = [5, 10, 15, 20];

const result = nums.map((num, index) => {
  if (index >= 2) {
    return num + nums[index - 1];
  }
  return undefined;
});

document.write(JSON.stringify(result));
