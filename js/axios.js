axios.get('https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&tagged=reactjs&site=stackoverflow')
.then((res) => {console.log(res.data.items)
    const allData = res.data.items;
    let catData = "";
    allData.map((value)=>{
    catData+= `
    <div class="col-md-3">
    <div class="full blog_cat">
    <a href="${value.link}" target="_blank">
    <h4 class="cat_box">${value.title}</h4>
    </a>
    </div>
    </div>`
})
document.getElementById("dataInfo").innerHTML=catData
}) 
.catch(err => console.log(err))

