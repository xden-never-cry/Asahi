import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

const program = new Command();

program
  .option('-g, --generate', 'Generate a new Auth token')
  .parse(process.argv);

const options = program.opts();

//获取路径
const homeDir = process.env.HOME || process.env.USERPROFILE || '';
const tokenDir = path.join(homeDir, '.asahi');
const tokenFilePath = path.join(tokenDir, '.token');
if (!fs.existsSync(tokenDir)) {
  fs.mkdirSync(tokenDir, { recursive: true });
}

//生成新的token
function generateToken() {
  const token = crypto.randomBytes(32).toString('hex');
  fs.writeFileSync(tokenFilePath, token);
  console.log(`生成了新的token: ${token}`);
}

//读取并打印已有的token
function printToken() {
  try {
    const token = fs.readFileSync(tokenFilePath, 'utf8');
    console.log(`已经存在token: ${token}`);
  } catch (err) {
    console.error('没有找到可用的token，请使用 -g 选项生成新的token');
  }
}

//根据命令行选项执行相应操作
if (options.generate) {
  generateToken();
} else {
  printToken();
}