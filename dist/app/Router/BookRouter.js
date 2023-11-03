"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (router) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const bookController = require("../../../dist/app/Controller/BookController");
    const jwt = require("../common/JWT");
    router.get("/book/list", bookController.get_list);
    router.get("/book/detail/:id", bookController.detail);
    router.post("/book/add", bookController.add);
    router.put("/book/update", bookController.update);
    router.delete("/book/delete", bookController.delete);
    router.get("/token", async function (req, res) {
        const user = {
            name: "Admin",
            email: "admin@gmail.com",
        };
        const _token = await jwt.make(user);
        res.json({ _token });
    });
};
