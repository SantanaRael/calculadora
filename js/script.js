let visor = document.getElementById("visor");

document
	.querySelector(".parent div:nth-child(1)")
	.addEventListener("click", function () {
		visor.value = "";
	});

document
	.querySelector(".parent div:nth-child(2)")
	.addEventListener("click", function () {
		visor.value = visor.value + "%";
	});

document
	.querySelector(".parent div:nth-child(3)")
	.addEventListener("click", function () {
		visor.value = visor.value + "%";
	});

document
	.querySelector(".parent div:nth-child(4)")
	.addEventListener("click", function () {
		visor.value = visor.value + "/";
	});

document
	.querySelector(".parent div:nth-child(5)")
	.addEventListener("click", function () {
		visor.value = visor.value + "7";
	});

document
	.querySelector(".parent div:nth-child(6)")
	.addEventListener("click", function () {
		visor.value = visor.value + "8";
	});

document
	.querySelector(".parent div:nth-child(7)")
	.addEventListener("click", function () {
		visor.value = visor.value + "9";
	});

document
	.querySelector(".parent div:nth-child(8)")
	.addEventListener("click", function () {
		visor.value = visor.value + "*";
	});

document
	.querySelector(".parent div:nth-child(9)")
	.addEventListener("click", function () {
		visor.value = visor.value + "4";
	});

document
	.querySelector(".parent div:nth-child(10)")
	.addEventListener("click", function () {
		visor.value = visor.value + "5";
	});

document
	.querySelector(".parent div:nth-child(11)")
	.addEventListener("click", function () {
		visor.value = visor.value + "6";
	});

document
	.querySelector(".parent div:nth-child(12)")
	.addEventListener("click", function () {
		visor.value = visor.value + "-";
	});

document
	.querySelector(".parent div:nth-child(13)")
	.addEventListener("click", function () {
		visor.value = visor.value + "1";
	});

document
	.querySelector(".parent div:nth-child(14)")
	.addEventListener("click", function () {
		visor.value = visor.value + "2";
	});

document
	.querySelector(".parent div:nth-child(15)")
	.addEventListener("click", function () {
		visor.value = visor.value + "3";
	});

document
	.querySelector(".parent div:nth-child(16)")
	.addEventListener("click", function () {
		visor.value = visor.value + "+";
	});

document
	.querySelector(".parent div:nth-child(17)")
	.addEventListener("click", function () {
		visor.value = visor.value.substring(0, visor.value.length - 1);
	});

document
	.querySelector(".parent div:nth-child(18)")
	.addEventListener("click", function () {
		visor.value = visor.value + "0";
	});

document
	.querySelector(".parent div:nth-child(19)")
	.addEventListener("click", function () {
		visor.value = visor.value + ",";
	});

document
	.querySelector(".parent div:nth-child(20)")
	.addEventListener("click", function () {
		visor.value = eval(visor.value);
	});
