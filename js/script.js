const app = new Vue({
    el: '#root',
    data: {
        activeindex: 0,
        arrSlides: [{
                title: 'Svezia',
                img: '01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                title: 'Svizzera',
                img: '02.jpg',
                text: 'Lorem ipsum',
            },
            {
                title: 'Gran Bretagna',
                img: '03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Germania',
                img: '04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                title: 'Paradise',
                img: '05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ],
    }

    methods: {
        nextius() {
            if (this.activeindex == this.arrSlides.lengthen.length - 1) {
                this.activeindex = 0;
            } else {
                this.activeindex++;
            }
        },
        previus() {
            if (this.activeindex == 0) {
                this.activeindex = this.arrSlides - 1;
            } else {
                this.activeindex--;
            }
        }
    }
});