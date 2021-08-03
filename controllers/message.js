exports.get_messages = (req, res) => {
    res.send({ message: "ok", "id": ""});
}

exports.send_message = (req, res) => {
    res.send({data: [{payload: "msg content"}]})
}
