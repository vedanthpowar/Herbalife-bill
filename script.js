// Predefined product details
const products = [
    {
        name: "Activated Fibre 90",
        volume: 15.75,
        mrp: 1709
      },
      {
        name: "Active fiber complex",
        volume: 22.95,
        mrp: 2672
      },
      {
        name: "Afresh Energy Drink",
        volume: 7.8,
        mrp: 848
      },
      {
        name: "Aloe Plus",
        volume: 9.4,
        mrp: 1106
      },
      {
        name: "Beta Heart Vanilla",
        volume: 19.55,
        mrp: 2342
      },
      {
        name: "Brain Health",
        volume: 15.1,
        mrp: 1529
      },
      {
        name: "Cell Activator60 Tab",
        volume: 21.95,
        mrp: 2313
      },
      {
        name: "Cell - U - Loss 90 Tablets",
        volume: 15.75,
        mrp: 1780
      },
      {
        name: "Dinoshake 200 g",
        volume: 9.6,
        mrp: 1164
      },
      {
        name: "Formula 1 Nutritional",
        volume: 21.75,
        mrp: 2276
      },
      {
        name: "H24 Rebuild Strength",
        volume: 24.7,
        mrp: 2731
      },
      {
        name: "Herbal Aloe concentr",
        volume: 24.95,
        mrp: 2815
      },
      {
        name: "Herbal Control",
        volume: 32.95,
        mrp: 3584
      },
      {
        name: "Herbalife Calcium Tab",
        volume: 10.25,
        mrp: 1256
      },
      {
        name: "Herbalife H24 Hydrate",
        volume: 14.05,
        mrp: 1709
      },
      {
        name: "IHerbalifeline® 60",
        volume: 25.75,
        mrp: 2,
        "": 785
      },
      {
        name: "HN - Skin Booster - 30",
        volume: 38.65,
        mrp: 4082
      },
      {
        name: "Immune Health",
        volume: 15.8,
        mrp: 1596
      },
      {
        name: "Joint Support",
        volume: 20.9,
        mrp: 2563
      },
      {
        name: "Male Factor +",
        volume: 34.75,
        mrp: 3559
      },
      {
        name: "Multivitamin",
        volume: 19.95,
        mrp: 2091
      },
      {
        name: "Niteworks .",
        volume: 75,
        mrp: 7442
      },
      {
        name: "Ocular Defense",
        volume: 19.25,
        mrp: 2012
      },
      {
        name: "Personaliz Protein200",
        volume: 11.5,
        mrp: 1352
      },
      {
        name: "Personaliz Protein400",
        volume: 22.5,
        mrp: 2594
      },
      {
        name: "ShakeMate",
        volume: 6.45,
        mrp: 681
      },
      {
        name: "Simply Probiotic",
        volume: 21.95,
        mrp: 2306
      },
      {
        name: "Triphala 60 Tablets",
        volume: 11.25,
        mrp: 1138
      },
      {
        name: "Woman's Choice",
        volume: 12.45,
        mrp: 1298
      }
];

// Populate the product dropdown with options
const productSelect = document.getElementById("productSelect");
for (let i = 0; i < products.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.text = products[i].name;
    productSelect.appendChild(option);
}

const addProductButton = document.getElementById("addProductButton");
const invoiceTable = document.getElementById("invoiceTable").getElementsByTagName('tbody')[0];
const quantityInput = document.getElementById("quantity");
const discountInput = document.getElementById("discount");
const totalMRPSpan = document.getElementById("totalMRP");
const totalDiscountedAmountSpan = document.getElementById("totalDiscountedAmount");
const totalVolumePointSpan = document.getElementById("totalVolumePoint");
const totalAmountSpan = document.getElementById("totalAmount");

// Variables to keep track of totals
let totalMRP = 0;
let totalDiscountedAmount = 0;
let totalVolumePoint = 0;

addProductButton.addEventListener("click", () => {
    const selectedProduct = productSelect.value;

    if (selectedProduct) {
        const selectedProductDetails = products[selectedProduct - 1];
        const quantity = parseInt(quantityInput.value);
        const discount = parseFloat(discountInput.value);

        if (!isNaN(quantity) && !isNaN(discount) && quantity > 0 && discount >= 0) {
            const row = invoiceTable.insertRow(invoiceTable.rows.length);

            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            const cell3 = row.insertCell(2);
            const cell4 = row.insertCell(3);
            const cell5 = row.insertCell(4);
            const cell6 = row.insertCell(5);

            cell1.innerHTML = selectedProductDetails.name;
            cell2.innerHTML = selectedProductDetails.volume;
            cell3.innerHTML = "₹" + selectedProductDetails.mrp;
            cell4.innerHTML = discount + "%";
            cell5.innerHTML = quantity;
            
            const discountedPrice = (selectedProductDetails.mrp * quantity * (1 - discount / 100)).toFixed(2);
            cell6.innerHTML = "₹" + discountedPrice;

            // Update the total calculations
            totalMRP += selectedProductDetails.mrp * quantity;
            totalDiscountedAmount += (selectedProductDetails.mrp * (1 - discount / 100)) * quantity;
            totalVolumePoint += selectedProductDetails.volume * quantity;

            // Update the total values in the HTML
            totalMRPSpan.textContent = totalMRP.toFixed(2);
            totalDiscountedAmountSpan.textContent = totalDiscountedAmount.toFixed(2);
            totalVolumePointSpan.textContent = totalVolumePoint;
            
                        // Calculate and display the total amount
                        const totalAmount = totalDiscountedAmount.toFixed(2);
                        totalAmountSpan.textContent = "₹" + totalAmount;
                    } else {
                        alert("Invalid input for quantity or discount.");
                    }
                } else {
                    alert("Please select a product.");
                }
            });
            
