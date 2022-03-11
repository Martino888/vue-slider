const app = new Vue({
    el: '#root',
    data: {
        timers: null,
        activeIndex: 0,
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
            }
        ]
    },

    methods: {
        nextius(){
            if (this.activeIndex == this.arrSlides.length - 1) {
                this.activeIndex = 0;
            } else {
                this.activeIndex++;
            }
        },
        previus(){
            if (this.activeIndex == 0) {
                this.activeIndex = this.arrSlides.length - 1;
            } else {
                this.activeIndex--;
            }
        },
        startAnimation(){
            this.timers = setInterval(this.nextius, 4000);
        },
        stopAnimation(){
            clearInterval(this.timers);
        }
    },
    created(){
        this.startAnimation();
    }

});