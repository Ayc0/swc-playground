import { NowRequest, NowResponse } from "@now/node";
import { transform } from "@swc/core";

const options = {
    sourceMaps: false,
    filename: "input.js"
};

export default async (req: NowRequest, res: NowResponse) => {
    transform(req.body.code, options)
        .then(output => res.json({ status: "success", transformedCode: output.code }))
        .catch(error => {
            // console.log(error);
            res.json({ status: "error", transformedCode: "" });
        });
};
