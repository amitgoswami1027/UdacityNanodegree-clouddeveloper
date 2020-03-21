import { Router } from "express";
import { FilterImageRouter } from "./filterimage/route/filterimage.router";

const router: Router = Router();

// only / because the sample request is required to be on /
router.use("/", FilterImageRouter);

export const IndexRouter: Router = router;
