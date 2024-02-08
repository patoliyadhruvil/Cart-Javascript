let info = document.getElementById('info');

const diff= () =>{
    var total = 0;
    let api = JSON.parse(localStorage.getItem("product"));
    api.forEach(item => {
        total += item.price;
        info.innerHTML += `<div class="col-3">
        <div class="box shadow-lg p-3 mb-5 bg-body rounded border border-primary">
            <div class="imges">
                <img src="${item.thumbnail}" alt="..">
            </div>
            <div class="title py-2">
                <h2>${item.title}</h2>
            </div>
            <p class="text-success">${item.price}</p>
            <a href="#" class="btn btn-warning" onclick="return deleteD(${item.id})">Delete</a>
            <div>
        </div>
    </div>`

});
let svg = document.getElementById('totalprice');

svg.innerHTML = `<div class="col-3 fs-5">total</div>
<dic class="col-3"></div>
<div class="col-3 fs-5">${total}</div>`
        
}
diff();
const deleteD = (id) => {

    let cardelete = JSON.parse(localStorage.getItem("product"))
    let arr = [];
    cardelete.filter((del) => {

        if (del.id != id) {

            arr.push(del);
        }
    });

    localStorage.setItem('product', JSON.stringify(arr));
    info.innerHTML = ``;

    diff();
};