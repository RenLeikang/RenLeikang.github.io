import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const source = readFileSync(resolve("src/data/competitions.ts"), "utf8");
const entries = [...source.matchAll(/id:\s*"([^"]+)"[\s\S]*?level:\s*"([^"]+)"[\s\S]*?proof:\s*\{[^}]*path:\s*"([^"]+)"/g)];
const national = entries.filter((entry) => entry[2] === "国家级");
const results = national.map((entry) => ({
  id: entry[1],
  path: entry[3],
  exists: existsSync(resolve("public", entry[3].replace(/^\//, ""))),
}));

console.log("========== 竞赛数据检查 ==========");
console.log(`竞赛总数：${entries.length}`);
console.log(`国家级：${national.length}`);
console.log(`含证明文件：${results.filter((item) => item.exists).length}`);
console.log(`证明文件缺失：${results.filter((item) => !item.exists).length}`);
for (const item of results) console.log(`${item.exists ? "✓" : "✗"} ${item.id} -> ${item.path}`);

if (national.length !== 11 || results.some((item) => !item.exists)) process.exitCode = 1;
