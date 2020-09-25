let myChart = document.getElementById("myChart").getContext("2d");

let p111 = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "AWS",
        data: [308, 279, 375, 339, 344, 169, 178, 185, 122, 267, 172, 320],
        backgroundColor: "#87ceeb",
      },
    ],
  },
  options: {},
};
let p112 = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "AZURE",
        data: [167, 204, 102, 213, 374, 194, 180, 210, 358, 382, 166, 179],
        backgroundColor: "#87ceeb",
      },
    ],
  },
  options: {},
};
let p121 = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Linux",
        data: [296, 209, 366, 383, 391, 241, 235, 323, 387, 193, 288, 224],
        backgroundColor: "#87ceeb",
      },
    ],
  },
  options: {},
};
let p122 = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Windows",
        data: [173, 104, 399, 227, 214, 246, 327, 334, 225, 153, 195, 290],
        backgroundColor: "#87ceeb",
      },
    ],
  },
  options: {},
};
let p211 = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "MongoDB",
        data: [260, 123, 146, 356, 200, 389, 297, 126, 183, 220, 157, 116],
        backgroundColor: "#87ceeb",
      },
    ],
  },
  options: {},
};
let p212 = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "MySQL",
        data: [350, 256, 101, 135, 275, 264, 286, 301, 293, 245, 322, 131],
        backgroundColor: "#87ceeb",
      },
    ],
  },
  options: {},
};
let p221 = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "React",
        data: [396, 114, 132, 195, 180, 171, 205, 292, 363, 291, 190, 140],
        backgroundColor: "#87ceeb",
      },
    ],
  },
  options: {},
};
let p222 = {
  type: "bar",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Angular",
        data: [278, 385, 392, 378, 361, 325, 377, 271, 275, 277, 370, 387],
        backgroundColor: "#87ceeb",
      },
    ],
  },
  options: {},
};
let salesChart = new Chart(myChart, p111);

function getCombo() {
  if (salesChart != null) {
    salesChart.destroy();
  }
  let category = document.getElementById("category").value;
  let product = document.getElementById("product").value;
  let brand = document.getElementById("brand").value;
  let chatData = "p" + (category + product + brand);
  // let chatData = "p112";
  if (chatData == "p111") {
    salesChart = new Chart(myChart, p111);
  } else if (chatData == "p112") {
    salesChart = new Chart(myChart, p112);
  } else if (chatData == "p121") {
    salesChart = new Chart(myChart, p121);
  } else if (chatData == "p122") {
    salesChart = new Chart(myChart, p122);
  } else if (chatData == "p211") {
    salesChart = new Chart(myChart, p211);
  } else if (chatData == "p212") {
    salesChart = new Chart(myChart, p212);
  } else if (chatData == "p221") {
    salesChart = new Chart(myChart, p221);
  } else if (chatData == "p222") {
    salesChart = new Chart(myChart, p222);
  }
}
