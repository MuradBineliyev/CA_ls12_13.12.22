function addCustommerFetch(customer){
    fetch("https://northwind.vercel.app/api/customers",{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(customer)
    })
    .then(res => res.json())
    .then(r => {
        console.log(r);
        return r
    })
}

// Axios ile bir adet customer güncelle - PUT

function updateCustomerFetch(id,data){
    fetch(`https://northwind.vercel.app/api/customers/${id}`,{
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(r => {
        console.log(r);
        return r;
    })

}

function deleteCustomerFetch(id){

    fetch(`https://northwind.vercel.app/api/customers/${id}`,{
        method: "DELETE"
    }).then(res => res.json())
    .then(r => {
        console.log(r);
        return r;
    })

}
