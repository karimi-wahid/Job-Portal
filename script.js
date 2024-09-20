// Adding the functionality of menu bar

const bar = document.getElementById('bar');
const menu = document.getElementById('menu');

if(bar){
    bar.addEventListener('click', ()=>{
        menu.classList.toggle('active');
    })
}else{
    menu.classList('deActive')
}


// Adding the functionality for Jobs
const sortBtn = document.querySelectorAll( '.job-id > *');
const sortItems = document.querySelectorAll('.jobs-container > *');

sortBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        sortBtn.forEach((btn) => btn.classList.remove('active'));
        btn.classList.add('active');

        const targetData = btn.getAttribute('data-target');
       
        sortItems.forEach((item) => {
            item.classList.add('delete');
            if(item.getAttribute('data-item') === targetData || targetData === 'all'){
                item.classList.remove('delete');
            }
        });
    })
});



