let randomize_array = document.getElementById("randomize_array_btn");
let sort_btn = document.getElementById("sort_btn");
let bars_container = document.getElementById("bars_container");
let select_algo = document.getElementById("algo");
let speed = document.getElementById("speed");
let slider = document.getElementById("slider");
let minRange = 1;
var maxRange = 1200;
var heightFactor = 0.4;
var numOfBars = 1200;
var speedFactor = 10; //100;
var maxRange = slider.value;
var numOfBars = slider.value;
var heightFactor = 4;
var unsorted_array = new Array(numOfBars);
var speedFactor = 100;

slider.addEventListener("input", function () {
  numOfBars = slider.value;
  maxRange = slider.value;
  //console.log(numOfBars);
  bars_container.innerHTML = "";
  createRandomArray();
  renderBars(unsorted_array);
});

speed.addEventListener("change", (e) => {
  speedFactor = parseInt(e.target.value);
});
document.addEventListener("DOMContentLoaded", function () {
});

function renderBars(array) {
  for (let i = 0; i < array.length; i++) {
  for (let i = 0; i < numOfBars; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = array[i] * heightFactor + "px";
 async function partition(items, left, right) {

async function quickSort(items, left, right) {
  var index;
  let bars = document.getElementsByClassName("bar");
  if (items.length > 1) {
    index = await partition(items, left, right); //index returned from partition
    if (left < index - 1) {
 async function quickSort(items, left, right) {
      await quickSort(items, index, right);
    }
  }

  for (let i = 0; i < bars.length; i++) {
    bars[i].style.backgroundColor = "aqua";
  }
  return items;
}

async function quickSort(items, left, right) {
//   console.log(sorted_array);
// });

//write insertion sort function
async function InsertionSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
      bars[j + 1].style.backgroundColor = "red";
      //bars[j + 1].innerText = array[j + 1];
      await sleep(speedFactor);

      for (let k = 0; k < bars.length; k++) {
        if (k != j + 1) {
          bars[k].style.backgroundColor = "aqua";
        }
      }
      j = j - 1;
    }
    array[j + 1] = key;
    bars[j + 1].style.height = array[j + 1] * heightFactor + "px";
    bars[j + 1].style.backgroundColor = "lightgreen";
    //bars[j + 1].innerText = array[j + 1];
    await sleep(speedFactor);
  }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }
  return array;
}

//write heap sort function

async function HeapSort(array) {
  let bars = document.getElementsByClassName("bar");
  for (let i = Math.floor(array.length / 2); i >= 0; i--) {
    await heapify(array, array.length, i);
  }
  for (let i = array.length - 1; i >= 0; i--) {
    await swap(array, 0, i, bars);
    await heapify(array, i, 0);
  }
  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
    await sleep(speedFactor);
  }
  return array;
}

async function heapify(array, n, i) {
  let bars = document.getElementsByClassName("bar");
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }
  if (largest != i) {
    await swap(array, i, largest, bars);
    await heapify(array, n, largest);
  }
}

async function swap(array, i, j, bars) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  bars[i].style.height = array[i] * heightFactor + "px";
  bars[j].style.height = array[j] * heightFactor + "px";
  bars[i].style.backgroundColor = "red";
  bars[j].style.backgroundColor = "red";
  await sleep(speedFactor);

  for (let k = 0; k < bars.length; k++) {
    if (k != i && k != j) {
      bars[k].style.backgroundColor = "aqua";
    }
  }
  //bars[i].innerText = array[i];
  //bars[j].innerText = array[j];
  return array;
}

//write mergeSort function
async function mergeSort(arr) {
  let bars = document.getElementsByClassName("bar");
  if (arr.length < 2) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  let actualHalf = await mergeSort(left);
  await mergeSort(right);

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr[k] = left[i];
      i++;
      // bars[k].style.height = arr[k] * heightFactor + "px";
      // bars[k].style.backgroundColor = "lightgreen";
      // bars[k].innerText = arr[k];
      //await sleep(speedFactor);
    } else {
      arr[k] = right[j];
      j++;
      // bars[k + middle].style.height = arr[k] * heightFactor + "px";
      // bars[k + middle].style.backgroundColor = "yellow";
      // bars[k].innerText = arr[k];
      //await sleep(speedFactor);
    }
    //shift to right side
    //console.log(k);
    //bars[k].style.height = arr[k] * heightFactor + "px";
    //bars[k].style.backgroundColor = "lightgreen";

    // bars[k + middle].style.height = arr[k] * heightFactor + "px";
    // bars[k + middle].style.backgroundColor = "yellow";

    //visualize it for right and left side
    bars[k].style.height = arr[k] * heightFactor + "px";
    bars[k].style.backgroundColor = "lightgreen";
    if (k + arr.length < bars.length) {
      bars[k + arr.length].style.height = arr[k] * heightFactor + "px";
      console.log(arr[k] * heightFactor);
      bars[k + arr.length].style.backgroundColor = "yellow";
    }
    await sleep(speedFactor);
    //bars[k].innerText = arr[k];

    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    bars[k].style.height = arr[k] * heightFactor + "px";
    bars[k].style.backgroundColor = "lightgreen";
    await sleep(speedFactor);
    i++;
    k++;
  }

  while (j < right.length) {
    arr[k] = right[j];
    bars[k].style.height = arr[k] * heightFactor + "px";
    bars[k].style.backgroundColor = "lightgreen";
    await sleep(speedFactor);
    j++;
    k++;
  }

  // for (let i = 0; i < arr.length; i++) {
  //   bars[i].style.height = arr[i] * heightFactor + "px";
  //   bars[i].style.backgroundColor = "lightgreen";
  //   await sleep(speedFactor);
  // }

  for (let k = 0; k < bars.length; k++) {
    bars[k].style.backgroundColor = "aqua";
  }

  return arr;
}

function mergeSortD(arr, start, end) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor((start + end) / 2);
  let left = arr.slice(start, middle);
  let right = arr.slice(middle, end);

  //mergeSort(left);
  mergeSort(right);
}

let c= sort_btn.addEventListener("click", ()=> {
  switch (algotouse) {
    case "bubble":
      bubbleSort(unsorted_array);
      break;
    case "merge":
      console.log(mergeSort(unsorted_array));
      if (
        confirm(
          "Merge Sort is not visualized properly. Do you want to continue?"
        )
      ) {
        mergeSort(unsorted_array);
      } else {
        break;
      }
      //console.log(mergeSort(unsorted_array));
      break;
    case "heap":
      HeapSort(unsorted_array);
      break;
    case "insertion":
      InsertionSort(unsorted_array);
      break;
    case "quick":
      quickSort(unsorted_array, 0, unsorted_array.length - 1);
      break;
    default:
      // bubbleSort(unsorted_array);
      quickSort(unsorted_array, 0, unsorted_array.length - 1);
      bubbleSort(unsorted_array);
      break;
  }
})
