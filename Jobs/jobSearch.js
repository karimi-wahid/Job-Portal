const categories = Array.from(jCategory);

document.getElementById('searchBar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => item.title.toLowerCase().includes(searchData)
    );
    displayItems(filterData);
})


const displayItems = (items) => {
    const root = document.getElementById('root');
    root.innerHTML = '';

    items.forEach((item) => {
        const {index, image, title,rate, av} = item;

        const jList = document.createElement('div')
        jList.className = 'jList';
        jList.innerHTML = `<img src="${image}" >
                    <h3>${title}</h3>
                    <p>${rate}</p>
                    <span id="key">${av}</span>`;

        
        root.appendChild(jList);

        jList.addEventListener('click', ()=> {
            window.location.href = `jobDetail.html?id=${index}`
        })
    })
} 


displayItems(categories);