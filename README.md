# MotionProfileJS
This is a simple tool to evaluate motion profiles in different zones simultaneously with video.

Implemented in Node.js

## Install

##### Requirements

- `node.js`

  If you don't have `node.js` installed, go to [Node.js Download](https://nodejs.org/en/download/) to download one. This page might be helpful [Getting-started](https://docs.npmjs.com/getting-started/installing-node).

##### This app

```
git clone https://github.com/shuqinlee/MotionProfileJS.git
```

## Settings

Open `MotionJS\public` folder, **place your motion profiles into `img` folder and videos into `videos` corresponding to the name of motion profiles.** (for now, maybe improved later)

把motion profiles放到`img`文件夹下，相对应的视频放在`videos`文件夹下。

## Run

- Open cmd or terminal

  - Mac:

    Open terminal, cd into `MotionJS` directory: `cd {Your path}/MotionProfileJS/MotionJS/`

  - Windows

    Run it with `cmd`.

-  run `node app.js`
- `Server starts at port 127.0.0.1:2500 …` prompts server starts successfully. If fails, try switching the port specified in app.js. 
- Open a browser, enter `127.0.0.1:2500` .