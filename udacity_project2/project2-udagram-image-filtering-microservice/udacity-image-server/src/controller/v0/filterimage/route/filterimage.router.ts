
import { Router, Request, Response } from "express";
import path from 'path';
import fs from 'fs';

import {
  isImageTypeSupported,
  filterImageFromURL,
  deleteLocalFiles
} from "../../../../util/util";

import { requireAuth } from '../auth';

const router: Router = Router();

//router.get('/filteredimage', requireAuth, async (req: Request, res: Response) => {

router.get('/filteredimage',  async (req: Request, res: Response) => {
  let imageURL: string = req.query.image_url;

  if (!imageURL) {
    return res.status(400).send({ message: "Image URL required is not valid" });
  }

  if (!isImageTypeSupported(imageURL.toLowerCase())) 
  {
    return res.status(422).send({ message: "Image type not supported" });
  }

  let filteredImagePath: string;
  try 
  {
    filteredImagePath = await filterImageFromURL(imageURL);
  } 
  catch (err) 
  {
    console.error("ERROR::applyFilter >> ", err);
    return res.status(204).send({ message: "Error while filtering image" });
  }

  res.download(filteredImagePath, async err => {
    if (err) {
      res.status(204).end();
    }

    try {
      await deleteLocalFiles([filteredImagePath]);
    } catch (err) {
      console.error("ERROR::deleteTempFiles >> ", err);
    }
  });
});
//! END @TODO1

// Root URI call
router.get("/", async (req: Request, res: Response) => 
{
  res.send("Try /filteredimage?image_url={url}");
});

export const FilterImageRouter: Router = router;
