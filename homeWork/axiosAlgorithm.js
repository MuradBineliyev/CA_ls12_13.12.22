
    
    const instance = axios.create({
        baseURL: 'https://northwind.vercel.app/api/',
    });

    // Axios ile bir adet customer ekle
    function addCustommerAxios(customer){
        instance.post("/customers",customer)
        .then(res => {
            console.log(res);
            return res;
        })
    }

    // Axios ile bir adet customer güncelle - PUT
    function updateCustomerAxios(id,data){
        instance.put(`/customers/${id}`,data)
        .then(res => {
            console.log(res)
            return res;
        })
    }

    // Axios ile bir customer silən,
    function deleteCustomerAxios(id){
        instance.delete(`/customers/${id}`)
        .then(res => {
            console.log(res)
            return res;
        });
    }

    // Ən bahalı məhsul 
    function exProduct(){
        instance.get("products")
        .then(res => {
            let data = res.data;
            let sort =  data.sort((a,b)=>{
                return b.unitPrice - a.unitPrice
            })

            console.log("Bahali urun",sort[0]);
        })
    }

    // Ortalama stok miqdarı
    function stockAVG(){
        instance.get("products")
        .then(res => {
            res = res.data;
            let avg = (res.map(x => x.unitsInStock).reduce((a,b) => a+b))/res.length
            console.log(avg.toFixed(2))
        })
    }

    // “C” ilə başlayan məhsullar 
    function filterStatC(){
        instance.get("/products")
        .then(res => {
            res = res.data;
            console.log(res.filter(x => x?.name?.startsWith("C")));
        })
    }

    // “London” şəhərindəki müştəriləri console a yaz 
    function getSupplier(){
        instance.get("/products")
        .then(res => {
            res = res.data;
            let filterData = res.filter(x => x.supplier?.address?.city == "London");
            console.log(filterData.map(x => x.supplier));
        })
    }

    // Region NULL olan nə qədər customer var?
    function getRegionNull(){
        instance.get("/customers")
        .then(res=>{
            res = res.data;
            let countIsNull = res.filter(x=> x.address?.region == "NULL").length
            console.log(countIsNull)
        })
    }