import express from "express";

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

app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articlesInfo.find((a) => a.name === name);

  if (article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send("Este artigo não existe");
  }
});

app.listen(8000, () => {
  console.log("Servidor está rodando na porta 8000!");
});
