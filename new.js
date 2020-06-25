//console.log("hello world");
const express = require("express")
const bodyParser = require("body-parser")
const MongoClient = require("mongodb").MongoClient

// thong bao ra man hinh da su dung duoc mongodb
MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    if (err) {
        return console.log(err)
    }
    console.log("Conected to database")
})

// khai bao gia tri cua mang
// let quotes = ["Code HTML", "Style CSS", "Đẩy code lên Github", " Xem Netflix"]

// khai bao gia moi cua let
let quotes = [
    // {
    //     link: "https://www.youtube.com/embed/pwC3s7rIBzU",
    //     img: "https://yt3.ggpht.com/a/AATXAJwnPVFq5VPhoRybLDwPCG5WlKHe2ug3F68dSw=s88-c-k-c0xffffffff-no-rj-mo",
    //     title: "Siêu Phẩm Hoạt Hình | Toàn Chức Cao Thủ - Tập 01 (Vietsub) | WeTV Vietnam",
    //     view: 416624,
    // },
    {
        link: "https://www.youtube.com/embed/aHfXmtgt51k",
        img: "https://yt3.ggpht.com/a/AATXAJy4Jr7PiLEE7DSN9RRQukjpiwtPSmjD1megcw=s48-c-k-c0xffffffff-no-rj-mo",
        title: " 沒有你陪伴真的好孤單/誰在意我流下的淚/我的唇吻不到我愛的人/愛的世界只有你/我愛你勝過你愛我/错错错/我的好兄弟/许多年以后/願得一人心/今生缘/老鼠愛大米 | 经典老歌500首大全",
        view: 2828289,
    },
    {
        link: "https://www.youtube.com/embed/6MvLgaZffTY",
        img: "https://yt3.ggpht.com/a/AATXAJwoBN8cu-yYTq431WhD0F5bbfVQESDcacei3A=s48-c-k-c0xffffffff-no-rj-mo",
        title: "NGÀY HẠNH PHÚC - Những Ca Khúc Nhạc Trẻ Hay Nhất 2018 | lk nhac tre - nhac tinh yeu 2018",
        view: 48282578,
    },
    {
        link:"https://www.youtube.com/embed/Se9QkRs4n5s" ,
        img:"https://yt3.ggpht.com/a/AATXAJyqr54ABiK6oxibiBWvpoMZqvWtWjgcyNF4xg=s48-c-k-c0xffffffff-no-rj-mo",
        title:"Kỹ Năng Sinh Tồn Chống Chọi Với Thiên Nhiên - Khám phá Panama - Bear Grylls [Thuyết Minh]",
        view: 5858528552,
    },
    {
        link:"https://www.youtube.com/embed/mOcalkgjZ8c",
        img:"https://yt3.ggpht.com/a/AATXAJz_tQCeAwnUQ_YP19eCV_89EfZLm0gTFXUAPA=s48-c-k-c0xffffffff-no-rj-mo",
        title:"5 MÓN NGON TRONG RỪNG - Band Of Brothers - Tập 5",
        view: 4223333333 ,
    }
    ,
    {
        link:"https://www.youtube.com/embed/3Tgdg0wLXF8",
        img:"https://yt3.ggpht.com/a/AATXAJy0tWbCGA2w1fyh8qzV8_1cbH5ccfIpjkq7TQ=s48-c-k-c0xffffffff-no-rj-mo",
        title:"Một số thuật ngữ trong NoSQL - Database (Bài 1.4)",
        view: 529236633,
    }
    ,
    {
        link:"https://www.youtube.com/embed/SY5MD7f4Qfs",
        img:"https://yt3.ggpht.com/a/AATXAJzttb4CXyBqO4t0fQ9o9PMF_LNjkCiK_TnifA=s48-c-k-c0xffffffff-no-rj-mo",
        title:"Tin tổng hợp dịch do virus Corona (Covid-19) sáng 19/6 | VTC Now",
        view: 9696366666666,
    }
    ,
    {
        link:"https://www.youtube.com/embed/uC-blUP1ius",
        img:"https://yt3.ggpht.com/a/AATXAJyH0yVK7xs1wNLde3UZ-mCp928FmOWsgfWPvg=s48-c-k-c0xffffffff-no-rj-mo",
        title:"Paris By Night 99 - Tôi Là Người Việt Nam (Disc 2 Full Program)",
        view: 2525853332823,
    }
    ,
    {
        link:"https://www.youtube.com/embed/DgMDvophnEw",
        img:"https://yt3.ggpht.com/a/AATXAJyH0yVK7xs1wNLde3UZ-mCp928FmOWsgfWPvg=s48-c-k-c0xffffffff-no-rj-mo",
        title:"Hài Hoài Linh, Chí Tài | \"Con Sáo Sang Sông\" | PBN 75",
        view: 522556034,
    }
    ,
    {
        link:"https://www.youtube.com/embed/ivqVWVBi7gU",
        img:"https://yt3.ggpht.com/a/AATXAJw1mNTFNiIfjXVfOANE9SHwxBdhKELbEauBBg=s48-c-k-c0xffffffff-no-rj-mo",
        title:"Chiến tranh biên giới Việt - Trung 1979 và vấn đề Đông Dương",
        view: 258825822852,
    }
]


// khai bao them express
const app = express()
// ap dung bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "ejs")// su dung de chinh css
// app.use(express.static(__dirname));

// gui ra man hinh console khi goi toi function
app.get("/", function (req, res) {
    res.send("hello from sever")
})

// in ra h1 khi toi trang /about voi ham function
app.get("/about", function (req, res) {
    res.send("<h1> This is the about function</h1>")
})

// render ra trang index.ejs ket qua cua gia tri mang quotes
// app.get("/todo", function (req, res) {
//     // console.log(__dirname)

//     // res.sendFile(__dirname +"/index.html")
//     res.render("index.ejs", {result: quotes})
// })


// viet ra gia ham moi cap nhat
app.get("/newtodo", function (req, res) {
    // console.log(__dirname)

    // res.sendFile(__dirname +"/index.html")
    res.render("new.ejs", { result: quotes })
})


// tai action new-todo goi ham: doc gia tri req.body va gan gia tri newTodo= chuoi va push vao trong ejs
// app.post("/new-todo", function (req, res) {
//     console.log("requested", req.body);
//     let newTodo = req.body.title
//     quotes.push(newTodo)
// })


// viet gia tri ham moi
app.post("/new-todo", function (req, res) {
    console.log("requested", req.body);
    let newTodo = req.body;
    quotes.push(newTodo);
})

// xoa gia tri cu khi so sanh voi gia tri trong ham
app.post("/delete-todo", function(req, res) {
    console.log("Đã nhận request", req.body)
    for (var i = 0; i < quotes.length; i++) {
        if (quotes[i].title === req.body.title) {
            quotes.splice(i, 1);
            // console.log(videoList[i])

        }

    }
    // let newTodo = req.body;
    // videoList.push(newTodo);
})

//  thay doi gia tri trong doi tuong
app.post("/fix-todo", function(req, res) {
    console.log("Đã nhận request", req.body)
    for (var i = 0; i < quotes.length; i++) {
        if (quotes[i].title === req.body.title) {
            quotes[i].title = req.body.newtitle
        }
    }
})

// tai vi tri voi hostpost 3000 ta nhan duoc gia tri console la :
app.listen(3000, function () {
    console.log("hello nodejs running on port 3000")
})

