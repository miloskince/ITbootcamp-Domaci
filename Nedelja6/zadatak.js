const username = document.querySelector('#username');
const password = document.querySelector('#password');
const button = document.querySelector('#button');


button.addEventListener('click',()=>{
    let txtUserName = username.value;
    let txtPassword = password.value;
    
    {if(txtUserName.length < 3){
        return alert('UserName must be larger 3!')};

    if(txtUserName.length > 15){
        return alert('UserName must be lower then 15!')};

    if(!isNaN(txtUserName[0])){
        return alert('UserName cannot start with number!')};
    
    if(txtPassword.length < 3){
        return alert('Password must be larger 3!')};

    if(txtPassword.length > 15){
        return alert('Password must be lower then 15!')};
    }

    fetch('./zadatak.json')
        .then(response => {
        return response.json()
    })
        .then(data => {
        data.forEach(element=>{
        if(element.userName == txtUserName && element.password == txtPassword){
            alert('UserName and Password are in base')}
        })
    })
        .catch(error => {
        console.log(error)
    })

    username.value = '';
    password.value = '';

})

//Napravili bi funkciju koja salje zahtev backend-u preko fetch i pristupa odredjenom api-u koji nam je potreban
//Imali bi headers i metod 'post' a u body-ju bi imali nas username i password. Ako funkcija ispunjava uslove 
//koji su zadati na backendu dobicemo responce u u vidu nekog data file. Sada kakav je taj data,
// zavisi kako je beckend isprogramiran. Npr. ukoliko se poklapaju username i password sa bazom 
//na backu dobicemo true i poruku username vec postoji u suprotnom
//Dobicemo false i poruku user ne potoji.