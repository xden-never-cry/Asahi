import { Command } from 'commander';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

const program = new Command();

program
  .option('-g, --generate', 'Generate a new Auth token')
  .parse(process.argv);

const options = program.opts();

//定义token文件路径
const homeDir = process.env.HOME || process.env.USERPROFILE || '';
const tokenDir = path.join(homeDir, '.asahi');
const tokenFilePath = path.join(tokenDir, '.token');

//生成新的token
function generateToken() {
  const token = crypto.randomBytes(32).toString('hex');
  fs.writeFileSync(tokenFilePath, token);
  console.log(`Generated new Auth token: ${token}`);
}

//读取并打印已有的token
function printToken() {
  try {
    const token = fs.readFileSync(tokenFilePath, 'utf8');
    console.log(`Existing Auth token: ${token}`);
  } catch (err) {
    console.error('No existing Auth token found.');
  }
}

//根据命令行选项执行相应操作
if (options.generate) {
  generateToken();
} else {
  printToken();
}