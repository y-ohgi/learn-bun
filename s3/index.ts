import { env, s3 } from "bun";

const BUCKET = env.BUCKET;

const file = s3.file(`s3://${BUCKET}/test.json`);

console.log(await file.json());

// MEMO: アップロード用の署名付きURLを取得する
// const upload = s3.presign(`s3://${BUCKET}/upload.json`, {
//   method: "PUT",
//   type: "application/json",
// });

// console.log(upload)

// MEMO: 署名付きURLを取得する
// const download = s3.presign(`s3://${BUCKET}/test.json`);

// console.log(download);
