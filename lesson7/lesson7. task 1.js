/* TASK 1
 За допомогою методів об’єкта window створити:
1) нове вікно розміром 300х300 пікселів.
2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
4) із затримкою 2 сек закрийте вікно. */


// Не виходить. Показує наступну помилку: 
//VM398:2 Uncaught DOMException: Blocked a frame with origin "chrome-search://local-ntp" from accessing a cross-origin frame.
var openTab = window.open("https://softserve.academy/", "Softserve Academy", "width=300, height=300");

function resizeTab() {
	return openTab.resizeTo(500, 500); 
}
setTimeout(resizeTab, 2000);

function moveTab() {
	return openTab.moveTo(200, 200);
}
setTimeout(moveTab, 4000); 

function closeTab() {
return openTab.close();
}
setTimeout(closeTab, 6000);



