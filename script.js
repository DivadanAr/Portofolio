data = [{
    'img1': 'assets/Landingpage.png',
    'img2': 'assets/register-page.png',
    'title': 'Web E-commerce',
    'subtitle': 'Zenit',
    'desc': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate repellendus commodi nam adipisci magni, optio eius possimus repudiandae facilis odit a inventore perspiciatis ex rem ab assumenda vel quae."
}, {
    'img1': 'assets/web-design.png',
    'img2': 'assets/web-design.png',
    'title': 'Web Design',
    'subtitle': 'The Galler',
    'desc': "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam cupiditate repellendus commodi nam adipisci magni, optio eius possimus repudiandae facilis odit a inventore perspiciatis ex rem ab assumenda vel quae."
},]

var container = document.querySelector('.container-project')

data.forEach(element => {
    container.innerHTML += `
    <div class="project">
            <div class="img-project">
                <img src="`+element.img1+`" alt="">
                <img src="`+element.img2+`" alt="">
            </div>
            <div class="desc-project">
                <h1>${element.title}</h1>
                <h2>${element.subtitle}</h2>
                <p>${element.desc}</p>
                <button class="read-more">
                    Read More
                </button>
            </div>
        </div>
    `
});

for (let index = 0; index < data.length; index++) {
    const element = data[index];
    
    container.innerHTML += `
    <div class="project">
            <div class="img-project">
                <img src="`+element.img1+`" alt="">
                <img src="`+element.img2+`" alt="">
            </div>
            <div class="desc-project">
                <h1>${element.title}</h1>
                <h2>${element.subtitle}</h2>
                <p>${element.desc}</p>
                <button class="read-more">
                    Read More
                </button>
            </div>
        </div>
    `

}