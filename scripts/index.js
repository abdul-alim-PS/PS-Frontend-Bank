function toggleDashboard(){
    let userDataString = localStorage.getItem('userData');
    if(userDataString == null){
        window.location.href = 'signup-page.html';
    }
    else{
        window.location.href = 'dashboard.html';
    }
}