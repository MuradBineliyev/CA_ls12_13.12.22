const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

// Id-sine gore userin nə qədər postu var?
function countUserPost(id){
    instance.get("/posts")
    .then(res => {
        res = res.data;
        let respons = res.filter(x => x.userId == id).length;
        console.log(respons);
    })
}

//albümdə nə qədər fotoqraf var?
function countPhotosInAlibom(){
    instance.get("/photos")
    .then(res => {
        res = res.data;
        let respons = res.filter(x => x.albumId == 1).length;
        console.log(respons)
    })
}