const input = document.getElementById("commandInput");
const output = document.getElementById("output");

const installedPackages = [];

const packages = {
  snake: "Snake Game Installed.",
  browser: "Browser Installed.",
  moonfiles: "MoonFiles Installed.",
  youtube: "YouTube Installed.",
  discord: "Discord Installed.",
  tetris: "Tetris Installed."
};

const customCommands = {};

input.addEventListener("keydown", function(e){

  if(e.key === "Enter"){

    const cmd = input.value.trim();

    addLine("tex@moon:~ > " + cmd, "command");

    runCommand(cmd);

    input.value = "";
  }

});

function addLine(text, className){

  const div = document.createElement("div");

  div.className = className;

  div.textContent = text;

  output.appendChild(div);

  output.scrollTop = output.scrollHeight;
}

function runCommand(cmd){

  // HELP
  if(cmd === "help"){

    addLine("> help", "response");
    addLine("> clear", "response");
    addLine("> ls", "response");
    addLine("> pwd", "response");
    addLine("> pkg install [name]", "response");
    addLine("> pkg list", "response");
    addLine("> create-command [name]", "response");
    addLine("> //moon", "response");

  }

  // CLEAR
  else if(cmd === "clear"){

    output.innerHTML = "";

  }

  // LS
  else if(cmd === "ls"){

    addLine("downloads", "response");
    addLine("storage", "response");
    addLine("moonfiles", "response");

  }

  // PWD
  else if(cmd === "pwd"){

    addLine("/home/tex", "response");

  }

  // PKG INSTALL
  else if(cmd.startsWith("pkg install ")){

    const pkgName = cmd.replace("pkg install ", "");

    if(packages[pkgName]){

      if(!installedPackages.includes(pkgName)){

        installedPackages.push(pkgName);

        addLine(packages[pkgName], "response");

      }else{

        addLine("Package already installed.", "response");

      }

    }else{

      addLine("Package not found.", "response");

    }

  }

  // PKG LIST
  else if(cmd === "pkg list"){

    if(installedPackages.length === 0){

      addLine("No packages installed.", "response");

    }else{

      addLine("Installed Packages:", "response");

      installedPackages.forEach(pkg => {
        addLine("- " + pkg, "response");
      });

    }

  }

  // OPEN INSTALLED APPS
  else if(installedPackages.includes(cmd)){

    if(cmd === "youtube"){

      addLine("Opening YouTube...", "response");

      setTimeout(() => {
        window.open("https://youtube.com");
      }, 1000);

    }

    else if(cmd === "discord"){

      addLine("Opening Discord...", "response");

      setTimeout(() => {
        window.open("https://discord.com");
      }, 1000);

    }

    else if(cmd === "moonfiles"){

      addLine("Opening MoonFiles...", "response");

      setTimeout(() => {
        window.open("https://moonfiles.site");
      }, 1000);

    }

    else{

      addLine(cmd + " launched.", "response");

    }

  }

  // CREATE COMMAND
  else if(cmd.startsWith("create-command ")){

    const commandName = cmd.replace("create-command ", "");

    customCommands[commandName] = true;

    addLine("Command created: " + commandName, "response");

  }

  // CUSTOM COMMANDS
  else if(customCommands[cmd]){

    addLine("Running custom command: " + cmd, "response");

  }

  // SECRET COMMAND
  else if(cmd === "//moon"){

    addLine("Opening MoonFiles...", "response");

    setTimeout(() => {

      window.open("https://moonfiles.site");

    }, 1000);

  }

  // UNKNOWN
  else{

    addLine("Command not found.", "response");

  }

        }
