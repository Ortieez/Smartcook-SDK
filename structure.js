let url = "https://www.smartcook-project.eu/api/structure";


fetch(url).then(res => res.json()).then(data => console.log(data));