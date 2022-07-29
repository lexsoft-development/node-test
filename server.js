const express = require("express");
const http = require("http");

const app = express();
const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.use("/api/test", function (req, res) {
  res.status(200).json({
    message: "you reached it :)",
  });
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listens on port ${port}`);
});

// "https://jsonplaceholder.typicode.com/posts"
// "https://jsonplaceholder.typicode.com/comments"

// Desired result:

// [
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//     comments: [
//       {
//         postId: 1,
//         id: 1,
//         name: "id labore ex et quam laborum",
//         email: "Eliseo@gardner.biz",
//         body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
//       },
//       {
//         postId: 1,
//         id: 2,
//         name: "quo vero reiciendis velit similique earum",
//         email: "Jayne_Kuhic@sydney.com",
//         body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
//       },
//     ],
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//     comments: [
//       {
//         postId: 2,
//         id: 6,
//         name: "et fugit eligendi deleniti quidem qui sint nihil autem",
//         email: "Presley.Mueller@myrl.com",
//         body: "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
//       },
//       {
//         postId: 2,
//         id: 7,
//         name: "repellat consequatur praesentium vel minus molestias voluptatum",
//         email: "Dallas@ole.me",
//         body: "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
//       },
//     ],
//   },
// ];
