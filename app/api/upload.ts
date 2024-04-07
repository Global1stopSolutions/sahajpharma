// pages/api/upload.ts
import { NextApiRequest, NextApiResponse } from "next";
import formidable, { Files } from "formidable";
import fs from "fs";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  return await handlePostOperation(req, res);
}

async function handlePostOperation(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm({
    uploadDir: path.join(process.cwd(), "temp"),
    keepExtensions: true,
  });

  form.parse(req, async (err: any, fields: formidable.Fields, files: Files) => {
    if (err) {
      return res.status(500).json({ success: false, error: "Failed to parse form data" });
    }

    const fileArray = files.file;
    console.log(fileArray);

    if (!fileArray || fileArray.length === 0) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const file = fileArray[0];
    // const filePath = file.path;
    // const fileName = file.name;

    // fs.renameSync(filePath, path.join(form.uploadDir, fileName));

    return res.status(200).json({ success: true, message: "File uploaded successfully" });
  });
}
