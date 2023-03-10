class DB {
    constructor(url) {
        this.url = url;
        this.db = {
            "user": [
                'STORAGE', 'CLOSET', 'Adelaide', 'Andrew', 'Annie', 'Anton', 'BJ', 'Brian', 'Christine',
                'Duc-Anh', 'Emily', 'Helen', 'Hien', 'Hoang', 'Julia', 'Katrina', 'Kayla', 'Kenny', 'Kent',
                'Lauren', 'Lee', 'Nhi', 'Nick P.', 'Nick T.', 'Phuong', 'Sophia', 'Star', 'Thao', 'Timmy',
                'Tonhu', 'Trang', 'Vanessa', 'Vi', 'Vivian'
            ], // end of user
            "item": [
                {"id":0,"catagory":"Audiovisual","mfr":"Unknown","item":"Big Speaker","descr":"Bon Mang","consumable":false,"quantity":1},
                {"id":1,"catagory":"Audiovisual","mfr":"Unknown","item":"Big Speaker","descr":"Bon Mang","consumable":false,"quantity":1},
                {"id":2,"catagory":"Audiovisual","mfr":"Unknown","item":"Big Stand","descr":"Bon Mang","consumable":false,"quantity":1},
                {"id":3,"catagory":"Audiovisual","mfr":"Unknown","item":"Big Stand","descr":"Bon Mang","consumable":false,"quantity":1},
                {"id":4,"catagory":"Audiovisual","mfr":"Unknown","item":"Mixer","descr":"Bon Mang","consumable":false,"quantity":1},
                {"id":5,"catagory":"Audiovisual","mfr":"Unknown","item":"Microphone","descr":"Chior","consumable":false,"quantity":1},
                {"id":6,"catagory":"Audiovisual","mfr":"Unknown","item":"Microphone","descr":"Chior","consumable":false,"quantity":1},
                {"id":7,"catagory":"Audiovisual","mfr":"Unknown","item":"Microphone","descr":"Chior","consumable":false,"quantity":1},
                {"id":8,"catagory":"Audiovisual","mfr":"Ion","item":"PA System","descr":"Portable","consumable":false,"quantity":1},
                {"id":9,"catagory":"Audiovisual","mfr":"Unknown","item":"Projector","descr":"Old","consumable":false,"quantity":1},
                {"id":10,"catagory":"Canopy","mfr":"Unknown","item":"Canopy","descr":"Big White","consumable":false,"quantity":1},
                {"id":11,"catagory":"Canopy","mfr":"Unknown","item":"Canopy","descr":"Small White","consumable":false,"quantity":1},
                {"id":12,"catagory":"Canopy","mfr":"Unknown","item":"Canopy","descr":"12 x 14","consumable":false,"quantity":1},
                {"id":13,"catagory":"Canopy","mfr":"Unknown","item":"Canopy","descr":"12 x 12","consumable":false,"quantity":1},
                {"id":14,"catagory":"Canopy","mfr":"Unknown","item":"Canopy","descr":"7 x 7","consumable":false,"quantity":1},
                {"id":15,"catagory":"Canopy","mfr":"Coleman","item":"Canopy","descr":"10 x 10","consumable":false,"quantity":1},
                {"id":16,"catagory":"Canopy","mfr":"Coleman","item":"Canopy","descr":"10 x 10","consumable":false,"quantity":1},
                {"id":17,"catagory":"Canopy","mfr":"Coleman","item":"Canopy","descr":"10 x 10","consumable":false,"quantity":1},
                {"id":18,"catagory":"Canopy","mfr":"Ozark","item":"Canopy","descr":"10 x 10","consumable":false,"quantity":1},
                {"id":19,"catagory":"Canopy","mfr":"Ozark","item":"Canopy","descr":"10 x 10","consumable":false,"quantity":1},
                {"id":20,"catagory":"Canopy","mfr":"Ozark","item":"Canopy","descr":"10 x 10","consumable":false,"quantity":1},
                {"id":21,"catagory":"Canopy","mfr":"Ozark","item":"Canopy","descr":"10 x 10","consumable":false,"quantity":1},
                {"id":22,"catagory":"Canopy","mfr":"Ozark","item":"Canopy","descr":"10 x 10","consumable":false,"quantity":1},
                {"id":23,"catagory":"Craft","mfr":"Unknown","item":"Box","descr":"Glue","consumable":false,"quantity":1},
                {"id":24,"catagory":"Craft","mfr":"Unknown","item":"Glue Gun","descr":"Cheap","consumable":false,"quantity":1},
                {"id":25,"catagory":"Craft","mfr":"Unknown","item":"Glue Gun","descr":"Cheap","consumable":false,"quantity":0},
                {"id":26,"catagory":"Craft","mfr":"Unknown","item":"Glue Gun","descr":"Cheap","consumable":false,"quantity":0},
                {"id":27,"catagory":"Craft","mfr":"Unknown","item":"Glue Stick","descr":"1 ft","consumable":true,"quantity":17},
                {"id":28,"catagory":"Craft","mfr":"Unknown","item":"Box","descr":"Marker","consumable":false,"quantity":1},
                {"id":29,"catagory":"Craft","mfr":"Unknown","item":"Paper Roll","descr":"3 ft","consumable":true,"quantity":3},
                {"id":30,"catagory":"Craft","mfr":"Unknown","item":"Box","descr":"Pencil","consumable":false,"quantity":1},
                {"id":31,"catagory":"Craft","mfr":"Unknown","item":"Box","descr":"Scissor","consumable":false,"quantity":1},
                {"id":32,"catagory":"Craft","mfr":"Unknown","item":"Box","descr":"Tape","consumable":false,"quantity":1},
                {"id":33,"catagory":"Costume","mfr":"Unknown","item":"Box","descr":"Lion","consumable":false,"quantity":1},
                {"id":34,"catagory":"Costume","mfr":"Unknown","item":"Lion Head","descr":"Old Red","consumable":false,"quantity":1},
                {"id":35,"catagory":"Costume","mfr":"Unknown","item":"Lion Head","descr":"Small","consumable":false,"quantity":1},
                {"id":36,"catagory":"Costume","mfr":"Unknown","item":"Lion Head","descr":"New Red","consumable":false,"quantity":1},
                {"id":37,"catagory":"Costume","mfr":"Unknown","item":"Lion Head","descr":"New Yellow","consumable":false,"quantity":1},
                {"id":38,"catagory":"Electrical","mfr":"Unknown","item":"Extension Cable","descr":"12 ft","consumable":false,"quantity":1},
                {"id":39,"catagory":"Electrical","mfr":"Unknown","item":"Extension Cable","descr":"25 ft","consumable":false,"quantity":1},
                {"id":40,"catagory":"Electrical","mfr":"Unknown","item":"Extension Cable","descr":"25 ft","consumable":false,"quantity":1},
                {"id":41,"catagory":"Electrical","mfr":"Unknown","item":"Extension Cable","descr":"100 ft","consumable":false,"quantity":1},
                {"id":42,"catagory":"Electrical","mfr":"Unknown","item":"Extension Cable","descr":"100 ft","consumable":false,"quantity":1},
                {"id":43,"catagory":"Electrical","mfr":"Duracell","item":"Battery","descr":"D","consumable":true,"quantity":12},
                {"id":44,"catagory":"Electrical","mfr":"Unknown","item":"Light","descr":"Bulb","consumable":true,"quantity":2},
                {"id":45,"catagory":"Electrical","mfr":"Unknown","item":"Light","descr":"Harness","consumable":false,"quantity":1},
                {"id":46,"catagory":"Electrical","mfr":"Unknown","item":"Light","descr":"Harness","consumable":false,"quantity":1},
                {"id":47,"catagory":"Kitchen","mfr":"Primo","item":"Jug","descr":"5 gal","consumable":false,"quantity":1},
                {"id":48,"catagory":"Kitchen","mfr":"Primo","item":"Jug","descr":"5 gal","consumable":false,"quantity":1},
                {"id":49,"catagory":"Kitchen","mfr":"Primo","item":"Jug","descr":"5 gal","consumable":false,"quantity":1},
                {"id":50,"catagory":"Kitchen","mfr":"Unknown","item":"Box","descr":"Kitchen","consumable":false,"quantity":1},
                {"id":51,"catagory":"Kitchen","mfr":"Unknown","item":"Cooler","descr":"Blue","consumable":false,"quantity":1},
                {"id":52,"catagory":"Kitchen","mfr":"Unknown","item":"Cooler","descr":"White","consumable":false,"quantity":1},
                {"id":53,"catagory":"Kitchen","mfr":"Unknown","item":"Cooler","descr":"Water","consumable":false,"quantity":1},
                {"id":54,"catagory":"Kitchen","mfr":"Unknown","item":"Cooler","descr":"Water","consumable":false,"quantity":1},
                {"id":55,"catagory":"Kitchen","mfr":"Unknown","item":"Cooler","descr":"Water","consumable":false,"quantity":1},
                {"id":56,"catagory":"Kitchen","mfr":"Unknown","item":"Cooler","descr":"Water","consumable":false,"quantity":1},
                {"id":57,"catagory":"Kitchen","mfr":"Dawn","item":"Dish Soap","descr":"Clean","consumable":true,"quantity":0},
                {"id":58,"catagory":"Kitchen","mfr":"Unknown","item":"Grill","descr":"Large","consumable":false,"quantity":1},
                {"id":59,"catagory":"Kitchen","mfr":"Unknown","item":"Knife","descr":"Small","consumable":true,"quantity":1},
                {"id":60,"catagory":"Kitchen","mfr":"Unknown","item":"Pan","descr":"8 in","consumable":true,"quantity":7},
                {"id":61,"catagory":"Kitchen","mfr":"Unknown","item":"Pot","descr":"Small","consumable":true,"quantity":6},
                {"id":62,"catagory":"Lantern","mfr":"Coleman","item":"Lantern","descr":"Gas","consumable":false,"quantity":1},
                {"id":63,"catagory":"Lantern","mfr":"Coleman","item":"Lantern","descr":"Gas","consumable":false,"quantity":1},
                {"id":64,"catagory":"Lantern","mfr":"Coleman","item":"Lantern","descr":"Gas","consumable":false,"quantity":1},
                {"id":65,"catagory":"Lantern","mfr":"Coleman","item":"Lantern","descr":"Gas","consumable":false,"quantity":1},
                {"id":66,"catagory":"Lantern","mfr":"Coleman","item":"Lantern","descr":"Gas","consumable":false,"quantity":1},
                {"id":67,"catagory":"Lantern","mfr":"Coleman","item":"Lantern","descr":"Gas","consumable":false,"quantity":1},
                {"id":68,"catagory":"Lantern","mfr":"Enbrighten","item":"Lantern","descr":"Battery","consumable":false,"quantity":1},
                {"id":69,"catagory":"Lantern","mfr":"Enbrighten","item":"Lantern","descr":"Battery","consumable":false,"quantity":1},
                {"id":70,"catagory":"Lantern","mfr":"Enbrighten","item":"Lantern","descr":"Battery","consumable":false,"quantity":1},
                {"id":71,"catagory":"Lantern","mfr":"Enbrighten","item":"Lantern","descr":"Battery","consumable":false,"quantity":1},
                {"id":72,"catagory":"Lantern","mfr":"Enbrighten","item":"Lantern","descr":"Battery","consumable":false,"quantity":1},
                {"id":73,"catagory":"Lantern","mfr":"Enbrighten","item":"Lantern","descr":"Battery","consumable":false,"quantity":1},
                {"id":74,"catagory":"Lantern","mfr":"Enbrighten","item":"Lantern","descr":"Battery","consumable":false,"quantity":1},
                {"id":75,"catagory":"Lantern","mfr":"Enbrighten","item":"Lantern","descr":"Battery","consumable":false,"quantity":1},
                {"id":76,"catagory":"Lantern","mfr":"Coleman","item":"Bottle","descr":"Gas","consumable":true,"quantity":7},
                {"id":77,"catagory":"Lantern","mfr":"Unknown","item":"Tree","descr":"Gas","consumable":false,"quantity":1},
                {"id":78,"catagory":"Phung Vu","mfr":"Unknown","item":"Box","descr":"Phung Vu","consumable":false,"quantity":1},
                {"id":79,"catagory":"Phung Vu","mfr":"Unknown","item":"Mary","descr":"Statue","consumable":false,"quantity":1},
                {"id":80,"catagory":"Phung Vu","mfr":"Unknown","item":"Tabernacle","descr":"Wood","consumable":false,"quantity":1},
                {"id":81,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":82,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":83,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":84,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":85,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":86,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":87,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":88,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":89,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Green","consumable":false,"quantity":1},
                {"id":90,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":91,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":92,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":93,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":94,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":95,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":96,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":97,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":98,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":99,"catagory":"Tent","mfr":"Coleman","item":"Tent","descr":"Popup","consumable":false,"quantity":1},
                {"id":100,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Yellow","consumable":false,"quantity":1},
                {"id":101,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Yellow","consumable":false,"quantity":1},
                {"id":102,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Yellow","consumable":false,"quantity":1},
                {"id":103,"catagory":"Tent","mfr":"Unknown","item":"Tent","descr":"Yellow","consumable":false,"quantity":1},
                {"id":104,"catagory":"Utility","mfr":"Unknown","item":"Baby Wipes","descr":"70 Pack","consumable":true,"quantity":7},
                {"id":105,"catagory":"Utility","mfr":"Unknown","item":"First Aid","descr":"","consumable":true,"quantity":2},
                {"id":106,"catagory":"Utility","mfr":"Unknown","item":"Box","descr":"Mothers Day","consumable":false,"quantity":1},
                {"id":107,"catagory":"Utility","mfr":"Unknown","item":"Box","descr":"Rope","consumable":false,"quantity":1},
                {"id":108,"catagory":"Utility","mfr":"Unknown","item":"Box","descr":"Tarp","consumable":false,"quantity":1},
                {"id":109,"catagory":"Utility","mfr":"Unknown","item":"Wagon","descr":"Popup","consumable":false,"quantity":1},
                {"id":110,"catagory":"Utility","mfr":"Unknown","item":"Wagon","descr":"Popup","consumable":false,"quantity":1}
            ], // end of item
            "transfer": [
                {"id":0,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":1,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":3,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":2,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":4,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":5,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":7,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":6,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":8,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":9,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":11,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":10,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":12,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":13,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":15,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":14,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":16,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":17,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":19,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":18,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":20,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":21,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":22,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":23,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":25,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":24,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":26,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":27,"date":1673962839074,"user":"STORAGE","quantity":17},
                {"id":29,"date":1673962839074,"user":"STORAGE","quantity":3},
                {"id":28,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":30,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":31,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":33,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":32,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":34,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":35,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":37,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":36,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":38,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":39,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":41,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":42,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":43,"date":1673962839074,"user":"STORAGE","quantity":12},
                {"id":45,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":44,"date":1673962839074,"user":"STORAGE","quantity":2},
                {"id":46,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":47,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":49,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":48,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":50,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":51,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":53,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":52,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":54,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":55,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":57,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":56,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":58,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":59,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":61,"date":1673962839074,"user":"STORAGE","quantity":6},
                {"id":60,"date":1673962839074,"user":"STORAGE","quantity":7},
                {"id":62,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":65,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":64,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":66,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":67,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":68,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":69,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":70,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":71,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":73,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":72,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":74,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":75,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":76,"date":1673962839074,"user":"STORAGE","quantity":7},
                {"id":77,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":78,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":79,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":81,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":80,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":82,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":83,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":85,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":84,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":86,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":88,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":87,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":89,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":91,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":90,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":92,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":93,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":95,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":94,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":96,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":97,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":99,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":98,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":100,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":101,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":103,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":102,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":104,"date":1673962839074,"user":"STORAGE","quantity":7},
                {"id":105,"date":1673962839074,"user":"STORAGE","quantity":2},
                {"id":107,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":106,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":108,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":109,"date":1673962839074,"user":"STORAGE","quantity":1},
                {"id":110,"date":1673962839074,"user":"STORAGE","quantity":1}
            ] // end of transfer
        } // end of db
    } // end of constructor

    getDB() {
        return this.db;
    } // end of get data base

    getUser() {
        return this.db.user;
    } // end of get user

    getItem() {
        return this.db.item;
    } // end of get item

    getItemMap() {
        return this.db.item
            .reduce((t,s) => {
                t.set(s.id, s);
                return t;
            }, new Map());
    } // end of get item map

    getTransfer() {
        return this.db.transfer;
    } // end of get transfer

    postTransfer(transfer) {
        this.db.transfer.push(transfer);
    } // end of post transfer
} // end of date base class

class Doc {
    constructor() {
        this.body = document.querySelector('body');
        this.main = document.querySelector('main');
        this.interval = undefined;
        document
            .querySelector('form')
            .addEventListener('submit', event => event.preventDefault());
    } // end of constructor
    
    flashBackground(color) {
        this.body.style.background = color;
        
        this.interval = setInterval(() => {
            this.body.style.background = 'grey';
            clearInterval(this.interval);
        }, 100)
    } // end of flash background

    clear() {
        this.main.innerHTML = ''
    } // end of clear main
    
    append(x) {
        this.main.append(x);
    } // end of append main

    setCartNumber(num) {
        if (!Number.isInteger(num) || num < 0) return;

        if (num == 0)
            document.querySelector('menu')
                .style.setProperty('--pseudo-cart-number', '')
        else
            document.querySelector('menu')
                .style.setProperty('--pseudo-cart-number', '"' + num + '"')
    } // end of set cart number

    getSearch() {
        return document.getElementById('search').value;
    }
} // end of document class

class Logic {
    constructor(db, doc) {
        this.db = db;
        this.doc = doc;
        this.frame = undefined;
        this.cart = new Map();
        this.user = 'STORAGE';
        this.colorConfirm = 'rgb(145, 247, 131)';
        this.colorRemove = 'rgb(250, 119, 107)';

        this.handleUser();
    } // end of constructor

    filterSearch(y) {
        return this.doc.getSearch()
            .toUpperCase()
            .split(' ')
            .filter(x => x != '')
            .map(x => Object.values(y).join('')
                .toUpperCase()
                .match(x))
            .every(x => x)
    } // end of filter search

    flashBackground(color) {
        this.doc.flashBackground(color);
    } // end of flash background

    setUser(user) {
        this.user = user;
        this.handleUser();
    } // end of set user

    handleUser() {
        this.frame = this.handleUser;
        this.doc.clear();
        this.db.getUser()
            .filter(this.filterSearch, this)
            .map(x => {
                const input = document.createElement('input');
                
                input.setAttribute('class', 'user')
                input.setAttribute('type', 'button')
                input.setAttribute('value', x)
                input.onclick = e => {
                    logic.setUser(e.target.value);
                    logic.flashBackground(this.colorConfirm);
                    logic.handleUser();
                } // end of on click
                
                if(input.value == this.user) input.setAttribute('class', 'userSelect');

                return input;
            }) // end of map
            .forEach(this.doc.append, this.doc);
    } // end of handle user
    
    addCart(id) {
        const itemMap = this.db.getItemMap();

        if (this.cart.has(id) && itemMap.get(id).consumable &&
            this.cart.get(id) < itemMap.get(id).quantity)
            this.cart.set(id, this.cart.get(id) + 1);

        if (!this.cart.has(id))
            this.cart.set(id, 1);
        
        this.doc.setCartNumber(Array.from(this.cart)
            .map(x => x[1])
            .reduce((t,s) => t + s, 0));
    } // end of add cart

    handleItem() {
        this.frame = this.handleItem;
        this.doc.clear();
        this.db.getItem()
            .filter(this.filterSearch, this)
            .map(x => {
                const html = x.mfr + ' ' + x.item + ' - ' + x.descr + '\nID:' + x.id +
                    ', Catagory:' + x.catagory + (x.consumable?(', Quantity:' + x.quantity):'');
                const input = document.createElement('input');
                
                input.setAttribute('class', 'item')
                input.setAttribute('type', 'button')
                input.setAttribute('value', html)
                input.onclick = () => {
                    logic.addCart(x.id);
                    logic.flashBackground(this.colorConfirm);
                } // end of on click
                
                return input;
            }) // end of map
            .forEach(this.doc.append, this.doc);
    } // end of handle item
    
    handleLook() {
        this.frame = this.handleLook;
        const itemMap = this.db.getItemMap();

        this.doc.clear();
        ['<td>ITEM</td><td>ID</td><td>DATE</td><td>USER</td><td>Quantity</td>']
            .concat(this.db.getTransfer()
                .slice()
                .reverse()
                .map(x => Object.assign({}, x, itemMap.get(x.id)))
                .filter(this.filterSearch, this)
                .map(x => '<td>' + x.mfr + ' ' + x.item + ' - ' + x.descr + '</td><td>' + x.id +
                    '</td><td>' + new Date(x.date).toLocaleString() + '</td><td>' + x.user +
                    '</td><td>' + x.quantity + '</td>'))
            .map(x => {
                const tr = document.createElement('tr');
                tr.innerHTML = x;
                return tr
            }) // end of map
            .forEach(this.doc.append, this.doc);
    } // end of handle look

    subCart(id) {
        const itemMap = this.db.getItemMap();

        if (this.cart.has(id) && this.cart.get(id) == 1)
            this.cart.delete(id);

        if (this.cart.has(id) && itemMap.get(id).consumable &&
            this.cart.get(id) > 1)
            this.cart.set(id, this.cart.get(id) - 1);
        
        this.doc.setCartNumber(Array.from(this.cart)
            .map(x => x[1])
            .reduce((t,s) => t + s, 0));
    } // end of add cart

    postTransfer() {
        Array.from(this.cart)
            .map(x => {
                return {"id":x[0], "date": new Date().valueOf(), "user":this.user, "quantity":x[1]};
            })
            .forEach(this.db.postTransfer, this.db);
        
        this.cart.clear();
        this.doc.setCartNumber(0);
    } // end of post transfer

    handleCart() {
        this.frame = this.handleCart;
        const itemMap = this.db.getItemMap();
        
        this.doc.clear();

        if(this.cart.size == 0) {
            this.doc.append('cart is empty');
            return;
        } // end of if

        Array.from(this.cart)
            .map(x => {
                const item = Object.assign({}, itemMap.get(x[0]))
                item.quantity = x[1];
                return item;
            }) // end of map
            .filter(this.filterSearch, this)
            .map(x => {
                const html = x.mfr + ' ' + x.item + ' - ' + x.descr + '\nID:' + x.id +
                    ', Catagory:' + x.catagory + (x.consumable?(', Quantity:' + x.quantity):'');
                const input = document.createElement('input');
                
                input.setAttribute('class', 'cart')
                input.setAttribute('type', 'button')
                input.setAttribute('value', html)
                input.onclick = () => {
                    logic.subCart(x.id);
                    logic.flashBackground(this.colorRemove);
                    logic.handleCart();
                }; // end of on click
                
                return input;
            }) // end of map
            .forEach(this.doc.append, this.doc);

            const transfer = document.createElement('input')
            transfer.setAttribute('class', 'transfer')
            transfer.setAttribute('type', 'button')
            transfer.setAttribute('value', 'checkout as ' + this.user)
            transfer.onclick = () => {
                    logic.postTransfer();
                    logic.handleCart();
            };
            this.doc.append(document.createElement('hr'))
            this.doc.append(transfer);
    } // end of handle cart
} // end of logic class

const logic = new Logic(new DB(''), new Doc());
