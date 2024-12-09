const postList = require("../data/posts");

const postList = require("../data/posts");

const index = (req, res) => {
    const query = req.query.tags;
    
    if (query === undefined) {
        return res.json({
            data: postList,
            total: postList.length
        });
    }

    const filterTags = postList.filter(curItem => 
        curItem.tags.includes(query)
    );

    return res.json({
        data: filterTags,
        total: filterTags.length
    });
};

module.exports = { index };

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

    const postid = parseInt(req.params.id);

    const cancel = postList.findIndex((curItem) => curItem.id === postid);

    if (cancel === -1) {
        res.sendStatus(404);

    } else {

        postList.splice(cancel, 1)
        res.sendStatus(204);
    }
}

module.exports = {
    index,
    show,
    create,
    update,
    modify,
    destroy
}