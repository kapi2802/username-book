/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
var addBtn = document.querySelector(".add-employee-btn");
addBtn.addEventListener("click", function () {
    "use strict";
    var li = document.createElement('li');
    var input = document.getElementById('full-name');
    var list = document.getElementById("full-list");
    li.innerHTML = input.value;
    list.appendChild(li);
})();