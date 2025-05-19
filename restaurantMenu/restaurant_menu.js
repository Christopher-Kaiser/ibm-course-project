const breakfastMenu = ['Pancakes - £8', 'Eggs Benedict - £9', 'Oatmeal - £6', 'Frittata - £15.99'];
const mainCourseMenu = ['Steak - £32', 'Pasta - £40', 'Burger - £20', 'Salmon - £32'];
const dessertMenu = ['Cake - £23.50', 'Ice Cream - £27.60', 'Pudding - £12', 'Fruit Salad - £24'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

