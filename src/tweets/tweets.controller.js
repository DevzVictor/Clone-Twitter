const tweetService = require("./tweets.services");

const createTweetController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      res.status(400).send({
        message: " Envie todos os dados necessários para a criação do tweet",
      });
    }

    const { id } = await tweetService.createTweetService(message, req.userId);

    return res.send({
      message: "Tweet criado com sucesso!",
      tweet: { id, message },
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const findAllTweetsController = async (req, res) => {
  try {
    const tweets = await tweetService.findAllTweetsService();

    if (tweets.length === 0) {
      return res.status(400).send({ message: "Não existem tweets" });
    }

    return res.send({
      results: tweets.map((tweet) => ({
        id: tweet._id,
        message: tweet.message,
        likes: tweet.likes.length,
        comments: tweet.comments.length,
        retweets: tweet.retweets.length,
        name: tweet.user.name,
        username: tweet.user.username,
        avatar: tweet.user.avatar,
      })),
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const searchTweetController = async (req, res) => {
  const { message } = req.query;

  const tweets = await tweetService.searchTweetService(message);

  if (tweets.length === 0) {
    return res
      .status(400)
      .send({ message: "Não existem tweets com essa mensagem!" });
  }
  return res.send({
    tweets: tweets.map((tweet) => ({
      id: tweet._id,
      message: tweet.message,
      likes: tweet.likes.length,
      comments: tweet.comments.length,
      retweets: tweet.retweets.length,
      name: tweet.user.name,
      username: tweet.user.username,
      avatar: tweet.user.avatar,
    })),
  });
};

module.exports = {
  createTweetController,
  findAllTweetsController,
  searchTweetController,
};
