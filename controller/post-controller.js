const postList = require("../data");

const index = (req, res) => {
    res.json(postList);
};

const show = (req, res) => {
    let foundPost = null;
    console.log(postList);
    
    for (let i = 0; i < postList.length; i++) {
        const curElem = postList[i];
        if (curElem.id === parseInt(req.params.id)) {
            foundPost = curElem;
        }
    }
    if (foundPost === null) {
        res.sendStatus(404);
    } else {
        res.json(foundPost);
    }
}

const create = (req, res) => {
    res.json(`Modifica dei dati del post numero`);
}

const update = (req, res) => {
    res.json(`Modifca del curPosto del post numero`);
};

const modify = (req, res) => {
    const postId = req.params.id;
    res.json(`Modifica del curPosto del post numero ${postId}`);
}

const destroy = (req, res) => {
    const postId = req.params.id;
    res.json(`Cancellazione del post numero ${postId}`);
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}