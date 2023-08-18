// โค้ดฟังก์ชันเกี่ยวกับตะกร้าสินค้า และราคารวม
var itemCounts = [];

function addToCart(gameId) {
  if (!itemCounts[gameId]) {
    itemCounts[gameId] = 0;
  }
  itemCounts[gameId]++;
  updateItemCount(gameId);
  updateTotalPrice();
}

function removeFromCart(gameId) {
  if (itemCounts[gameId] && itemCounts[gameId] > 0) {
    itemCounts[gameId]--;
    updateItemCount(gameId);
    updateTotalPrice();
  }
}

function updateItemCount(gameId) {
  var itemCountElement = document.getElementById("item-count-game" + gameId);
  if (itemCountElement) {
    itemCountElement.innerText = itemCounts[gameId] || 0;
  }
}

var gamePrices = {
  1: 100,  // A
  2: 250,  // B
  3: 300,  //C
  4: 1000, //D
  // เพิ่มราคาเกมอื่น ๆ ตามลำดับ
};

function updateTotalPrice() {
  var total = 0;
  for (var gameId in itemCounts) {
    if (gamePrices[gameId]) {
      total += itemCounts[gameId] * gamePrices[gameId];
    }
  }
  var totalPriceElement = document.getElementById("total-price");
  if (totalPriceElement) {
    totalPriceElement.innerText = total;
  }
}
function updateTotalPrice() {
  var total = 0;
  for (var gameId in itemCounts) {
    if (gamePrices[gameId]) {
      total += itemCounts[gameId] * gamePrices[gameId];
    }
  }

  // หากราคารวมเกิน 1,000 ให้หักส่วนลด 10%
  if (total > 1000) {
    total = total - (total * 0.1);
  }

  var totalPriceElement = document.getElementById("total-price");
  if (totalPriceElement) {
    totalPriceElement.innerText = total.toFixed(2); // แสดงทศนิยม 2 ตำแหน่ง
  }
}
// สร้างอาร์เรย์เพื่อเก็บจำนวนสินค้าของแต่ละเกม
var itemCounts = [];

function addToCart(gameId) {
  if (!itemCounts[gameId]) {
    itemCounts[gameId] = 0;
  }
  itemCounts[gameId]++;
  updateItemCount(gameId);
  updateTotalPrice(); // เพิ่มเรียกฟังก์ชัน updateTotalPrice() เมื่อเพิ่มสินค้า
}

function removeFromCart(gameId) {
  if (itemCounts[gameId] && itemCounts[gameId] > 0) {
    itemCounts[gameId]--;
    updateItemCount(gameId);
    updateTotalPrice(); // เพิ่มเรียกฟังก์ชัน updateTotalPrice() เมื่อลบสินค้า
  }
}

function updateItemCount(gameId) {
  var itemCountElement = document.getElementById("item-count-game" + gameId);
  if (itemCountElement) {
    itemCountElement.innerText = itemCounts[gameId] || 0;
  }
}

var gamePrices = {
  1: 100,  // A
  2: 250,  // B
  3: 300,  //C
  4: 1000, //D
  // เพิ่มราคารูปอื่น ๆ ตามลำดับ
};

function updateTotalPrice() {
  var total = 0;
  for (var gameId in itemCounts) {
    if (gamePrices[gameId]) {
      total += itemCounts[gameId] * gamePrices[gameId];
    }
  }

  if (total > 1000) {
    total = total - (total * 0.1);
  }

  var totalPriceElement = document.getElementById("total-price");
  if (totalPriceElement) {
    totalPriceElement.innerText = total.toFixed(2);
  }
}

function confirmOrder() {
  var selectedItemsList = document.getElementById("selected-items-list");
  selectedItemsList.innerHTML = ""; // ล้างรายการที่เลือกทั้งหมด

  for (var gameId in itemCounts) {
    if (itemCounts[gameId] > 0) {
      var gameName = getGameNameById(gameId);
      var listItem = document.createElement("li");
      listItem.innerText = gameName + ": " + itemCounts[gameId] + " items";
      selectedItemsList.appendChild(listItem);
    }
  }

  updateTotalPrice(); // เพิ่มเรียกฟังก์ชัน updateTotalPrice() เมื่อแสดงรายการที่เลือก
}

function getGameNameById(gameId) {
  var gameNames = {
    1: "นังสือเรื่อง A",
    2: "นังสือเรื่อง B",
    3: "นังสือเรื่อง C",
    4: "นังสือเรื่อง D",
    // เพิ่มชื่อเกมอื่น ๆ ตามลำดับ
  };

  return gameNames[gameId] || "Unknown Game";
}


window.onload = function () {
  // ปุ่มนโยบายการสั่งซื้อ
  var policyButton = document.querySelector(".policy-button");
  
  // Modal นโยบายการสั่งซื้อ
  var orderPolicyModal = document.querySelector("#orderPolicyModal");
  
  // เมื่อคลิกที่ปุ่มนโยบายการสั่งซื้อ
  policyButton.addEventListener("click", function() {
    // เรียกใช้งาน Modal นโยบายการสั่งซื้อ
    $(orderPolicyModal).modal("show");
  });
};