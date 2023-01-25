import express from "express";

let articlesInfo = [
  {
    name: "learn-react",
    upvotes: 0,
  },
  {
    name: "learn-nodes",
    upvotes: 0,
  },
  {
    name: "mongodb",
    upvotes: 0,
  },
];

const app = express();
app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((a) => a.name === name);
  if (article) {
    article.upvotes += 1;
    res.send(`O artigo ${name} agora tem ${article.upvotes} votos!`);
  } else {
    res.send("Este artigo não existe.");
  }
});

app.listen(8000, () => {
  console.log("Servidor está rodando na porta 8000!");
});
