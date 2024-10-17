#!/usr/bin/env node

import { input } from "@inquirer/prompts";
import path from "path";

const questions = [
  {
    type: "input",
    name: "project name",
    message: `What is your project's name: `,
  },
];

async function init() {
  const answer = await input({ message: questions[0]?.message! });
}

init();
