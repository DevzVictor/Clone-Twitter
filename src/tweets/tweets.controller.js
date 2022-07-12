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

module.exports = {
  createTweetController,
};
