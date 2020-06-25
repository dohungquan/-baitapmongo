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

// khai bao them express
const app = express()
app.use(express.static(__dirname));

// let quotes = ["code html", 'style css', "day code len github ", "xem netfix"]

// khai bao cua video list la mot mang bao gom cac object co key : value
let videoList = [{
    link: "https://www.youtube.com/embed/SzLhtccBNX8",
    img: "https://yt3.ggpht.com/a/AATXAJwnPVFq5VPhoRybLDwPCG5WlKHe2ug3F68dSw=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Siêu Phẩm Hoạt Hình | Toàn Chức Cao Thủ - Tập 01 (Vietsub) | WeTV Vietnam",
    view: 416624,
},
{
    link: "https://www.youtube.com/embed/494Ttt9_EUI",
    img: "https://yt3.ggpht.com/a/AATXAJzttb4CXyBqO4t0fQ9o9PMF_LNjkCiK_TnifA=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Tin tổng hợp dịch do virus Corona (Covid-19) sáng 28/5 | VTC Now",
    view: 382238,
},
{
    link: "https://www.youtube.com/embed/494Ttt9_EUI",
    img: "https://yt3.ggpht.com/a/AATXAJzttb4CXyBqO4t0fQ9o9PMF_LNjkCiK_TnifA=s88-c-k-c0xffffffff-no-rj-mo",
    title: "Tin tổng hợp dịch do virus Corona (Covid-19) sáng 28/5 | VTC Now",
    view: 382238,
}
]

// khai bao khi them vao gia tri voi  gia tri nhap vao
app.post("/new-todo", function(req, res) {
    console.log("Đã nhận request", req.body)
    let newTodo = req.body;
    videoList.push(newTodo);
})

// tim kiem gia tri phu hop khi nhap vao va xoa di doi tuong chua ten no
app.post("/delete-todo", function(req, res) {
    console.log("Đã nhận request", req.body)
    for (var i = 0; i < videoList.length; i++) {
        if (videoList[i].title === req.body.title) {
            videoList.splice(i, 1);
            // console.log(videoList[i])
        }
    }
    // let newTodo = req.body;
    // videoList.push(newTodo);
})

// sua lai doi tuong voi gia tri nhap vao
app.post("/fix-todo", function(req, res) {
    console.log("Đã nhận request", req.body)
    for (var i = 0; i < videoList.length; i++) {
        if (videoList[i].title === req.body.title) {
            videoList[i].title = req.body.newtitle
        }

    }

})




app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.send("hello from sever")
})

app.get("/about", function (req, res) {
    res.send("<h1> hello every body</h1>")
})

// app.get("/todo", function (req, res) {
//     // console.log(__dirname)

//     res.render("index.ejs", { result: quotes })
// })

app.get("/", function (req, res) {
    // console.log(__dirname)

    res.render("index.ejs", { result: videoList })
})


// app.post("/new-todo", function (req, res) {

//     let newTodo = req.body.title
//     quotes.push(newTodo)
//     console.log("da nhan request", req.body)
// })

app.post("/", function (req, res) {

    let newTodo = req.body.title
    quotes.push(newTodo)
    console.log("da nhan request", req.body)
})

app.listen(3000, function () {
    console.log("hello nodejs running on port 3000")
})

// app.get("/about", function(req,res){
//     res.send("<h1> this is the about function</h1>")
// })
// app.get("/todo", function(req,res){
//     res.send("<h1> this is the about function</h1>")
// })
