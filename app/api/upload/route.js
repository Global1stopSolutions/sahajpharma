// import formidable from "formidable";
// import fs from "fs";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default async function handler(req, res) {
  //   const form = formidable({});
  console.log("Hiii");
  //   form.parse(req, async (err, fields, files) => {
  //     if (err) {
  //       console.error("Error parsing form:", err);
  //       res.status(500).json({ message: "Internal Server Error" });
  //       return;
  //     }

  //     const file = files.file;
  //     const filePath = file[0].filepath;

  //     try {
  //       return res.status(200).json({ message: "Picture uploaded successfully" });
  //     } catch (error) {
  //       console.error("Error reading file:", error);
  //       return res.status(500).json({ message: "Internal Server Error" });
  //     } finally {
  //       fs.unlinkSync(filePath);
  //     }
  //   });
}
